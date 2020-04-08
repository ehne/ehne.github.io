import React from 'react';
import {Box} from "rebass"
import {Link} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Socials = () => (
    <Box
    paddingTop="0.7em"
    fontSize="0.8em"
    >
         <a href="https://github.com/ehne">github</a> — <a href="https://instagram.com/coolbezos_420">instagram</a> — <AniLink paintDrip hex="#ffc53f" to="/contact">contact</AniLink>
    </Box>
)

export default Socials

