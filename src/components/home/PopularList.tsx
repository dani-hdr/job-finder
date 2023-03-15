import React from 'react'
import Grid from '@mui/material/Grid';
import PopularItem from './PopularItem';
import { Box } from '@mui/material';

const PopularList = () => {
  const popularItems = [1,2,3,4]
  return (
    <Box>
      <Grid container  spacing={2}>
       {popularItems.map(item=> <Grid item   key={item}  xs>
            <PopularItem/>
        </Grid>)}
      
    </Grid>
    </Box>
  )
}

export default PopularList