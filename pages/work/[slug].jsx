import React from 'react';
import { Box } from 'reflexbox';
import Link from 'next/link';
import Image from 'next/image'

import IndexPage from '../index';
import getPageData from '../../lib/getPageData';
import { useRouter } from 'next/router';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import ColorBar from '../../components/ColorBar';
import { color } from '../../lib/baseColor';

const WorkPage = ({indexData, workData}) => {
  return (
    <>
      <Box sx={{position: 'fixed', width: '30em', zIndex: 1}}>
        <IndexPage {...indexData} />
      </Box>
      
      <Link href="/">
        <Box
          opacity={0.3}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0, 
            right: 0,
            bottom: 0,
            zIndex: 2,
            backgroundImage: color('90deg'),
            filter: 'brightness(0.5)'
          }}
        />
      </Link>
      <Box
        sx={{
          position: 'fixed',
          right: 0,
          top: 0,
          backgroundColor: '#fff',
          maxWidth: '30em',
          padding: ['1em', '2em'],
          height: '100%',
          overflow: 'scroll',
          zIndex: 3
        }}
      >
        <Link href="/"><a>← go back</a></Link>
        <Box as="section" my="2em">
        <h2 style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '700'}}>{workData.title}</h2>
        <Box as="p">{workData.leadIn}</Box>
        <Box as="img" my='1em' src={workData.image}/>
        <ColorBar />
        <p>{workData.content}</p>
        </Box>
        
      </Box>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const indexData = await getPageData();
  const workData = getPostBySlug(params.slug, ["slug", "title", "leadIn", 'content', 'image']);
  return {
    props: {
      indexData: indexData.props,
      workData
    }
  }
};

export async function getStaticPaths() {
  // onceagain, get the slugs
  const allPosts = await getAllPosts(['slug']);

  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}



export default WorkPage;
