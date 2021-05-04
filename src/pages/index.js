import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from 'react-intl'
import Layout from "../components/Layout/index"
import Image from "../components/image"
import SEO from "../components/common/SEO/index"
import SelectLanguage from "../components/SelectLanguage"
import { useI18n } from "../providers/LanguageProvider"

const IndexPage = () => {
  const { lang, handleLanguage } = useI18n()
  return (
    <Layout>
      <SEO title="Home" />
      <FormattedMessage id="welcome" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <SelectLanguage lang={lang} toggleLanguage={handleLanguage} />
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
