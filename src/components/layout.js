import React from "react"
import styled from "@emotion/styled"
import Head from "./htmlHead"
import Border from "./border"
import NavBar from "./navBar"

const BaseTypographicScale = styled.div`
font-size:calc(1.3em + 1vw);

`


export default (props) => (
    <BaseTypographicScale>
    <Head></Head>
    <Border></Border>
    {props.navbar &&<NavBar></NavBar>}
    
    {props.children}
    </BaseTypographicScale>
)

