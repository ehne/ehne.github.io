import React from 'react';
import { Box, Flex } from 'reflexbox';
import fs from 'fs';
import { join } from 'path';

import useStatus from '../lib/useStatus';

import ColorBar from '../components/ColorBar';
import ProjectItem from '../components/ProjectItem';
import Abbrev from '../components/Abbrev';


const GHStatus = () => {
    console.log('hi')
    const { data, error } = useStatus()
    // fail silently
    if (error || !data) return <></>
    
    // render data
    return  <li>I am currently {data.message}.</li>
}

const index = ({posts, year}) => {
    const renderedProjects = posts.map(i => <ProjectItem title={i.title} content={i.description} url={i.href} key={i.title}/>)
    return (
        <Box>
            Hi! I'm 
            <br />
            <span style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '700'}}> Darcy</span>. 
            <br />
            A web designer and developer from Melbourne, Australia.
            {/* Links and stuff */}
            <Box paddingY="1em" as="ul">
                <li>GitHub: <a href="https://github.com/ehne">https://github.com/ehne</a></li>
                <li>Email: darcy {'(at)'} darcylf.me — <Abbrev short="Don't send me .zip files." full="Emails that contain a .bat, .btm, .cmd, .com, .cpl, .dll, .docm, .exe, .gz, .js, .lnk, .msi, .pif, .prf, .rar, .reg, .scr, .tar, .tar.gz, .tgz, .url, .vbs, .xlsm or .zip attachment are automatically blocked by the spam filter. If you do need to send such files, please consider using a file transfer service such as WeTransfer" /></li>
                <GHStatus />
            </Box>
            <ColorBar />
            {/* Things */}
            <Box paddingY="1em" as="section">
                <Box as="p" mb="1em">Here are some of the things that I've made in the past. More work-in-progress projects can be found on my <a href="https://github.com/ehne?tab=repositories">GitHub</a>.</Box>
                {renderedProjects}
            </Box>
           
            <Box paddingY="1em" fontSize="0.9em" opacity="0.8" fontStyle="italic">
                © darcy {year} — <a href="#">Go to top.</a>
            </Box>
        </Box>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fs.readFileSync(join(process.cwd(), '_data/projects.json'), 'utf8')
    const posts = await JSON.parse(res)
    
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
            year: new Date().getFullYear()
        },
    }
}
    

export default index;
