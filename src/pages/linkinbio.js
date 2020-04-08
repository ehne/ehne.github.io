import React from 'react';
import Header from "../components/header"
import Layout from "../components/layout"
import linksData from "../_data/links.json"
import Project from "../components/project"
import {Box} from "rebass"
import { navigate } from 'gatsby';

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
            <Box fontSize="0.7em" marginTop="2em" sx={{
                maxWidth: "720px",
                mx: "auto",
                padding:"0.5em"
            }}>
                <ListOfLinks></ListOfLinks>
            </Box>
            
        </Layout>
    );
}

export default linkinbio;
