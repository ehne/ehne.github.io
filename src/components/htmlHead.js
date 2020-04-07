import React from "react"
import Helmet from "react-helmet"

import SEO from "./seo"

const Head = () => (
  <>
    <Helmet>
    <title>darcy has the best website</title>
    <SEO title="darcy has the best website"></SEO>
    <link
      href="https://cdn.jsdelivr.net/gh/sharanda/manrope@1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/web/index.css"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
    </Helmet>
    
  </>
)

export default Head
