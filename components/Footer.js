import styles from '../styles/footer.module.css'
import * as SiIcons from 'react-icons/si'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TypesData } from './TypesData'
import { motion } from 'framer-motion'

function Footer() {
    const router = useRouter()

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
            className={styles.DevDiv}>
            <p style={router.route == '/' || router.route == '/about' ? null : {color:'#fff'}} className={styles.DevP}>
                Made with <SiIcons.SiJavascript style={router.route == '/' || router.route == '/about' ? null : {color:'#fff'}} className={styles.DevIcon} /> & lots of tea by <Link href='https://keyhansa.ir' passHref><span style={router.route == '/' || router.route == '/about' ? null : {borderBottom:'2px solid #fff'}} className={styles.DevLink}>keyhansa</span></Link>
            </p>
        </motion.div>
    )
}

export default Footer

