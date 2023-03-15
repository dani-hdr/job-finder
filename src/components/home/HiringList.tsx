import React from 'react'
import { Paper } from '@mui/material';
import HiringItem from './HiringItem';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';

const HiringList = () => {
  const list = [1,2,3,4]
  return (
    <Paper elevation={0}>
      <Box p={2}>
      <Stack gap={2} >
        {list.map(item=> <HiringItem key={item}/>)}
        </Stack>
      </Box>
      
    </Paper>
  )
}

export default HiringList