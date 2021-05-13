import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import Layout from "../components/Layout/index"
import Image from "../components/image"
import SEO from "../components/common/SEO/index"
import SelectLanguage from "../components/SelectLanguage"
import { useI18n } from "../providers/LanguageProvider"
import MenuPage from "../components/SauravComponents/Menu/MenuPage"

import NavBar from "../components/MainComponents/NavBar"
import MainBanner from "../components/MainComponents/BannerComponent"
import AboutUs from "../components/MainComponents/AboutUs"
import OpeningHours from "../components/MainComponents/OpeningHours"
import Features from "../components/MainComponents/Features"
import Menu1Component from "../components/MainComponents/Menu1Component"
import Footer from "../components/MainComponents/Footer"

const IndexPage = () => {
  const { lang, handleLanguage } = useI18n()

  const BodyMain = () => {
    return (
      <>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </>
    )
  }
  return (
    <Layout>
      <SEO title="Restaurant Website" />
      {/* <FormattedMessage id="welcome" /> */}
      <NavBar />
      <MainBanner />
      <AboutUs />
      <OpeningHours />
      <Features />
      <Menu1Component />
      <Footer />
      {/* <BodyMain /> */}
      {/* <SelectLanguage lang={lang} toggleLanguage={handleLanguage} />
      <hr />
      <Link to="/Demogs" className="hover:text-red-500">
        
      </Link>
      {/* <Link to="/NewGovind/" className="hover:text-green-500">
        NewHome
      </Link>
      <hr />
      <Link to="/govind/" className="hover:text-red-500">
        home page
      </Link>
      <hr />
      <Link to="/about/" className="hover:text-red-500">
        about page
      </Link>
      <hr />
      <Link to="/contact/" className="hover:text-red-500">
        contact page
      </Link> */}
      {/* <hr /> */}
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <Link to="/page-2/">Go to page 2</Link>
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
      {/* <Link to="/AtulWork/">Atul Work</Link>
      <Link to="/saurav">Saurav</Link>
      <Link to="/404/">Err</Link> */}
      <Link to="/saurav">Saurav</Link>
    </Layout>
  )
}

export default IndexPage
