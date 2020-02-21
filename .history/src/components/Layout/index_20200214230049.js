import React from "react"
import PropTypes from "prop-types"
import Header from "../Header";
import Footer from "../Footer";
import MenuBar from '../MenuBar'

import * as S from './styles'
import GlobaStyle from '../../styles/global'


const Layout = ({ children }) => {
  return (
    <>
     <Header />
    <S.LayoutWrapper>
      <GlobaStyle />
      <MenuBar/>
       
      <S.LayoutMain>{children}</S.LayoutMain>
      
    </S.LayoutWrapper>
    <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout