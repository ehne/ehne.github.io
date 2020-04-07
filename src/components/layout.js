import React from "react"
import styled from "@emotion/styled"
import Head from "../components/htmlHead"
import Border from "../components/border"

const BaseTypographicScale = styled.div`
font-size:calc(1.3em + 1vw);

`

export default ({ children }) => (
    <BaseTypographicScale>
    <Head></Head>
    <Border></Border>
    {children}
    </BaseTypographicScale>
)

