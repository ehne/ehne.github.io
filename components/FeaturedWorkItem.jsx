import React from 'react';
import { Box } from 'rebass';
import Link from 'next/link';

const FeaturedWorkItem = ({leadIn, title, slug}) => {
    const [state, setState] = React.useState('idle');

    return (
        <Box
            marginBottom="1em"
            as="p"
        >
            <b>{title}: </b> {leadIn} <Link scroll={false} href={`/work/${slug}`} onClick={() => setState('loading')}>
                <a onClick={() => setState('loading')} className={state === 'loading' ? 'link-loading' : ''}>
                    {'Read More' + (state !== 'loading' ? ' →' : '')}
                </a>
            </Link>
        </Box>
    );
}

export default FeaturedWorkItem;
