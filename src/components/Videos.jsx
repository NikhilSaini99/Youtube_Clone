import { Stack,Box } from '@mui/material';

import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';


const Videos = ({videos,direction}) => {

    if(!videos?.length) return "Loading..."
  return (
    <Stack direction={direction || 'row'} gap={2} flexWrap="wrap" justifyContent="start">
        {videos.map((item,index)=>(
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
