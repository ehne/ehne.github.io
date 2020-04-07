import React from 'react';
import {Box, Flex} from "rebass"
import * as Icon from "react-feather"

const projects = (props) => {
    const IconTagName = Icon[props.icon]
    return (
        <Box>
            <a href={props.href}>
                <Flex>
                    <Box>
                        
                        <IconTagName/>
                    </Box>
                    <Box>
                        <b>{props.title}:</b> {props.description}
                    </Box>
                </Flex>
                
            </a>
        </Box>
    );
}

export default projects;
