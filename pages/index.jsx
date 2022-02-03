import React from 'react';
import { Box, Flex } from 'reflexbox';
import Link from 'next/link';

import useStatus from '../lib/useStatus';
import getPageData from '../lib/getPageData'

import ColorBar from '../components/ColorBar';
import ProjectItem from '../components/ProjectItem';
import Abbrev from '../components/Abbrev';


const GHStatus = () => {
    const { data, error } = useStatus()
    // fail silently
    if (error || !data) return <></>
    
    // render data
    return  <li>I am currently {data.message}.</li>
}

const index = ({posts, year, works}) => {
    const renderedProjects = posts.map(i => <ProjectItem title={i.title} content={i.description} url={i.href} key={i.title}/>)
    const renderedWorks = works.map(i => <Link href={`/work/${i.slug}`}>{i.title}</Link>)
    return (
        <>
            <Box as="header">
                Hi! I'm 
                <br />
                <h1 style={{fontSize: '2em', fontStyle: 'italic', fontWeight: '700', display: 'inline'}}> Darcy</h1>. 
                <br />
                An award-winning web designer and developer from Melbourne, Australia.
            </Box>
            {/* Links and stuff */}
            <Box paddingY="1em" as="ul">
                <li>GitHub: <a href="https://github.com/ehne">https://github.com/ehne</a></li>
                <li>Email: darcy {'(at)'} darcylf.me — <Abbrev short="Don't send me .zip files." full="Emails that contain a .bat, .btm, .cmd, .com, .cpl, .dll, .docm, .exe, .gz, .js, .lnk, .msi, .pif, .prf, .rar, .reg, .scr, .tar, .tar.gz, .tgz, .url, .vbs, .xlsm or .zip attachment are automatically blocked by the spam filter. If you do need to send such files, please consider using a file transfer service such as WeTransfer" /></li>
                <GHStatus />
            </Box>
            <ColorBar />

            {/* Things */}
            <Box paddingY="1em" as="section">
                <Box as="p" mb="1em">Here are some of the things that I've made in the past. More completed projects can be found  and on the <a href="https://collective-fullstack.github.io">Collective Fullstack website</a>. Work-in-progress projects can be found on my <a href="https://github.com/ehne?tab=repositories">GitHub</a>.</Box>
                {renderedWorks}
                {renderedProjects}
            </Box>
           
            <Box paddingY="1em" fontSize="0.9em" opacity="0.8" fontStyle="italic" as="footer">
                © darcy {year} — <a href="#">Go to top.</a>
            </Box>
        </>
    );
}


export const getStaticProps = async () => await getPageData();
    

export default index;