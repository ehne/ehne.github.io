import fs from 'fs';
import { join } from 'path';
import { getAllPosts } from './api';

export default async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fs.readFileSync(join(process.cwd(), '_data/projects.json'), 'utf8')
  const posts = await JSON.parse(res)
  
  const works = getAllPosts(["slug", "title", "leadIn", "date"]);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
      props: {
          posts,
          year: new Date().getFullYear(),
          works
      },
  }
}