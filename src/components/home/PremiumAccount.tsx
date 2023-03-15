import React from 'react'
import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import art from '../../assets/images/juicy-ai-person-detection-slash-face-id.png'
import { Box } from '@mui/material';
const PremiumAccount = () => {
  return (
    <Paper elevation={0} sx={{display:{xs:'none',md:'block'}}}>
       <Box p={3}>
       <Stack >
            <Typography variant='h6' component='p' color='text.secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo?</Typography>
            <Divider sx={{my:3}}/>
            <img src={art} alt="talking" />
            <Typography textAlign='center' component='span' color='text.secondary' fontWeight='medium'>Premium Account</Typography>
        
        <Typography textAlign='center' component='span' variant='h6' color='text.primary' fontWeight='bold'>Make you easily find job</Typography>
        <Button sx={{borderRadius:'10px',mt:3}} variant='contained' size='large'>Gooo!</Button>
        </Stack>
       </Box>
      
    </Paper>
  )
}

export default PremiumAccount