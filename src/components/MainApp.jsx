import React from 'react'
import Header from './Header'
import Main from './Main'
import { Stack } from '@mui/material'
import HeroSection from './HeroSection'
import Frame from './Frame'

function MainApp() {
  return (
    <>
    <Stack sx={{width:'100vw'}}>
    <Header/>
        <Main/>
        <HeroSection/>
        <Frame/>
    </Stack>
      
    </>
  )
}

export default MainApp