import React from "react"
import { Box, Text, Flex } from "rebass"
import { Link } from "gatsby"
import Header from "./header"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import CoverWithSlide from "../components/coverWithSlide"
import { TransitionPortal } from "gatsby-plugin-transition-link";

const navBar = (props) => {
  return (

  <Flex
      sx={{
        fontSize:"0.5em",
        position: "fixed",
        top: "20px",
        left:0,
        right:0,
        width: "100%",
        backgroundColor: "#000",
        zIndex: "40",
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          flexGrow: "1",
          padding: "1em",
        }}
      >
        <CoverWithSlide className="navbar-link" to="/" direction="right">home</CoverWithSlide>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          flexGrow: "1",
        }}
      >
        <Header>Darcy Lugt-Falk</Header>
      </Box>
      <Box
        sx={{
          textAlign: "right",
          flexGrow: "1",
          padding: "1em",
        }}
      >
        <CoverWithSlide className="navbar-link" to={props.secondary.to}>{props.secondary.title}</CoverWithSlide>
      </Box>
    </Flex>
  
    )
}

export default navBar
