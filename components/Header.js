import styles from '../styles/header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TypesData } from './TypesData'
import { motion } from 'framer-motion'

export default function Header() {
    const router = useRouter()

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
            <Link href={router.route == '/about'? '/test': '/about'} passHref>
                <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null} className={styles.Link}>
                    {router.route == '/about'? `Take the Test`: `About`}
                </a>
            </Link>
            <Link href={router.route == '/types'? '/test': '/types'} passHref>
                <a style={router.route !== '/' && router.route !== '/about' ? {color: '#fff'} : null} className={styles.Link}>
                    {router.route == '/types'? `Take the Test`: `The Types`}
                </a>
            </Link>
        </motion.div>
    )
}