import React,{useState} from "react"
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            gridTemplateAreas: ". .",
            "@media (max-width:570px)": {
              display: "block",
            },
          }}
        >
          <Box
            sx={{
              padding: "8px",
              paddingTop: "28px",
              maxWidth: "720px",
              marginX: "auto",
            }}
          >
            <Text
              sx={{
                textAlign: "center",
                fontSize: "1.2em",
              }}
            >
              <Header>Projects</Header>
            </Text>

            <ProjectsList projects={data.allProjectsJson.nodes}></ProjectsList>
          </Box>
              <Box>
                  hello
              </Box>
        </Box>
      </FontSize>
    </Layout>
  )
}

export default Projects
