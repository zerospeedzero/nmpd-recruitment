import Link from 'next/link'
import styles from '../styles/types.module.css'
import { motion } from 'framer-motion'

function TypeLink({title, bgColor, src}) {
    return (
        <div className={styles.Col} style={{backgroundColor: bgColor}}>
            <Link href={`/types/${title.toLowerCase()}`} passHref>
                <motion.video
                    animate={{ opacity: 1, marginTop: 0}}
                    transition={{ delay: .1, duration: (Math.random()/2 + 0.5) }}
                    className={styles.Video}
                    style={{backgroundColor: bgColor}}
                    src={src}
                    autoPlay
                    muted
                    loop
                    preload='auto' />
            </Link>
        </div>
    )
}

export default TypeLink
