import { Stack } from '@mui/material'
import React from 'react'
import Filter from '../components/home/Filter'
import Profile from './../components/home/Profile';
import PopularItem from '../components/home/PopularItem';
import PopularList from './../components/home/PopularList';
import Search from '../components/home/Search';
import HiringList from './../components/home/HiringList';
import PremiumAccount from '../components/home/PremiumAccount';

const Home = () => {
  return (
    <>
      <Stack gap={2}  direction='row' justifyContent='space-between' alignItems='start'>
        <Filter/>
         <Stack flexGrow={1}  gap={2} >
         <Search/>
          <PopularList/>
          <HiringList/>
         </Stack>
        <Stack flex={2} gap={2}>
          <Profile/>
          <PremiumAccount/>
        </Stack>
      </Stack>
    </>
  )
}

export default Home