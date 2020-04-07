import React from 'react';
import styled from "@emotion/styled"

var borderColour = "linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%) "
var borderWidth = "20px"
var rainbow = "linear-gradient(90deg, rgb(243, 115, 97) 0%, rgb(243, 115, 97) 16.6%, rgb(248, 155, 60) 16.6%, rgb(248, 155, 60) 33.2%, rgb(252, 223, 92) 33.2%, rgb(252, 223, 92) 49.36%, rgb(163, 187, 74) 49.36%, rgb(163, 187, 74) 65.96%, rgb(91, 199, 190) 65.96%, rgb(91, 199, 190) 82.56%, rgb(106, 80, 149) 82.56%, rgb(106, 80, 149) 100%);"


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
        background-image: ${borderColour}
`
const Border = () => (
    <div>
        {/* <BorderLeft></BorderLeft>
        <BorderRight></BorderRight>
        <BorderBottom></BorderBottom> */}
        <BorderTop></BorderTop>
    </div>
)
export default Border