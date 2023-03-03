import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <Box minHeight={'95vh'} sx={{color:'#FFF'}}>
      <h1 >No Page Found <Link to="/" style={{color:"red"}}>Go Back</Link></h1>
    </Box>
  )
}

export default Error
