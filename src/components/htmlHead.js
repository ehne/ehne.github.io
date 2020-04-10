import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"



const Head = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = site.siteMetadata.description
  
  
  return (
  <>
      <Helmet title="darcy has the best website">
      <title>darcy has the best website</title>
      <link
        href="https://cdn.jsdelivr.net/gh/sharanda/manrope@1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/web/index.css"
        rel="stylesheet"
      />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
      <meta name="description" content={metaDescription}/>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-61981599-5"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-61981599-5")`}
      </script>
      </Helmet>
      
    </>
  )
  
}

export default Head
