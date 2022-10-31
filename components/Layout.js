import styles from '../styles/layout.module.css'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter() 
    return (
        <div>
            <Head>
                <title>NMPD recruitment</title>
                <meta name="description" content="NMPD recruitment tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {router.route == '/test' ? null : <Header />}
            <main className={styles.main}>
                {children}
            </main>
            {router.route !== '/types' ? <Footer /> : null} 
        </div>
    )
}

export default Layout
