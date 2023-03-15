import React from 'react'
import { Paper, Stack } from '@mui/material';
import profielImage from "../../assets/images/profile.jpg"
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
const Profile = () => {
  return (
    <Paper  elevation={0} sx={{display:{xs:'none',md:'block'}}}>
     <Box p={3}>
     <Stack>
        <Stack direction='row' gap={2} alignItems='center'>
          <img width={50} style={{background:'#eee',borderRadius:'100%'}} src={profielImage} alt="profile" />
          <Stack>
            <Typography variant='h6' component='span' fontWeight='bold'>Daniel</Typography>
            <Typography variant='subtitle1' color='text.secondary' component='span' fontWeight='medium'>Front End Developer</Typography>
          </Stack>
        </Stack>
        <Divider sx={{my:3}}/>
        <Stack gap={1}>
          <Typography variant='h6' component='span' color='success.main'>&#x2022; 28 Availibale Connects</Typography>
          <Typography variant='h6' component='span' color='success.main'>&#x2022; 9 Submitetd Proposal</Typography>
        </Stack>
        <Button  sx={{boxShadow:'none',fontWeight:'bold',mt:4}}  variant='contained' color='secondary' size='large'>Edit Profile</Button>
      </Stack>
     </Box>
    </Paper>
  )
}

export default Profile