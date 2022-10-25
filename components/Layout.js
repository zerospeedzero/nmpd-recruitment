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
                <title>Next Creative Types</title>
                <meta name="description" content="Adobe creative types made with NextJs" />
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
