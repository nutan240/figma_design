import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from "../IMG/iconimg.jpg";
import Image1 from "../IMG/profileimg.jpg";

function Frameicon() {
  return (
    <Stack sx={{ backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    
    width:'100%' , paddingY:4
    }}>
<Box sx={{width :'90%' , margin:'auto' , textAlign:'center', alignItems:'center'}}>
<Typography sx={{width:'auto' , color:'#05073C' , fontSize:'30px' ,fontFamily:'sans-serif', fontWeight:700}}>Customer Reviews</Typography>
<Box sx={{width:'630px' , height:'502px'  ,textAlign:'center' , alignItems:'center' , justifyContent:'center'  , margin:'auto' , paddingY:4}}>
<Typography sx={{ backgroundImage: `url(${Image1})`, height:'100px' , width:'100px' ,alignContent:"center"  , display:'flex' ,justifyContent:'center'  , margin:'auto'}}>
{/* <Typography sx={{background:'#EB662B' , height:'38px' , width:'38px' , borderRadius:'46px' , color:'white' , fontSize:'20px' , position:'absolute' ,top:'0px', zIndex:1 , right:'60px' , textAlign:'center' }}> "</Typography> */}
</Typography>
<Typography sx={{fontFamily:"sans-serif" , fontWeight:600 , fontSize:'18px' , color:'#EB662B' , paddingTop:'10px'}}> Excellent Service!</Typography>
<Typography sx={{fontFamily:'sans-serif' ,fontSize:'20px' , alignItems:'center' , fontWeight:500 , color:'#05073C' , width:'600px' ,paddingY:2}}>I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!</Typography>
<Typography sx={{fontFamily:'sans-serif' ,fontSize:'15.75px' , alignItems:'center' , fontWeight:500 , color:'#05073C' , }} >John Smith</Typography>
<Typography sx={{fontFamily:'sans-serif' ,fontSize:'14px' , alignItems:'center' , fontWeight:500 , color:'#05073C' ,}}>Traveler</Typography>
</Box>
</Box>
    </Stack>
  )
}

export default Frameicon