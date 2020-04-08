import React from "react"
import { Box, Text, Flex } from "rebass"
import { Link } from "gatsby"
import Header from "./header"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const navBar = (props) => {
  return (
    <Flex
      sx={{
        fontSize: "0.5em",
        position: "sticky",
        top: "20px",
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
        <AniLink paintDrip hex="#ffc53f" className="navbar-link" to="/">home</AniLink>
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
        <AniLink paintDrip hex="#ffc53f" className="navbar-link" to={props.secondary.to}>{props.secondary.title}</AniLink>
      </Box>
    </Flex>
  )
}

export default navBar
