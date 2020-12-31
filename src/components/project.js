import React from 'react';
import {Box, Flex,Text} from "rebass"
import * as Icon from "react-feather"
import * as Panelbear from "@panelbear/panelbear-js";

import {color} from "./baseColor"
var bgColor = color("45deg","color")


const project = (props) => {
    const IconTagName = Icon[props.icon]

    const goToSite = (title, href) => {
        const noSpaces = title.replace(/ /g, '')
        console.log(noSpaces)
        const only30 = `p_${noSpaces}`.slice(0,29)
        console.log(only30)
        Panelbear.track(only30)

    }
    return (
        <Box>
            <a 
            href={props.href}
            onClick={()=> goToSite(props.title, props.href)}
            >
                <Box
                    sx={{
                        display:"grid",
                        gridTemplateColumns:"0.01fr 1fr",
                        gridTemplateRows:"1fr",
                        gridTemplateAreas:". .",
                        padding:"1em",
                        color:"#fff",
                        margin:"0.2em",
                        transition:"all cubic-bezier(0.19, 1, 0.22, 1) 0.5s",
                        ":hover":{
                            backgroundColor:bgColor,
                            color:"#000"
                        }
                    }}
                >
                    <Box
                        sx={{
                            alignSelf:"center",
                            padding:"8px",
                            justifySelf:"center"
                        }}
                    >
                        <IconTagName/>
                    </Box>
                    <Box
                        sx={{
                            paddingLeft:"1.2em",
                            alignSelf:"center"
                        }}
                    >
                        {props.type==="project" && 
                            <Text>
                                <b>{props.title}:</b> {props.description}
                            </Text>
                        }
                        {props.type==="link" && 
                            <Text>
                                {props.title}
                            </Text>
                        }
                    </Box>
                </Box>
                
            </a>
        </Box>
    );
}

export default project;
