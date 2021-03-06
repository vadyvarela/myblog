import React from "react"
import Header from "../Header";
import PropTypes from "prop-types"
import styled from 'styled-components'

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    <LayoutWrapper/>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
