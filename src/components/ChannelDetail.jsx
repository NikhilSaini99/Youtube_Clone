import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

import Videos from './Videos'
import ChannelCard from './ChannelCard'

import { fetchFromAPI } from '../Utils/FetchfromAPI'


const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))

  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(187, 35, 49, 1) 0 %, rgba(209, 71, 95, 1) 45 %, rgba(54, 207, 208, 1) 87 %)',
          zIndex:10,
          height:'300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'></ChannelCard>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}

export default ChannelDetail
