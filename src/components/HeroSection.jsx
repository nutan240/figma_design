import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../IMG/ticket.jpg";
import Image1 from "../IMG/balloon.jpg";
import Image2 from "../IMG/diamond.png";
import Image3 from "../IMG/medal.jpg";

function HeroSection() {
  return (
    <>
      <Stack sx={{ width: "100Vw" }}>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "34px",
              fontWeight: 700,
              color: "#05073C",
            }}
          >
            Why choose Tourz
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingY: 3,
            }}
          >
            <Box sx={{ width: "250px" }}>
              <Typography
                sx={{
                  backgroundImage: `url(${Image})`,
                  height: "60px ",
                  width: "60px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#05073C",
                }}
              >
                Ultimate flexibility
              </Typography>
              <Typography
                variant="p"
                sx={{ width: "250px", height: "76px", color: "#05073C" }}
              >
                You're in control, with free cancellation and payment options to
                satisfy any plan or budget.
              </Typography>
            </Box>
            <Box sx={{ width: "250px" }}>
              <Typography
                sx={{
                  backgroundImage: `url(${Image1})`,
                  height: "60px ",
                  width: "60px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#05073C",
                }}
              >
                Memorable experiences
              </Typography>
              <Typography
                variant="p"
                sx={{ width: "250px", height: "76px", color: "#05073C" }}
              >
                Browse and book tours and activities so incredible, you'll want
                to tell your friends.
              </Typography>
            </Box>
            <Box sx={{ width: "250px" }}>
              <Typography
                sx={{
                  backgroundImage: `url(${Image2})`,
                  height: "60px ",
                  width: "60px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#05073C",
                }}
              >
                Quality at our core
              </Typography>
              <Typography
                variant="p"
                sx={{ width: "250px", height: "76px", color: "#05073C" }}
              >
                High-quality standards. Millions of reviews. A tourz company.
              </Typography>
            </Box>
            <Box sx={{ width: "250px" }}>
              <Typography
                sx={{
                  backgroundImage: `url(${Image3})`,
                  height: "60px ",
                  width: "60px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#05073C",
                }}
              >
                Award-winning support
              </Typography>
              <Typography
                variant="p"
                sx={{ width: "250px", height: "76px", color: "#05073C" , }}
              >
                New price? New plan? No problem. We're here to help, 24/7.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default HeroSection;
