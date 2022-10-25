import styles from '../styles/home.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
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
          Discover your creative personality
        </motion.h1>
        <Link href='/test' passHref>
          <motion.a
            variants={otherVariants}
            initial='initial'
            animate='animate'
            className={styles.LandingButton}>
            Start Test
          </motion.a>
        </Link>
      </div>
    </>
  )
}
