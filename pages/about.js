// import { TypesData } from './TypesData'
import styles from '../styles/about.module.css'
import { useEffect, useState } from 'react'
import * as SiIcons from 'react-icons/si'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation"

function about () {
    const router = useRouter()
    let { t } = useTranslation()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.screen.width)
    }, [])
    
    // var type = null
    // for (var i = 0; i < TypesData.length; i++) {
    //     if (id == TypesData[i].id) {
    //         type = TypesData[i]
    //     }
    // }  

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
        <div className={styles.Type} style={{backgroundColor: '#22222'}}>
            <div style={scrollY < 0 && width < 500 ? {display:'none'} : width < 500 ? { opacity: scrollY } : null}
                className={styles.Banner}>
                <motion.h1
                    animate={{ marginLeft: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.Title}>
                        {/* {t("types:" + type.title)} */}
                        {/* {t("types:" + type.title)} */}
                        hello
                    </motion.h1>
                <motion.h2
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={styles.Tagline}>
                        {/* {type.tagline} */}
                        {/* {t("types:" + type.tagline)} */}
                    </motion.h2>
                <motion.video
                    animate={{ marginTop: 0 }}
                    transition={{duration: 1, ease: 'backOut', delay: 1 }}
                    className={styles.Video}
                    // src={`/${type.id}Small.mp4`}
                    autoPlay
                    muted
                    loop
                    preload='auto' />
            </div>
            <div className={styles.ParaFlex}>
                <div className={styles.ParaBox}>
                    <h3 style={{color: '#333333'}} className={styles.Heading}>{t("common:creative_strengths")}</h3>
                    <p className={styles.Paragraph}>{t("types:" + 'dummy')}</p>
                </div>
                <div className={styles.ParaBox}>
                    <h3 style={{color: '#333333'}} className={styles.Heading}>{t("common:untapped_potential")}</h3>
                    <p className={styles.Paragraph}>{t("types:" + 'dummy')}</p>
                </div>
                <div className={styles.ParaBox}>
                    <h3 style={{color: '#333333'}} className={styles.Heading}>{t("common:ideal_collaborator")}</h3>
                    <p className={styles.Paragraph}>{t("types:" + 'dummy')}</p>
                </div>
                <div className={styles.ParaBox}>
                    {/* {type.definition.map((paragraph, index) => {
                        return <p key={index} className={styles.Paragraph}>{paragraph}</p>
                    })} */}
                    <p className={styles.Paragraph}>{t("types:" + 'dummy')}</p>
                </div>
                <div style={{color: '#444444'}} className={styles.DownloadBox}>
                    {/* <p><a href={`/${type.id}Download.zip`} download>Download</a> your NMPD profile</p> */}
                    <p>Share your NMPD profile using <b>#NewMediaProductionDesignSait</b></p>
                    {/* <a href={`https://twitter.com/intent/tweet?hashtags=NewMediaProductionDesign&text=${type.tweetText} Take the quiz to discover your profile.&via=keyhansa1&url=https%3A%2F%2Fkeyhansa.ir`}>
                        <div className={styles.TwitterIcon} style={{backgroundColor: type.bgColor}}>
                            <SiIcons.SiTwitter />
                        </div>
                    </a> */}
                    <a className={styles.link} target="_blank" href="https://www.sait.ca/programs-and-courses/diplomas/new-media-production-and-design">Visit official New Media and Production Design (SAIT)</a>
                </div>
            </div>
        </div>
    )
}


export default about
