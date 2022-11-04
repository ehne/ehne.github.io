import React from 'react';
import { Box } from 'rebass';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import IndexPage from '../index';
import getPageData from '../../lib/getPageData';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import ColorBar from '../../components/ColorBar';
import { rainbow } from '../../lib/baseColor';
import Layer from '../../components/Layer';
import generatePlaice from '../../lib/generatePlaice';

const WorkPage = ({indexData, workData, isFirstLoad, plaice}) => {
  return (
    <>
      <IndexPage {...indexData} />
      <Head>
        <title>{workData.title} | darcylf.me</title>
      </Head>
      <Layer isFirstLoad={isFirstLoad}>
        <Box
          sx={{
            maxWidth: ['32em', '34em'],
            paddingTop: ['1em', '2em'],
            paddingX: ['1em', '3em']
          }}
          className="layer-content"
          >
          <Link href="/" scroll={false}><a>← Go Back</a></Link>
          <Box as="section" py="2em">
            <h2 style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '700'}}>{workData.title}</h2>
            <Box as="p">{workData.leadIn}</Box>
            <Box pt="1.2em" pb="1.5em">
              <Image
                src={workData.image}
                width={plaice.width}
                height={plaice.height}
                placeholder="blur"
                blurDataURL={plaice.base64}
                backgroundSize="cover"
                layout="responsive"
                unoptimized
                loader={({src})=>src}
              />
            </Box>
            <ColorBar />
            <ReactMarkdown>{workData.content}</ReactMarkdown>
            <Box as="ul" marginY="1.5rem" fontSize="0.9em">
              {workData.links.map(i => <li><a href={i} style={{display: 'block'}}>{i}</a></li>)}
            </Box>
            <ColorBar override={rainbow('90deg')}/>
          </Box>
        </Box>
      </Layer>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const indexData = await getPageData();
  const workData = getPostBySlug(params.slug, ["slug", "title", "leadIn", 'content', 'image', 'links']);
  
  const mainImagePlaice = await generatePlaice(workData.image);
  
  return {
    props: {
      indexData: indexData.props,
      plaice: mainImagePlaice,
      workData,
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
