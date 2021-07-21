import React from 'react';
import { Box } from "reflexBox"
import {emojify} from 'react-emojione';

import useStatus from '../lib/useStatus';


const GHStatusBox = ({ message, emojiShort="" }) => (
  <Box
  >
    I'm currently {emojify(emojiShort, {output:'unicode'})} {message}
  </Box>
)


const GHStatus = () => {
  const { data, error } = useStatus()

  // fail silently
  if (error || !data) return <></>

  // render data
  return <a href="https://github.com/ehne"><GHStatusBox message={data.message} emojiShort={data.emoji} /></a>
}

export default GHStatus;