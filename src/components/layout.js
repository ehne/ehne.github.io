import React from "react"
import ReactDOM from "react-dom"

import styled from "@emotion/styled"
import Head from "./htmlHead"
import Border from "./border"
import NavBar from "./navBar"
import { Box } from "rebass"
import { TransitionPortal, TransitionState } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion, useViewportScroll, useTransform } from "framer-motion"

import CircularText from "./circularText"
import {color} from "./baseColor"
var bgColor = color("90deg","color")

const BaseTypographicScale = styled.div`
  font-size: calc(1.3em + 1vw);
  a{
    color:${bgColor}
  }
  a:hover{
    opacity:0.8
  }
`
const variants = {
    visible: { opacity: 1,y:0 },
    hidden: { opacity: 0,y:"-50vh" },
  }
const Cvariants = {
    visible: { opacity: 1,x:0 },
    hidden: { opacity: 0,x:"-21vw" },
  }


export default props => (
  <BaseTypographicScale>
    <Head></Head>
    <Border></Border>
    
    { props.navbar &&
    <>
    <noscript>
      <Box
        sx={{
          fontSize:"0.5em"
        }}
      >
          <NavBar secondary={ props.navbar ? props.secondary : {"to":"/","title":""}}></NavBar>
      </Box>
    </noscript>
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
                  

            <NavBar secondary={ props.navbar ? props.secondary : {"to":"/","title":""}}></NavBar>
           
          </motion.div>
          <motion.div 
          initial="hidden"
            variants={Cvariants}
            animate={[ 'entering',"entered"].includes(transitionStatus)
            ? 'visible'
            : 'hidden'}
              transition={{ ease: "easeOut", duration:1}}
              style={{
                zIndex:"-1000 !important"
              }}
            >
          <CircularText></CircularText>
          </motion.div>
          </>
        )}
      </TransitionState>
    </TransitionPortal>
    </>}
        
      
    
    
    {props.children}
  </BaseTypographicScale>
)
