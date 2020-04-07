import React from 'react';
import {Box, Link} from "rebass"
import {StaticQuery,graphql} from "gatsby"



const Socials = () => (
    <>
    <Box>
        <StaticQuery
            query={graphql`
            query socialsQuery {
                allSocialsJson {
                    edges {
                      node {
                        title
                        url
                      }
                    }
                  }
            }
            `}
            render={data => (
                <>
                    {
                    data.allSocialsJson.edges.map((d, index) => (
                        <Link
                            href={d.node.url}
                            sx={{
                                color:"#ffc53f",
                                ":hover":{
                                    color:"#ffc53fcc"
                                }
                            }}
                        >{d.node.title}</Link>
                    )
                        
                    )
                }
                </>
            )}
        />
    </Box>
    </>
)

export default Socials

