import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from 'react-intl'
import Layout from "../components/Layout/index"
import Image from "../components/image"
import SEO from "../components/common/SEO/index"
import SelectLanguage from "../components/SelectLanguage"
import { useI18n } from "../providers/LanguageProvider"
import MenuPage from "../components/Menu/MenuPage"

const IndexPage = () => {
  const { lang, handleLanguage } = useI18n()
  return (
    <>
    <MenuPage/>
    </>
  )
}

export default IndexPage
