import React from 'react'
import { Container, Paper, Stack, Typography, Box,Link } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <Box component='footer' mt={5}>
        <Paper sx={{py:3}} elevation={1}>
            <Container maxWidth="xl">
                <Stack direction={{xs:'column',md:'row'}} justifyContent='space-between' alignItems='center'>
                    <Typography fontWeight='bold' variant='h6' sx={{display:'flex',alignItems:'center',gap:2}}>Created with React & Material UI & some <FavoriteIcon sx={{color:'red'}}/> </Typography>
                    <Typography fontWeight='bold' variant='h6'>Developed by <Link href='https://github.com/dani-hdr'>me</Link> </Typography>
                </Stack>
            </Container>
        </Paper>
    </Box>
  )
}

export default Footer