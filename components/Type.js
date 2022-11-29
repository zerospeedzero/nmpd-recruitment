import { TypesData } from './TypesData'
import styles from '../styles/type.module.css'
import { useEffect, useState } from 'react'
import * as SiIcons from 'react-icons/si'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation"
import {
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon    
  } from 'next-share'
import * as gtag from "../lib/ga/gtag"
// gtag.event({ action, category, label, value })

export default function Type({id}) {
    const router = useRouter()
    let { t } = useTranslation()
    
    const goto_sait = {
        action: 'generate_lead',
        category: 'engagement',
        label: 'goto_sait',
        value: id.title
    }
    function handleEvent2(e) {
        e.preventDefault();
        gtag.event(goto_sait);
        console.log('handleEvent2 is generated;');  
    }

    let share_social_media = {
        action: 'share_social_media',
        category: 'engagement',
        label: 'share_social_media',
        value: ''
    }

    function handleEvent3(media, e) {
        e.preventDefault();
        share_social_media.value = media
        gtag.event(share_social_media);
        console.log('Shared to ' + share_social_media.value);  
    }

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
                        {/* {t("types:" + type.title)} */}
                        {t("types:" + type.title)}
                </motion.h1>
                <motion.h2
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={styles.Tagline}>
                        {t("types:" + type.tagline)}
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
                    <h3 style={{color: type.bgColor}} className={styles.Heading}>{t("common:creative_strengths")}</h3>
                    {/* <div className={styles.Paragraph}>{t("types:" + type.creativeStrength)}</div> */}
                    <div className={styles.Paragraph} dangerouslySetInnerHTML={{__html: t('types:' + type.creativeStrength)}}/>
                </div>
                {/* <div className={styles.ParaBox}>
                    <h3 style={{color: type.bgColor}} className={styles.Heading}>{t("common:untapped_potential")}</h3>
                    <p className={styles.Paragraph}>{t("types:" + type.untappedPotential)}</p>
                </div> */}
                <div className={styles.ParaBox}>
                    <h3 style={{color: type.bgColor}} className={styles.Heading}>{t("common:profiles")}</h3>
                    {type.profiles.map((profile) => (
                        <p className={styles.profile} key={profile} title={t("types:" + profile + "_description")}><a onclick="handleEvent2(e); return true;" href="https://www.sait.ca/programs-and-courses/diplomas/new-media-production-and-design" target="_blank" rel="noreferrer">{t("types:" + profile)}</a><span className={styles.profileDescription}>{t("types:" + profile + '_description')}</span></p>
                    ))}
                </div>
                {/* <div className={styles.ParaBox}>
                    <p className={styles.Paragraph}>{t("types:" + type.definition)}</p>
                </div> */}
                <div style={{color: type.bgColor}} className={styles.DownloadBox}>
                    {/* <p><a href={`/${type.id}Download.zip`} download>Download</a> your NMPD profile</p> */}
                    <p>Share your NMPD profile using <b>#NewMediaProductionDesignSait</b></p>
                    {/* <a href={`https://twitter.com/intent/tweet?hashtags=NewMediaProductionDesign&text=${type.tweetText} Take the quiz to discover your profile.&via=keyhansa1&url=https%3A%2F%2Fkeyhansa.ir`}>
                        <div className={styles.TwitterIcon} style={{backgroundColor: type.bgColor}}>
                            <SiIcons.SiTwitter />
                        </div>
                    </a> */}
                    <div className={styles.SocialMedia}>
                        <FacebookShareButton onClick={(e) => handleEvent3('Facebook', e)}
                            url={'https://nmpd-recruitment.azurewebsites.net/types/' + type.id} title="NMPD recruitment">
                            <FacebookIcon size={40} round />
                        </FacebookShareButton>
                        <RedditShareButton onClick={(e) => handleEvent3('Reddit', e)}
                            url={'https://nmpd-recruitment.azurewebsites.net/types/' + type.id} title="NMPD recruitment">
                            <RedditIcon size={40} round />
                        </RedditShareButton>
                        <WhatsappShareButton onClick={(e) => handleEvent3('WhatsApp', e)}
                            url={'https://nmpd-recruitment.azurewebsites.net/types/' + type.id} title="NMPD recruitment">
                            <WhatsappIcon size={40} round />
                        </WhatsappShareButton>
                        <LinkedinShareButton onClick={(e) => handleEvent3('LinkedIn', e)}
                            url={'https://nmpd-recruitment.azurewebsites.net/types/' + type.id} title="NMPD recruitment">
                            <LinkedinIcon size={40} round />
                        </LinkedinShareButton>
                    </div>
                    <a className={styles.link} onclick="handleEvent2(e); return true;" rel="noreferrer" target="_blank" href="https://www.sait.ca/programs-and-courses/diplomas/new-media-production-and-design">Visit official New Media and Production Design (SAIT)</a>
                </div>
            </div>
        </div>
    )
}