import React from "react"
import ReactDOM from "react-dom"

import styled from "@emotion/styled"
import Head from "./htmlHead"
import Border from "./border"
import NavBar from "./navBar"
import { Box } from "rebass"
import { TransitionPortal, TransitionState } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
const BaseTypographicScale = styled.div`
  font-size: calc(1.3em + 1vw);
`
const variants = {
    visible: { opacity: 1,y:0 },
    hidden: { opacity: 0,y:"-50vh" },
  }
export default props => (
  <BaseTypographicScale>
    <Head></Head>
    <Border></Border>
    { props.navbar &&
    <TransitionPortal>
        <Border></Border>
        
      <TransitionState>
      
        {({ transitionStatus }) => (
            <>
          <motion.div 
          initial="hidden"
          variants={variants}
          animate={[ 'entering',"entered"].includes(transitionStatus)
          ? 'visible'
          : 'hidden'}
            transition={{ ease: "easeOut", duration:1}}
            style={{
                width:"100vw"
        }}
          >
                  

            <NavBar secondary={ props.navbar ? props.secondary : {"to":"/","title":""}}></NavBar>}
          </motion.div></>
        )}
      </TransitionState>
    </TransitionPortal>}

    {props.children}
  </BaseTypographicScale>
)
