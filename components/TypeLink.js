import Link from 'next/link'
import styles from '../styles/types.module.css'
import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation"

function TypeLink({title, bgColor, src}) {
    let { t } = useTranslation()
    return (
        <div className={styles.Col} style={{backgroundColor: bgColor}}>
            <Link href={`/types/${title.toLowerCase()}`} passHref>
                <motion.video
                    animate={{ opacity: 1, marginTop: 0}}
                    transition={{ delay: .1, duration: (Math.random()/2 + 0.5) }}
                    className={styles.Video}
                    style={{backgroundColor: bgColor, cursor: 'pointer'}}
                    src={src}
                    autoPlay
                    muted
                    loop
                    preload='auto' />
            </Link>
            <motion.h2
                    animate={{ marginLeft: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.titleName} style={{"margin-top": "-4rem", "padding-top": "1rem", "text-align": "center", "color": "white"}}>
                        {/* {t("types:" + type.title)} */}
                        {t("types:" + title + "title")}
            </motion.h2>
        </div>
    )
}

export default TypeLink
