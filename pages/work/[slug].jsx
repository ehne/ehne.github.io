import React from 'react';
import { Box } from 'reflexbox';
import Link from 'next/link';

import IndexPage from '../index';
import getPageData from '../../lib/getPageData';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import ColorBar from '../../components/ColorBar';
import Layer from '../../components/Layer';

const WorkPage = ({indexData, workData, isFirstLoad}) => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed', 
          maxWidth: ['32em', '34em'],
          zIndex: 1, 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          padding: ['1em', '2em']
        }}
      >
        <IndexPage {...indexData} />
      </Box>
      <Layer isFirstLoad={isFirstLoad}>
        <Box
          sx={{
            maxWidth: ['32em', '34em'],
            paddingY: ['1em', '2em'],
            paddingX: ['1em', '3em']
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
      </Layer>
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
