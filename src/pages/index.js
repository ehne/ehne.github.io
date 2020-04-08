import React from "react"

import Header from "../components/header"
import Socials from "../components/socials"
import { Box, Flex, Text } from "rebass"
import Layout from "../components/layout"
import {Link} from "gatsby"
const IndexPage = () => (
  <Layout>
    <Flex
      sx={{
        height: "calc(100vh - 70px)",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "8px",
        }}
      >
        Hi! I'm
        <Header>Darcy Lugt-Falk</Header>
        <Text
          sx={{
            maxWidth: "80%",
            marginX: "auto",
          }}
        >
          A web designer and developer based in Melbourne.  <Link to="/projects/">-></Link>
        </Text>
        
        <Socials></Socials>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
