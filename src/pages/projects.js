import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Project from "../components/project"
import { Box, Text } from "rebass"
import Header from "../components/header"
export const query = graphql`
  query MyQuery {
    __typename
    allProjectsJson {
      nodes {
        href
        icon
        description
        title
      }
    }
  }
`

function ProjectsList(props) {
  const items = props.projects
  const generated = items.map(i => (
    <Project
      href={i.href}
      title={i.title}
      icon={i.icon}
      description={i.description}
    ></Project>
  ))
  return generated
}
const FontSize = styled.div`
  font-size: 0.7em;
`
const Projects = ({ data }) => {
  return (
    <Layout navbar={true}>
      <FontSize>
        <Box
          sx={{
            display: "block",
            gridTemplateColumns: "1fr 1fr 0.6fr",
            gridTemplateRows: "0.01fr 1fr",
            maxWidth:"720px",
            marginX:"auto",
            marginTop:"2em",
            gridTemplateAreas: "'heading heading heading' 'filters list .'",
            "@media (max-width:570px)": {
              display: "block",
            },
          }}
        >
          <Box
            sx={{
              padding: "8px",
              gridArea: "heading",
            }}
          >
            <Text
              sx={{
                textAlign: "left",
                fontSize: "1.2em",
                paddingTop: "28px",
              }}
            >
              <Header>Projects</Header>
            </Text>
          </Box>
          <Box
            sx={{
                gridArea:"filters",
                paddingLeft:"1em",

            }}
          >
              
          </Box>
          <Box 
            sx={{
                gridArea:"list"
            }}
          >
            <ProjectsList projects={data.allProjectsJson.nodes}></ProjectsList>
          </Box>
        </Box>
      </FontSize>
    </Layout>
  )
}

export default Projects
