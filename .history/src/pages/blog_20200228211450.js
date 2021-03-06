import React from "react"
import "./mystyles.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogPost from "../components/PostItem"
import * as S from "../components/ListWrapper/styled"

const BlogPage = () => (
  <Layout>
    <SEO title="Meu Blog" />
    <S.ListWrapper>
      <BlogPost
        slug="/about/"
        category="Misc"
        date="30 de Julho de 2019"
        timeToRead="5"
        title="Diga não ao Medium: tenha sua própria plataforma"
        description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
      />
    </S.ListWrapper>
    
  </Layout> 
)

export default BlogPage
