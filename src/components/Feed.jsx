import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Sidebar  from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../Utils/FetchfromAPI'



const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

//it's a lifeCycle hook
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
    {/* Left Side Content */}
      <Box sx={{
        height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
      }}>
       <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
       />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 Made by ❤️‍🔥 Nikhil Saini
        </Typography>
      </Box>
      {/* Right Side Content here comes our videos */}
      <Box p={2} sx={{overflowY:"auto",height:'90vh',flex:2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
     {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
      </Typography>

      <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
