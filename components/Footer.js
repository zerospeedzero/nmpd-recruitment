import styles from '../styles/footer.module.css'
import * as SiIcons from 'react-icons/si'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TypesData } from './TypesData'
import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation"

function Footer() {
    const router = useRouter()
    let { t } = useTranslation()

    const variants = {
        initial: { y: '3rem', opacity: 0 },
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
            style={type?{backgroundImage: `linear-gradient(rgba(255,255,255,0),${type.bgColor},${type.bgColor})`}:{}}
            className={styles.Footer}>
            { <Link href={router.route == '/'? '/about': '/about'} passHref>
                <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null} className="{styles.Link}">
                    {router.route == '/'? t("common:about"): null} 
                </a>
            </Link> }
            {/* { <a  id="assets" className="{styles.assets}">{ t("common:assets")}</a>} */}
            {/* <Link href="/"> */}
                {/* <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null}  className="{styles.Link}" >Back</a> */}
            {/* </Link>  */}

            {/* <Link href={router.route == '/'? '/about': ''} passHref>
                <a style={router.route == '/' ? {color: '#fff'} : {display: 'none'}} className="{styles.Link}">
                    {router.route == '/about'? `Take the Test`: t("common:about")}
                </a>
            </Link>  */}
                {/* <a href="/" style={router.route == '/' ? {color: '#fff'} : {display: 'none'}} className="{styles.Link}">
                    {router.route == '/about'? `Take the Test`: t("common:about")}
                </a> */}


            {/* <p style={router.route == '/' || router.route == '/about' ? null : {color:'#fff'}} className={styles.DevP}>
                <small>&copy; 2022 NMPD recruitment by Banana group. All right reserved</small>
            </p> */}
            {/* <Link href="/">
                <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null} className="{styles.Link}" >Share</a>
            </Link>                */}
        </motion.div>
    )
}

export default Footer

