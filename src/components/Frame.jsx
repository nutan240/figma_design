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
      <Box sx={{ width: "90%", margin: "auto", paddingY: 2 }}>
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
        <Box
          sx={{ display: "flex", justifyContent: "space-between", paddingY: 2 }}
        >
          {/* Define the boxes for each destination */}
          {[
            { image: Image, name: "Paris", tours: "100 + Tours" },
            { image: Image1, name: "Singapore", tours: "400 + Tours" },
            { image: Image2, name: "Roma", tours: "400 + Tours" },
            { image: Image3, name: "Bangkok", tours: "1000 + Tours" },
            { image: Image4, name: "Bali", tours: "600 + Tours" },
            { image: Image5, name: "Phuket", tours: "2000 + Tours" },
            { image: Image6, name: "Tokyo", tours: "700 + Tours" },
            { image: Image7, name: "Cappadocia", tours: "900 + Tours" },
          ].map((destination, index) => (
            <Box
              key={index}
              sx={{
                width: "135px",
                position: "relative",
                "&:hover .backgroundImage": {
                  transform: "rotate(180deg)", // Rotate the background image on hover
                },
              }}
            >
              <Box
                className="backgroundImage"
                sx={{
                  backgroundImage: `url(${destination.image})`,
                  height: "135px",
                  width: "135px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transition: "transform 1.3s ease-in-out", // Define transition property
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#05073C",
                  fontWeight: 600,
                  paddingTop: 3,
                  textAlign: "center",
                }}
              >
                {destination.name}
              </Typography>
              <Typography sx={{ color: "#05073C", textAlign: "center" }}>
                {destination.tours}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  );
}

export default Frame;
