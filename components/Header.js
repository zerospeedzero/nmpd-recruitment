import styles from '../styles/header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TypesData } from './TypesData'
import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation"
import ReactCountryFlag from "react-country-flag"

export default function Header() {
    const router = useRouter()
    const forceReload = () => {
        router.push('/');
        // router.reload(window.location.pathname);
    }
    let { t } = useTranslation()
    // Show language selection
    const variants = {
        initial: { opacity:0, y: '-3rem' },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 2
            }
        }
    }

    var type = null
    for (var i = 0; i < TypesData.length; i++) {
        if (router.query.id == TypesData[i].id) {
            type = TypesData[i]
        }
    } 
    
    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            style={type?{backgroundImage: `linear-gradient(${type.bgColor},${type.bgColor},rgba(255,255,255,0))`}:{}}
            className={styles.Header}>
            <Link href="/redirect.html" passHref> 
                <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null}  className="{styles.Link}" onClick={forceReload}>{t("common:home")}</a>
            </Link>
            <div>
                {/* <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}> */}
                    <Link href={router.asPath} locale="en-US" >
                        <label><ReactCountryFlag className={styles.flag} countryCode="US" svg title="USA"/></label>
                    </Link>
                {/* </motion.div> */}
                <Link href={router.asPath} locale="zgh-MA">
                    <label><ReactCountryFlag className={styles.flag} countryCode="MA" svg title="Morocco"/></label>
                </Link>
                <Link href={router.asPath} locale="es-MX">
                    <label><ReactCountryFlag className={styles.flag} countryCode="MX" svg title="Mexico"/></label>
                </Link>
                <Link href={router.asPath} locale="zh-HK">
                    <label><ReactCountryFlag className={styles.flag} countryCode="HK" svg title="Hong Kong"/></label>
                </Link>
                <Link href={router.asPath} locale="tl-PH">
                    <label><ReactCountryFlag className={styles.flag} countryCode="PH" svg title="Philippines"/></label>
                </Link>
                <Link href={router.asPath} locale="zh-CN">
                    <label><ReactCountryFlag className={styles.flag} countryCode="CN" svg title="China"/></label>
                </Link>
            </div>
            <Link href={router.route == '/types'? '/test': '/types'} passHref>
                <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null} className={styles.Link}>
                    {router.route == '/types'? `Take the Test`: t("common:the_types") }
                </a>
            </Link>
        </motion.div>
    )
}