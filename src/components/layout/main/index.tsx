
import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import Footer from '../Footer';
interface Props {
  children : React.ReactNode
}
const MainLayout = ({children} : Props) => {
  return (
   <>
    <Header/>
    <Container maxWidth='xl'>
      {children}
    </Container>
    <Footer/>
   </>
  )
}

export default MainLayout