import React from "react"

import Header from "../components/header"
import Socials from "../components/socials"
import { Box, Flex, Text } from "rebass"
import Layout from "../components/layout"
import CoverWithSlide from "../components/coverWithSlide"
const four0Four = () => (
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
        <Header>404</Header>
        <Text
          sx={{
            maxWidth: "80%",
            marginX: "auto",
          }}
        >
        </Text>
        
        <Box
            paddingTop="0.7em"
            fontSize="0.8em"
            >
                <a href="javascript:history.back()">go back</a> — <CoverWithSlide to="/" direction="left" >go to darcylf.me</CoverWithSlide>
            </Box>
      </Box>
    </Flex>
  </Layout>
)

export default four0Four
