import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/* <!-- Google Fonts --> */}
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
          <meta name="description" content="Branding catalyst  digital marketing service that can help you create, launch, and grow your online presence with a range of services, from research and insight, to design sprint, to product management, to technology strategy, to user interface (UI), to user experience (UX), to user testing, to interaction design (IXD), to prototyping, to Android apps development, to iOS apps development, to enterprise software development, to web apps development, to data visualization, to support, to analytics, to adoption, to DevOps, to engagement, to retention, to blockchain, to data science, to internet of things (IoT), to artificial intelligence (AI), to machine learning (ML), and to meta verse (XR). Rudra Trivedi DJ sanghvi"/>
            <meta name="keywords" content="branding catalyst,branding catalyst vasai, branding catalyst Andheri, brandingcatalyst.com, branding catalyst.net,Branding Catalyst Pvt Ltd, digital marketing service provider,digital marketing solutions,digital marketing consulting,research and insight,user interface,user experience,data visualization,data science,internet of things,machine learning, design sprint, product management, technology strategy, user testing, interaction design, prototyping, Android apps development, iOS apps development, enterprise software development, web apps development, support, analytics, adoption, DevOps, engagement, retention, blockchain, artificial intelligence, meta verse"/>
            <meta name="author" content="Branding Catalyst"/>  
        {/* <!-- !Google Fonts --> */}

        {/* <!-- Styles --> */}
        <link type="text/css" rel="stylesheet" href="css/plugins.css" />
        <link type="text/css" rel="stylesheet" href="css/style.css?ver=1.1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
