import { Box, Button, Stack, Typography, } from '@mui/material'
import React from 'react'
import Image from "../IMG/shopcard.jpg";

function ShopNow() {
  return (
    <>
        <Stack sx={{width:'90%' , margin:'auto' ,
        backgroundImage: `url(${Image})`,}}>
        <Box sx={{paddingX:10 , width:'100%' ,paddingY:5}}>
            <Box sx={{fontFamily: "sans-serif",
            fontSize: "34px",
            fontWeight: 700,
            color: "#05073C", width:'366px'}}>Grab up to <span style={{color:'#EB662B'}}>35%</span> off on your favorite Destination</Box>
            <Typography sx={{fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#05073C", paddingY:3}}>Limited time offer, don't miss the opportunity</Typography>
                  <Button sx={{background:'#EB662B' , color:'white' , borderRadius:'12px' , width:'167px' , height:'62px',
                  ":hover":{
                    background:'#ce5c29'
                  }
                  
                  }}>Book Now</Button>
                  </Box>
        </Stack>
    </>
  )
}

export default ShopNow