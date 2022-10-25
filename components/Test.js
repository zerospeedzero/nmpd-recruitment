import { TestData } from "./TestData"
import { useState, useEffect } from "react"
import styles from '../styles/test.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import * as MdIcons from 'react-icons/md'

export default function Test() {
    const router = useRouter()

    const [i,setI] = useState(0)
    const [score,setScore] = useState(555)
    const [vidSource, setVidSource] = useState(null)
    const [answer, setAnswer] = useState(1)
    const [time,setTime] = useState(null)
    const [interv, setInterv] = useState(null)
    const [tout, setTout] = useState(null)
    const [init,setInit] = useState(false)
    const [mute,setMute] = useState(true)

    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.screen.width)
    }, [])

    const variants = {
        initial: { opacity:0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    var intel = score % 10
    var dream = (score - intel)/10 % 10
    var extro = (score - (dream*10 + intel))/100

    useEffect(() => {
        var video = document.getElementById('video')
        if (vidSource) {
            video.onloadedmetadata = function() {
                setTout(setTimeout(() => setInit(false),(video.duration-1)*1000))
                setInterv(setInterval(() => {
                    setTime(parseInt(video.duration-video.currentTime))
                },1000))
            }
        } else {
            setInit(true)
            clearInterval(interv)
            setInterv(null)
        }
    }, [vidSource])
    
    if (i == 15) {
        if ( intel < 5 ) {
            if ( dream < 5 ) {
                if ( extro < 5) {
                    router.push('/types/artist')
                } else {
                    router.push('/types/adventurer')
                }
            } else {
                if ( extro < 5 ) {
                    router.push('/types/dreamer')
                } else {
                    router.push('/types/visionary')
                }
            }
        } else {
            if ( dream < 5 ) {
                if ( extro < 5 ) {
                    router.push('/types/maker')
                } else {
                    router.push('/types/producer')
                }
            } else {
                if ( extro < 5 ) {
                    router.push('/types/thinker')
                } else {
                    router.push('/types/innovator')
                }
            }
        }
        return null
    } else {
        return (
            <motion.div className={styles.Test}
                animate={{backgroundColor: TestData[i].bgColor}}
                transition={{duration: 1}}>
                <motion.div
                    variants={variants}
                    initial='initial'
                    animate={ init ? 'animate' : 'initial'}
                    transition={{duration: 1}}
                    className={styles.Progress}>
                    {vidSource ? <>
                                    <div className={styles.Controller} 
                                        onClick={() => {
                                            setInit(false)
                                            clearTimeout(tout)
                                            setTimeout(() => {
                                                setI(i+1)
                                                setVidSource(null)                                            
                                                setTime(null)
                                            },1000)}}>skip</div>
                                    <div className={styles.Controller}>
                                        {time}
                                    </div>
                                    <div className={styles.Controller}
                                        onClick={() => {
                                            video.muted = !mute
                                            setMute(!mute)}}>{mute ? <MdIcons.MdVolumeOff /> : <MdIcons.MdVolumeUp />}</div>
                                </> :
                                TestData.map((question,index) => {
                                    return <div key={index}
                                            style={i >= index ? {backgroundColor: 'white'}: null}
                                            className={styles.ProgressStep}></div>
                                })
                    }
                </motion.div>
                { width > 500 && vidSource ? null : <motion.div
                    variants={variants}
                    initial='initial'
                    animate={ init ? 'animate' : 'initial'}
                    transition={{duration: 1}}
                    className={styles.TextRow}>
                    <div className={styles.Question}>
                        {TestData[i].question}
                    </div> 
                </motion.div>}
                { width < 500 ? <motion.div
                    variants={variants}
                    initial='initial'
                    animate={ init ? 'animate' : 'initial'}
                    transition={{duration: 1}}
                    className={styles.Row}>
                    { vidSource ? <video src={vidSource}
                                    id='video'
                                    className={styles.Video}
                                    style={{width: '100vw', objectFit: 'cover'}}                                    
                                    autoPlay
                                    muted={mute}
                                    onEnded={() => {
                                        setI(i+1)
                                        setVidSource(null)
                                        setTime(null)
                                    }} /> : null }
                </motion.div> : vidSource ? <video src={vidSource}
                                    id='video'
                                    className={styles.Video}
                                    style={{width: '100vw', objectFit: 'cover'}}                                    
                                    autoPlay
                                    muted={mute}
                                    onEnded={() => {
                                        setI(i+1)
                                        setVidSource(null)
                                        setTime(null)
                                    }} /> : null }
                { width > 500 && vidSource ? null : <motion.div
                    variants={variants}
                    initial='initial'
                    animate={ init ? 'animate' : 'initial'}
                    transition={{duration: 1}}
                    className={styles.TextRow}>
                    { vidSource ? 
                        <motion.button
                            className={styles.Answer}
                            animate={answer == 1 ? {backgroundColor: 'white', color: TestData[i].bgColor} : null}
                            transition={{duration: 1}}>
                            {TestData[i].answer1[0]}
                        </motion.button> :
                        <button
                            className={styles.Answer}
                            onClick={() => {
                                setAnswer(1)
                                setScore(score + TestData[i].answer1[1])
                                setVidSource(TestData[i].answer1[2])}}>
                            {TestData[i].answer1[0]}
                        </button> }
                    { vidSource ? 
                        <motion.button
                            className={styles.Answer}
                            animate={answer == 2 ? {backgroundColor: 'white', color: TestData[i].bgColor} : null}
                            transition={{duration: 1}}>
                            {TestData[i].answer2[0]}
                        </motion.button> :
                        <button
                            className={styles.Answer}
                            onClick={() => {
                                setAnswer(2)
                                setScore(score + TestData[i].answer2[1])
                                setVidSource(TestData[i].answer2[2])}}>
                            {TestData[i].answer2[0]}
                        </button> }
                </motion.div>}
            </motion.div>
        )
    }
}