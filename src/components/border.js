import React from 'react';
import styled from "@emotion/styled"

var borderColour = "#fa0"
var borderWidth = "10px"
const BorderLeft = styled.div`
        position: fixed;
		bottom: 0;
		left: 0;
		top: 0;
		border-left: ${borderWidth} solid ${borderColour};
`
const BorderRight = styled.div`
        position: fixed;
		bottom: 0;
		right: 0;
		top: 0;
		border-right: ${borderWidth} solid ${borderColour};
`
const BorderBottom = styled.div`
        position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		border-bottom: ${borderWidth} solid ${borderColour};
`
const BorderTop = styled.div`
        position: fixed;
		top: 0;
		right: 0;
		left: 0;
		border-top: ${borderWidth} solid ${borderColour};
`
const Border = () => (
    <div>
        <BorderLeft></BorderLeft>
        <BorderRight></BorderRight>
        <BorderBottom></BorderBottom>
        <BorderTop></BorderTop>
    </div>
)
export default Border