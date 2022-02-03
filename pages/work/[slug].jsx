import React from 'react';
import { Box } from 'reflexbox';

import IndexPage from '../index';
import getPageData from '../../lib/getPageData';
import { useRouter } from 'next/router';


const WorkPage = ({posts, year}) => {
  return (
    <>
      <IndexPage posts={posts} year={year} />
      <Box 
        backgroundColor="black" 
        opacity="0.5" 
        sx={{
          position: 'fixed',
          top: 0,
          left: 0, 
          right: 0,
          bottom: 0,
        }}
        as={'a'}
        href="/"
      />
      <Box
        sx={{
          position: 'fixed',
          right: 0,
          top: 0,
          backgroundColor: '#fff',
          maxWidth: '30em',
          padding: ['1em', '2em']
        }}
      >
        hello
      </Box>
    </>
  );
}

export const getStaticProps = async () => await getPageData();

export async function getStaticPaths() {
  return {
    paths: [
      // Object variant:
      { params: { slug: 'Shareify' } },
    ],
    fallback: true,
  }
}


export default WorkPage;
