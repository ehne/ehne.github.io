import React from 'react';
import {Box, Flex,Text} from "rebass"
import * as Icon from "react-feather"

const project = (props) => {
    const IconTagName = Icon[props.icon]
    return (
        <Box>
            <a href={props.href}
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
                            backgroundColor:"#ffc53f",
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
