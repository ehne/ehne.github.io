import React from 'react';
import Layout from "../components/layout"
import linksData from "../_data/links.json"
import Project from "../components/project"
import {Box} from "rebass"
import { navigate } from 'gatsby';
import styled from "@emotion/styled"

const FontSize = styled.div`
  font-size: 0.7em;
`
const ListOfLinks = () =>{
    if (linksData.length === 1){
        navigate("/")
    }
    const generated = linksData.map(i => (
        <Project
          href={i.href}
          title={i.title}
          icon={i.icon}
          type="link"
        ></Project>
      ))
    return generated
    
}
const linkinbio = () => {

    return (
        <Layout navbar={true} secondary={{
            title:"contact",
            to:"/contact"
        }}>
            <FontSize>
            <Box sx={{
                maxWidth: "720px",
                mx: "auto",
                padding:"0.5em",
                marginTop:"5em"
            }}>
                <ListOfLinks></ListOfLinks>
            </Box>
            </FontSize>
            
            
        </Layout>
    );
}

export default linkinbio;
