import React from "react"
import { Box, Text, Flex } from "rebass"
import { Link } from "gatsby"
import Header from "./header"
const navBar = () => {
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
        <Link to="/" className="navbar-link">
            home
        </Link>
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
        <Link className="navbar-link" to="/contact">contact</Link>
      </Box>
    </Flex>
  )
}

export default navBar
