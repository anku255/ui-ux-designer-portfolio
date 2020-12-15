import { useEffect } from "react";
import Head from "next/head";
import "../src/styles/index.css";

const WEBSITE_URL = "https://ekanshi.design";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    function handleResize() {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Head>
        <title>Ekanshi Kiran | Product Designer</title>
        <meta
          name="description"
          content="Portfolio website of Ekanshi Kiran. You can find her on behance @ekanshikiran"
        />
        <meta name="keywords" content="UI/UX Desginer, Product Designer" />
        <meta property="og:title" content="Ekanshi Kiran | Product Designer" />
        <meta
          property="og:description"
          content="Portfolio website of Ekanshi Kiran. You can find her on behance @ekanshikiran"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${WEBSITE_URL}/images/og-image.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:url" content={`${WEBSITE_URL}`} />
        <meta property="og:site_name" content="Ekanshi Kiran" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ekanshi Kiran | Product Designer" />
        <meta
          name="twitter:description"
          content="Portfolio website of Ekanshi Kiran. You can find her on behance @ekanshikiran"
        />
        <meta
          name="twitter:image"
          content={`${WEBSITE_URL}/images/og-image.png`}
        />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Ekanshi Kiran</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
