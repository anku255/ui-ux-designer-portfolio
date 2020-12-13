import { useEffect } from "react";
import Head from "next/head";
import "../src/styles/index.css";

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
