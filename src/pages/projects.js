import React from "react"
import { Link,graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Projects from "../components/projects"
import {Box} from "rebass"
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
function ProjectsList(props){
    const items = props.projects
    const generated = items.map((i)=>
        <Projects
            href={i.href}
            title={i.title}
            icon={i.icon}
            description={i.description}
        ></Projects>
    )
    return (generated)
}
const FontSize = styled.div`
    font-size:0.7em
`
const projects = ({data}) => {
    return (
        <Layout>
            <FontSize>
            <Box 
                sx={{
                    padding:"8px",
                    paddingTop:"28px",
                    maxWidth:"720px",
                    marginX:"auto"
                }}
            >
                <Header>Projects</Header>
                
                
                <ProjectsList projects={data.allProjectsJson.nodes}></ProjectsList>
            </Box>
            
            </FontSize>
            

        </Layout>
    );
}

export default projects;
