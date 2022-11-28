import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@zerospeedzero" />
                    <meta name="twitter:title" content="NMPD recruitment" />
                    <meta name="og:title" property="og:title" content="New Media and Production Design in Southern Alberta Institute of Technology"/>
                    <meta property="og:description" content="Making a quiz based on personality, interests, knowledge, and experience
to find out what kind of creative artist they are. This can help us as a hook
to match their information with the offered skills."/>
                    {/* <meta property="og:image" content="https://nmpd-recruitment.azurewebsites.net/profile_pic.png"/> */}
                    {/* <meta name="twitter:image" content="https://www.mycreativetype.com/images/seo/_twitter/site-twitter.png" /> */}
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    {/* <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                        `,
                        }}
                    />                     */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument