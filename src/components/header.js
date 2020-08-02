import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Box, Text, Flex } from "rebass"
import {color} from "./baseColor"
var bgColor = color("45deg","color")

const BackgroundColour=styled.span`
    background-color:${bgColor};
    padding-left:0.5em;
    padding-right:0.5em;
    `
const Rotator = styled.div`
    transform:rotate(-2deg);
    padding:8px;
    padding-top:1em;
    padding-bottom:1em;
`
const Heading = styled.h3`
    margin:0px;
    font-weight:700;
    font-size:1.5em;
    color:#000
`
const Header = ({children}) => (
  <>
    <Rotator>
        <Heading>
            <BackgroundColour>{children}</BackgroundColour>
        </Heading>    
    </Rotator>
  </>
)

export default Header
