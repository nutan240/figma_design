import React from 'react'
import Header from './Header'
import Main from './Main'
import { Stack } from '@mui/material'
import HeroSection from './HeroSection'
import Frame from './Frame'
import Cards from './Cards'
import ShopNow from './ShopNow'
import PopularThings from './PopularThings'
import TopTrending from './TopTrending'
import FooterHeader from './FooterHeader'

function MainApp() {
  return (
    <>
    <Stack sx={{width:'100vw'}}>
    <Header/>
        <Main/>
        <HeroSection/>
        <Frame/>
        <Cards/>
        <ShopNow/>
        <PopularThings/>
        <TopTrending/>
        <FooterHeader/>
    </Stack>
      
    </>
  )
}

export default MainApp