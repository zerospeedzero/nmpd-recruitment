import { TypesData } from './TypesData'
import styles from '../styles/type.module.css'
import { useEffect, useState } from 'react'
import * as SiIcons from 'react-icons/si'
import {motion} from 'framer-motion'

export default function Type({id}) {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.screen.width)
    }, [])
    
    var type = null
    for (var i = 0; i < TypesData.length; i++) {
        if (id == TypesData[i].id) {
            type = TypesData[i]
        }
    }  

    var [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScrollY((200-window.scrollY)/200)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollY])

    return (
        <div className={styles.Type} style={{backgroundColor: type.bgColor}}>
            <div style={scrollY < 0 && width < 500 ? {display:'none'} : width < 500 ? { opacity: scrollY } : null}
                className={styles.Banner}>
                <motion.h1
                    animate={{ marginLeft: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.Title}>
                        {type.title}
                    </motion.h1>
                <motion.h2
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={styles.Tagline}>
                        {type.tagline}
                    </motion.h2>
                <motion.video
                    animate={{ marginTop: 0 }}
                    transition={{duration: 1, ease: 'backOut', delay: 1 }}
                    className={styles.Video}
                    src={`/${type.id}Small.mp4`}
                    autoPlay
                    muted
                    loop
                    preload='auto' />
            </div>
            <div className={styles.ParaFlex}>
                <div className={styles.ParaBox}>
                    <h3 style={{color: type.bgColor}} className={styles.Heading}>Creative Strengths</h3>
                    <p className={styles.Paragraph}>{type.creativeStrength}</p>
                </div>
                <div className={styles.ParaBox}>
                    <h3 style={{color: type.bgColor}} className={styles.Heading}>Untapped Potential</h3>
                    <p className={styles.Paragraph}>{type.untappedPotential}</p>
                </div>
                <div className={styles.ParaBox}>
                    <h3 style={{color: type.bgColor}} className={styles.Heading}>Ideal Collaborator</h3>
                    <p className={styles.Paragraph}>{type.collabrator}</p>
                </div>
                <div className={styles.ParaBox}>
                    {type.definition.map((paragraph, index) => {
                        return <p key={index} className={styles.Paragraph}>{paragraph}</p>
                    })}
                </div>
                <div style={{color: type.bgColor}} className={styles.DownloadBox}>
                    <p><a href={`/${type.id}Download.zip`} download>Download</a> your Creative Type</p>
                    <p>Share your Creative Type using <b>#mycreativetype</b></p>
                    <a href={`https://twitter.com/intent/tweet?hashtags=nextjs%2Cmycreativetype&text=${type.tweetText} Take the quiz to discover your type.&via=keyhansa1&url=https%3A%2F%2Fkeyhansa.ir`}>
                        <div className={styles.TwitterIcon} style={{backgroundColor: type.bgColor}}>
                            <SiIcons.SiTwitter />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}