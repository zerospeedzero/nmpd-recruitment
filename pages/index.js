import styles from '../styles/home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useTranslation from "next-translate/useTranslation"
// import { useRouter } from 'next/router'

// export async function getStaticProps({locale}) {
//   let greeting = 
//     locale === "en-US" 
//     ? "Hello world" 
//     : locale === "zh-HK" 
//     ? "Hallo Welt" 
//     : locale === "tl-PH" 
//     ? "Bonjour le monde" 
//     : ""
//   return {
//     props: {
//       greeting,
//     }
//   }
// }

// export default function Home(props) {
export default function Home() {
  let { t } = useTranslation()
  const variants = {
    initial: { opacity:0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
  }

  const otherVariants = {
    initial: { opacity:0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1
        }
    }
  }

  return (
    <>
      <div className={styles.LandingBanner}>
        {/* <h1>{props.greeting}</h1> */}
        <h1>{t("common:greeting")}</h1>
        <motion.video
          variants={variants}
          initial='initial'
          animate='animate'
          className={styles.LandingVideo}
          src='/landingVideo.mp4'
          autoPlay
          loop
          muted />
        <motion.h1
          variants={otherVariants}
          initial='initial'
          animate='animate'
          className={styles.LandingHeader}>
          {t("common:discover")}
        </motion.h1>
        <Link href='/test' passHref>
          <motion.a
            variants={otherVariants}
            initial='initial'
            animate='animate'
            className={styles.LandingButton}>
            {t("common:start_test")}
          </motion.a>
        </Link>
      </div>
    </>
  )
}
