import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../IMG/footerimg.jpg";
import Image1 from "../IMG/icon1.jpg";
import Image2 from "../IMG/icon2.jpg";
import Image3 from "../IMG/icon3.jpg";
import Image4 from "../IMG/icon4.jpg";
import Image5 from "../IMG/icon5.jpg";
import Image6 from "../IMG/icon6.jpg";

function Footer() {
  return (
    <Box>
    <Stack
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        paddingY: 4,
      }}
    >
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Box sx={{ display: "flex", paddingY: 4 , fontWeight:'bold' }}>
          <Typography
            sx={{
              color: "#05073C",
              fontFamily: "sans-serif",
              fontSize: "23px",fontWeight:'bold'
            }}
          >
            Speak to our expert at
          </Typography>
          <Typography
            sx={{
              color: "#EB662B",
              fontFamily: "sans-serif",
              fontSize: "23px",
              fontWeight:'bold'
            }}
          >
            1-800-453-6744
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                paddingY: 3,
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                width: "350px",
              }}
            >
              328 Queensberry Street, North Melbourne VIC3051, Australia.
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              hi@viatours.com
            </Typography>
          </Box>
          <Box sx={{ paddingY: 3 }}>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                paddingY: 1,
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                paddingTop: 1,
              }}
            >
              Tourz Reviews
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                paddingTop: 1,
              }}
            >
              Travel Guides
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                paddingTop: 1,
              }}
            >
              Data Policy
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                paddingTop: 1,
              }}
            >
              Cookie Policy
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                paddingTop: 1,
              }}
            >
              Legal
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                paddingTop: 1,
              }}
            >
              Sitemap
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 600,
                fontSize: "22px",
                paddingTop: 4,
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                paddingTop: 1,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                paddingTop: 1,
              }}
            >
              Help center
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                paddingTop: 1,
              }}
            >
              Live chat
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                paddingTop: 1,
              }}
            >
              How it works
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                paddingTop: 4,
              }}
            >
              Newsletter
            </Typography>
            <Typography
              sx={{
                color: "#05073C",
                fontFamily: "sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                width: "350px",
                paddingTop: 1,
              }}
            >
              Subscribe to the free newsletter and stay up to date
            </Typography>
            <Typography
              sx={{
                background: "white",
                height: "60px",
                width: "300px",
                border: "1px",
                borderColor: "#E7E6E6",
                borderRadius: "12px",
                display: "flex",
                alignItems: "flex-end",
                textAlign: "center",
                gap: 3,
                paddingX: 2,
                marginTop: 4,
                justifyContent:'space-between'
              }}
            >
              <Typography
                sx={{
                  color: "#757575 ",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "50px",
                  marginBottom: "3px",
                }}
              >
                Your email address
              </Typography>
              <Button
                sx={{
                  color: "#05073C",
                  fontSize: "14px",
                  background: "white",
                  lineHeight: "50px",
                  marginTop: "9px",
                }}
              >
                Send
              </Button>
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#05073C",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  paddingTop: 4,
                }}
              >
                Mobile Apps
              </Typography>
              <Typography
                sx={{
                  color: "#05073C",
                  fontFamily: "sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  paddingTop: 1,
                }}
              >
                iOS App
              </Typography>
              <Typography
                sx={{
                  color: "#05073C",
                  fontFamily: "sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  paddingTop: 1,
                }}
              >
                Android App
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
     
    </Stack>
    <Box sx={{ display: "flex", justifyContent: "space-between"  , width:'90%' , margin:'auto' , paddingY:2 , color: "#05073C",}}>
        <Typography>© Copyright Viatours 2024</Typography>
        {/* <Box sx={{ display: "flex", gap: 0.3 }}>
          <Typography
            sx={{
              backgroundImage: `url(${Image1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "25px",
              borderRadius:3,
              width: "48px",
              ":hover" :{
                border:"2px" ,
                borderColor:'orange'
              }
            }}
          />
         
          <Typography
            sx={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius:3,
              height: "25px",
              width: "48px",
            }}
          />
          <Typography
            sx={{
              backgroundImage: `url(${Image3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "25px",
              width: "48px",
              borderRadius:3
            }}
          />
          <Typography
            sx={{
              backgroundImage: `url(${Image4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "25px",
              borderRadius:3,
              width: "48px",
            }}
          />
          <Typography
            sx={{
              backgroundImage: `url(${Image5})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "25px",
              borderRadius:3,
              width: "48px",
            }}
          />
          <Typography
            sx={{
              backgroundImage: `url(${Image6})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius:3,
              height: "25px",
              width: "48px",
            }}
          />
        </Box> */}
      </Box>
      </Box>
  );
}

export default Footer;
