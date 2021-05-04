import React from "react"
import { IntlProvider } from "react-intl"
import { useI18n } from "../../providers/LanguageProvider"
import localEng from "../../../data/en.json"
import localAr from "../../../data/ar.json"
import localEs from "../../../data/es.json"
import localDe from "../../../data/de.json"
import { Global } from "./styles"
import "./layout.css"

const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
}

const Layout = ({ children }) => {
  const { lang } = useI18n()
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Global lang={lang}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Global>
    </IntlProvider>
  )
}

export default Layout
