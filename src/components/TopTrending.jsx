import { Box, Stack ,Typography } from '@mui/material'
import React from 'react'
import ImageA from "../IMG/top1.jpg";
import Image from "../IMG/card1.jpg";
import Image1 from "../IMG/card2.jpg";
import Image2 from "../IMG/card3.jpg";
import Image3 from "../IMG/card4.jpg";
function TopTrending() {
  return (
    <>
    <Box sx={{width:'90%' , margin:'auto'}}>
        <Stack sx={{backgroundImage: `url(${ImageA})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", width:'100%'}}>

<Box sx={{ width: "100%", margin: "auto", paddingY: 2 }}>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "34px",
              fontWeight: 700,
              color: "#05073C",
              margin:3
            }}
          >
            Top Trending
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
                position:'relative'

              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out", 
    "&:hover": {
      backgroundSize: "110%", 
    },
                }}
              >
             
              </Typography>
              <Typography sx={{background:'#f5f5f5' ,height:'30px' , width:'30px' , borderRadius:6 ,position:'absolute', right:'18px' , top:'177px'
                }} ></Typography>
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                Paris, France
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                  color: "#05073C",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
                position:'relative'
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image1})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out", 
    "&:hover": {
      backgroundSize: "110%", 
    },
                }}
              />
              <Typography sx={{background:'#f5f5f5' ,height:'30px' , width:'30px' , borderRadius:6 ,position:'absolute', right:'18px' , top:'177px'
                }} ></Typography>
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                New York , USA
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Molokini and Turtle Town Snorkeling Adventure Aboard
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                  color: "#05073C",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $225</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
                position:'relative'
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image2})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out", 
    "&:hover": {
      backgroundSize: "110%", 
    },
                }}
              />
              <Typography sx={{background:'#f5f5f5' ,height:'30px' , width:'30px' , borderRadius:6 ,position:'absolute', right:'18px' , top:'177px'
                }} ></Typography>
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                London, UK
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Westminster Walking Tour & Westminster Abbey Entry
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $943</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "388.31px",
                border: 2,
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                textAlign: "center",
                padding: 0.3,
                position:'relative'
              }}
            >
              <Typography
                sx={{
                  backgroundImage: `url(${Image3})`,
                  height: "198.56px",
                  width: "278px",
                  margin: "auto",
                  transition: "background-size 1.3s ease-in-out", 
    "&:hover": {
      backgroundSize: "110%", 
    },
                }}
              />
              <Typography sx={{background:'#f5f5f5' ,height:'30px' , width:'30px' , borderRadius:6 ,position:'absolute', right:'18px' , top:'177px'
                }} ></Typography>
              <Typography
                sx={{
                  color: "#717171",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  paddingLeft: "30px",
                  float: "left",
                  paddingY: 1,
                }}
              >
                Paris, France
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#05073C",
                  width: "249px",
                  margin: "auto",
                  paddingY: 1,
                }}
              >
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </Typography>
              <Typography sx={{ color: "#05073C", paddingBottom: "3px" }}>
                4.8 (243)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 3,
                  borderTop: "1px solid #E7E6E6",
                  width: "258px",
                  margin: "auto",
                  paddingTop: "5px",
                }}
              >
                <Typography sx={{ float: "left" }}>4 days</Typography>
                <Typography>From $189.25</Typography>
              </Box>
            </Box>
            
          </Box>
        </Box>

        </Stack>
        </Box>
    </>
  )
}

export default TopTrending