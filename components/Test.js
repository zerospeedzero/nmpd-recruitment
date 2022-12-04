import { TestData } from "./TestData"
import { useState, useEffect } from "react"
import styles from '../styles/test.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import * as MdIcons from 'react-icons/md'
import useTranslation from "next-translate/useTranslation"
import * as gtag from "../lib/ga/gtag"

export default function Test() {
    const router = useRouter()
    let { t } = useTranslation()

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
    let doing_test = {
        action: 'doing_test',
        category: 'engagement',
        label: 'doing_test',
        value: ''
    }
    function handleEvent1(question_no) {
        // e.preventDefault();
        doing_test.value = question_no;
        gtag.event(doing_test);
        console.log('Google analytics event is generated;');  
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
    console.log('Total score: ' + score);
    console.log('intel score: ' + intel);
    console.log('dream score: ' + dream);
    console.log('extro score: ' + extro);
    if (i == 6 ) {
        if ( intel < 5 ) {
            if ( dream < 5 ) {
                if ( extro < 5) {
                    router.push('/types/pm')
                } else {
                    router.push('/types/ad')
                }
            } else {
                if ( extro < 5 ) {
                    router.push('/types/pm')
                } else {
                    router.push('/types/ia')
                }
            }
        } else {
            if ( dream < 5 ) {
                if ( extro < 5 ) {
                    router.push('/types/ad')
                } else {
                    router.push('/types/vt')
                }
            } else {
                if ( extro < 5 ) {
                    router.push('/types/vt')
                } else {
                    router.push('/types/ia')
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
                    {/* <div className={styles.Question}>
                        {t("test:" + TestData[i].question)}
                    </div> */}
                    {/* Question animation */ }
                    <video src={TestData[i].question_animation}
                        id='video1'
                        className={styles.Video}
                        // style={{width: '100vw', objectFit: 'cover'}}                                    
                        style={{width: '100vw', objectFit: 'cover'}}                                    
                        // style={{width: '100vw' }}                                    
                        autoPlay
                        playsinline="true"
                        webkit-playsinline="true"
                        muted={mute}
                        onEnded={() => {
                        // setI(i+1)
                        // setVidSource(null)
                        // setTime(null)
                        }}
                    />
                </motion.div>}
                { width > 500 && vidSource ? null : <motion.div
                    variants={variants}
                    initial='initial'
                    // animate={ init ? 'animate' : 'initial'}
                    animate={{
                        scale: [1, 1.5, 3, 1.5, 1],
                        rotate: [0, 10, 0, -10, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        opacity:1                     
                    }}
                    transition={{duration: 5}}
                    className={styles.bottom_question}>
                    <div style={{color: TestData[i].Color}} className={styles.Question}>
                        {t("test:" + TestData[i].question)}
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
                                    }} />: null }
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
                            // whileHover={{ scale: 1.3 }}
                            animate={answer == 1 ? {backgroundColor: 'white', color: TestData[i].bgColor} : null}
                            transition={{duration: 1}}>
                            {t("test:" + TestData[i].answer1[0])}
                        </motion.button> :
                        <button
                            className={styles.Answer}
                            onClick={() => {
                                handleEvent1(TestData[i].question)
                                setAnswer(1)
                                setScore(score + TestData[i].answer1[1])
                                setVidSource(TestData[i].answer1[2])}}>
                            {t("test:" + TestData[i].answer1[0])}
                        </button> }
                    { vidSource ? 
                        <motion.button
                            className={styles.Answer}
                            animate={answer == 2 ? {backgroundColor: 'white', color: TestData[i].bgColor} : null}
                            transition={{duration: 1}}>
                            {t("test:" + TestData[i].answer2[0])}
                        </motion.button> :
                        <button
                            className={styles.Answer}
                            onClick={() => {
                                handleEvent1(TestData[i].question)
                                setAnswer(2)
                                setScore(score + TestData[i].answer2[1])
                                setVidSource(TestData[i].answer2[2])}}>
                            {t("test:" + TestData[i].answer2[0])}
                        </button> }
                </motion.div>}
            </motion.div>
        )
    }
}