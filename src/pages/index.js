import React from "react"

import Header from "../components/header"
import Socials from "../components/socials"
import { Box, Flex, Text } from "rebass"
import Layout from "../components/layout"
import GHStatus from '../components/GHStatus';

import CoverWithSlide from "../components/coverWithSlide"


const IndexPage = () => (
  <Layout navbar={false}>
    <Flex
      sx={{
        height: "calc(100vh)",
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
          A web designer and developer based in Melbourne.  
          {/* <AniLink cover direction="right" to="/projects/" bg="#ffc53f">-></AniLink> */}
          <CoverWithSlide to="/projects/" direction="left" >{'->'}</CoverWithSlide>
        </Text>
        
        <Socials></Socials>
        
      </Box>
      
    </Flex>
    <GHStatus />
  </Layout>
)

export default IndexPage
