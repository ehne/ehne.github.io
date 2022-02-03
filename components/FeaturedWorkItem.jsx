import React from 'react';
import { Box } from 'reflexbox';
import Link from 'next/link';

const FeaturedWorkItem = ({leadIn, title, slug}) => {
    return (
        <Box
            marginBottom="1em"
            as="p"
        >
            <b>{title}: </b> {leadIn} <Link scroll={false} href={`/work/${slug}`}><a>{'Read More →'}</a></Link>
        </Box>
    );
}

export default FeaturedWorkItem;
