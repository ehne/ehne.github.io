import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms"
import { Box, Button } from "rebass"
const contact = () => {
  return (
    <Layout navbar={true}>
      <Box
        sx={{
          fontSize: "0.7em",
          marginTop: "5em",
          maxWidth: "720px",
          mx: "auto",
        }}
      >
        <Box padding="1em">
          <Header>Contact</Header>
          <form action=" https://formsubmit.co/darcy@darcylf.me" method="POST">
            <Label htmlFor="name" mt="1em">Full name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" mb="1em"  sx={{
                borderRadius:"10px",
                borderColor:"#ffc53fcc",
                marginTop:"0.5em"
            }} />
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="jane@example.com" marginBottom="1em"sx={{
                borderRadius:"10px",
                borderColor:"#ffc53fcc",
                marginTop:"0.5em"
            }} />
            <input type="hidden" name="_replyto" />
            <Label htmlFor="message" >Message</Label>
            <Textarea name="message" rows="4" marginBottom="1em" sx={{
                borderRadius:"10px",
                borderColor:"#ffc53fcc",
                marginTop:"0.5em"
            }}></Textarea>
            <Button type="submit" sx={{
                backgroundColor:"#ffc53f",
                fontWeight:"700",
                color:"#000",
                transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",

                ":hover":{
                   backgroundColor:"#ffc53fcc",
                   cursor:"pointer",
                   transform:"rotate(-3deg)" 
                }
            }}>Send</Button>
          </form>
        </Box>
      </Box>
    </Layout>
  )
}

export default contact
