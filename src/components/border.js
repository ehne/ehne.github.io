import React from 'react';
import styled from "@emotion/styled"
import {color} from "./baseColor"
var borderWidth = "20px"
var borderColour = color

const BorderLeft = styled.div`
        position: fixed;
		bottom: 0;
		left: 0;
		top: 0;
        width:${borderWidth};
        background-image: ${borderColour}
`
const BorderRight = styled.div`
        position: fixed;
		bottom: 0;
		right: 0;
        top: 0;
        width:${borderWidth};
        background-image: ${borderColour}
`
const BorderBottom = styled.div`
        position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
        height:${borderWidth};
        background-image: ${borderColour}
`
const BorderTop = styled.div`
        position: fixed;
		top: 0;
		right: 0;
		left: 0;
        height:${borderWidth};
        background-image: ${borderColour};
        z-index:50
`
const BorderContainer = styled.div`
    
`
const Border = () => (
    <BorderContainer>
        {/* <BorderLeft></BorderLeft>
        <BorderRight></BorderRight>
        <BorderBottom></BorderBottom> */}
        <BorderTop></BorderTop>
    </BorderContainer>
)
export default Border