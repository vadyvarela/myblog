import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const LogosCompany = () => {
  const { logoImage } = useStaticQuery(
      graphql`
        query {
            logoImage1: file(relativePath: { eq: "bonako.png"}) {
                childImageSharp {
                    fluid(maxWidth: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            },
        }
      `
  )

  return <S.ProfileImgWrapper fluid={logoImage.childImageSharp.fluid} />
}


export default LogosCompany