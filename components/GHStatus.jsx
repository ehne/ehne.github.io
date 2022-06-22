import React from 'react';

import useStatus from '../lib/useStatus';


const GHStatus = () => {
  const { data, error } = useStatus()
  // fail silently
  if (error || !data) return <></>
  
  // render data
  return  <li>I am currently {data.message}.</li>
}

export default GHStatus;