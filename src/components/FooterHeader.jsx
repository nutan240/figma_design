import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from "../IMG/text.jpg";


function FooterHeader() {
  return (
 <>
    <Stack sx={{ backgroundImage: `url(${Image})`, width:'90%' , height:'500px', marginX:'auto',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginY:2 , borderRadius:4
    }}>
    <Box sx={{width:"80%" , margin:9}}>
<Typography sx={{width:'375px' , color:'white' , fontFamily:'sans-serif' , fontWeight:700 , fontSize:'40px'}}>
Get 5% off your 1st app booking
</Typography>
<Typography sx={{width:'313px' , color:'#FFFFFF', fontFamily:'sans-serif' , fontSize:'13px'}}>
Booking's better on the app. Use promo code "TourBooking" to save!
</Typography>
<Typography sx={{width:'287px' , fontSize:'17px' , color:'white' , paddingY:4}}>

Get a magic link sent to your email
</Typography>
<Box>
    <Typography>
        
    </Typography>
</Box>

</Box>

    </Stack>
 </>
  )
}

export default FooterHeader