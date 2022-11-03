import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from "react"
import Script from "next/script"
import { useRouter } from "next/router"
import * as gtag from "../lib/ga/gtag"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        id="Google analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=$process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />    
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
