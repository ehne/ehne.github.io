import React from 'react';
import {Box} from 'rebass';

const ProjectItem = ({content, url, title}) => {
    return (
        <Box
            marginBottom="1em"
            as="p"
        >
            <b>{title}: </b> {content} <a href={url}>{url}</a>
        </Box>
    );
}

export default ProjectItem;
