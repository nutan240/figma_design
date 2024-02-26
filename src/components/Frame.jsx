import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../IMG/frame1.jpg";
import Image1 from "../IMG/frame2.jpg";
import Image2 from "../IMG/frame3.jpg";
import Image3 from "../IMG/frame4.png";
import Image4 from "../IMG/frame5.jpg";
import Image5 from "../IMG/frame6.jpg";
import Image6 from "../IMG/frame7.jpg";
import Image7 from "../IMG/frame8.jpg";

function Frame() {
  return (
    <Stack>
      <Box sx={{ width: "90%", margin: "auto" ,paddingY:2 }}>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: "34px",
            fontWeight: 700,
            color: "#05073C",
          }}
        >
          Trending destinations
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" ,paddingY:2 }}>
          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
              Paris
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              100 + Tours
            </Typography>
          </Box>

          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image1})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                textAlign: "center",
                paddingTop:3
              }}
            >
             Singapore
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              400 + Tours
            </Typography>
          </Box>

          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image2})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
             Roma
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              400 + Tours
            </Typography>
          </Box>
          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image3})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
             Bangkok
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              1000 + Tours
            </Typography>
          </Box>
          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image4})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
              Bali
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              600 + Tours
            </Typography>
          </Box>



          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image5})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
            Phuket
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              2000 + Tours
            </Typography>
          </Box>
          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image6})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
              Tokyo
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              700 + Tours
            </Typography>
          </Box>
          <Box sx={{ width: "135px" }}>
            <Typography
              sx={{
                backgroundImage: `url(${Image7})`,
                height: "135px",
                width: "135px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#05073C",
                fontWeight: 600,
                paddingTop:3,
                textAlign: "center",
              }}
            >
             Cappadocia
            </Typography>
            <Typography sx={{ color: "#05073C", textAlign: "center" }}>
              900 + Tours
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default Frame;
