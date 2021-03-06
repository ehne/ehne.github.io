import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms"
import { Box, Button,Text } from "rebass"
import styled from "@emotion/styled"

import {color} from "../components/baseColor"
var bgColor = color("45deg","color")

const FontSize = styled.div`
  font-size: 0.7em;
`
const contact = () => {
  return (
    <Layout navbar={true} secondary={{
      title:"projects",
      to:"/projects"
  }}>
    <FontSize>
      <Box
        sx={{
          display: "block",
          gridTemplateColumns: "1fr 1fr 0.6fr",
          gridTemplateRows: "0.01fr 1fr",
          maxWidth:"720px",
          marginX:"auto",
          marginTop:"2em",
          padding:"0.5em",
          gridTemplateAreas: "'heading heading heading' 'list list list'",
          "@media (max-width:570px)": {
            display: "block",
          },
        }}
      >
        <Box
          sx={{
            padding: "8px",
            gridArea: "heading",
          }}
        >
          <Text
            sx={{
              textAlign: "left",
              fontSize: "1.2em",
              paddingTop: "28px",
            }}
          >
            <Header>Contact</Header>
          </Text>
        </Box>
        <Box 
          sx={{
              gridArea:"list"
          }}
        >
          <form action=" https://formsubmit.co/darcy@darcylf.me" method="POST">
            <Label htmlFor="name" mt="1em">Full name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" mb="1em"  sx={{
                backgroundColor:"#ffffff15",
                border:"none",
                marginTop:"0.5em",
                ":focus":{
                  outline:`2px solid ${bgColor}`
                }
            }} />
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="jane@example.com" marginBottom="1em"sx={{
                backgroundColor:"#ffffff15",
                border:"none",
                marginTop:"0.5em",
                ":focus":{
                  outline:`2px solid ${bgColor}`
                }
            }} />
            <input type="hidden" name="_replyto" />
            <Label htmlFor="message" >Message</Label>
            <Textarea name="message" rows="4" marginBottom="1em" sx={{
                backgroundColor:"#ffffff15",
                border:"none",
                marginTop:"0.5em",
                resize:"vertical",
                ":focus":{
                  outline:`2px solid ${bgColor}`
                }
            }}></Textarea>
            <Button type="submit" sx={{
                backgroundColor:bgColor,
                fontWeight:"700",
                color:"#000",
                transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",

                ":hover":{
                   opacity:0.8,
                   cursor:"pointer",
                   transform:"rotate(-3deg)" 
                }
            }}>Send</Button>
          </form>
        
        </Box>
        <Text
          sx={{
            paddingTop:"1em",
            fontSize:"1rem",
            paddingRight:"1rem"
          }}
          >
        Emails that contain a <b>.bat, .btm, .cmd, .com, .cpl, .dll, .docm, .exe, .gz, .js, .lnk, .msi, .pif, .prf, .rar, .reg, .scr, .tar, .tar.gz, .tgz, .url, .vbs, .xlsm or .zip</b> attachment are automatically blocked by the spam filter. If you do need to send such files, please consider using a file transfer service such as <a href="https://wetransfer.com">WeTransfer</a>.
        </Text>
      </Box>
      
    </FontSize>
  </Layout>

  )
}

export default contact
