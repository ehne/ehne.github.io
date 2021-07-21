import React from 'react';
import {Box} from 'reflexbox';

const ProjectItem = ({content, url, title}) => {
    return (
        <Box
            sx={{
                marginBottom: '1em'
            }}
        >
            <b>{title}: </b> {content} <a href={url}>{url}</a>
        </Box>
    );
}

export default ProjectItem;
