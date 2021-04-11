import React from 'react';
import { Box } from "rebass"
import useSWR from 'swr'
import {emojify} from 'react-emojione';


const fetcher = (...args) => fetch(...args).then(res => res.json())

const GHStatusBox = ({ message, emojiShort="" }) => (
  <Box
    sx={{
      position: 'fixed',
      bottom: '1em',
      left: '1em',
      padding: '8px',
      border: '1px solid #aaa',
      borderRadius: '99px',
      fontSize: '0.4em',
      px: '16px'
    }}
  >
    {emojify(emojiShort, {output:'unicode'})} {message}
  </Box>
)


const GHStatus = () => {
  const { data, error } = useSWR('https://issue-card.vercel.app/api/status/ehne', fetcher)

  // fail silently
  if (error || !data) return <div />

  // render data
  return <a href="https://github.com/ehne"><GHStatusBox message={data.message} emojiShort={data.emoji} /></a>
}

export default GHStatus;
