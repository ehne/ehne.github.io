import React from "react"
import { Box } from "rebass"
import Header from "./header"
import CoverWithSlide from "../components/coverWithSlide"
import styled from "@emotion/styled"

import {color} from "./baseColor"
var bgColor = color("45deg","color")

const BaseTypographicScale = styled.div`
font-size:calc(1.3em + 1vw);

a{
  
}
a:hover{
  color:${bgColor};
  opacity:0.8
}
`

const navBar = (props) => {
  return (
  <BaseTypographicScale>
  <Box
      sx={{
        fontSize:".5em",
        position: "fixed",
        top: "20px",
        left:0,
        right:0,
        width: "100%",
        backgroundColor: "#0c0c0c",
        zIndex: "40",
        display:"flex"
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          flexGrow: "1",
          paddingTop: "1em",
          paddingLeft:"1em",
          gridArea:"home"
        }}
      >
        <CoverWithSlide className="navbar-link" to="/" direction="right">home</CoverWithSlide>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          flexGrow: "1",
          gridArea:"name"
        }}
      >
        <Header>Darcy Lugt-Falk</Header>
      </Box>
      <Box
        sx={{
          textAlign: "right",
          flexGrow: "1",
          paddingRight: "1em",
          paddingTop: "1em",
          gridArea:"secondary"
        }}
      >
        <CoverWithSlide className="navbar-link" to={props.secondary.to}>{props.secondary.title}</CoverWithSlide>
      </Box>
    </Box>
    </BaseTypographicScale>
    )
}

export default navBar
