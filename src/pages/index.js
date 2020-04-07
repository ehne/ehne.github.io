import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import {css,jsx} from "@emotion/core"
import Head from "../components/htmlHead"
import Header from "../components/header"
import Border from "../components/border"
import Projects from "../components/projects"
import {Box} from 'rebass';
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1em;
  grid-template-areas: "name-contact .";
  @media (max-width: 600px) {
    grid-template-areas: "name-contact name-contact";
  }
  max-width: 1200px;
  max-height: 600px;
  padding:16px;
  margin-left:auto;
  margin-right:auto;
  font-size:calc(1em + 1vw)

`

const Name = styled.div`
  grid-area: name-contact;


`
const InfoBox = styled.div`
padding-left:10px;
text-align:right;
max-width:50%;
margin-left:auto
`

const IndexPage = () => (
  <>
    <Head></Head>
    <Border></Border>
    <Grid>
      <Name>
      <Box
        sx={{
          textAlign:["center","right"]  
        }}
      >
        <Header>Darcy Lugt-Falk</Header>
      </Box>
      
        <InfoBox>
          
          Hi! I'm a web designer and developer from Melbourne, Australia
        </InfoBox>
        <div>
          
        </div>

      </Name>
      <Projects></Projects>
    </Grid>
    
  </>
)

export default IndexPage
