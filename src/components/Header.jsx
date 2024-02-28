import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../IMG/logo-1.jpg";

function Header() {
  return (
    <Box
      sx={{ display: "flex", width: "100%", paddingY: "7px", overflow: "auto" }}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",

          marginX: "auto",
        }}
      >
        <Typography
          sx={{
            backgroundImage: ` url( ${Image} )`,
            backgroundRepeat: "no-repeat",
            height: "32px",
            width: { lg: "167px", sm: "310px", xs: "310px" },
            top: "6.06px",
          }}
        ></Typography>
        <Typography
          sx={{
            width: { lg: "350px", sm: "300px", xs: "260px" },

            left: "197px",
            display: { lg: "block", sm: "block", xs: "none" },
            justifyContent: "center",
            lineHeight: "43px",
            fontSize: { lg: "14px", sm: "10px ", xs: "10px" },
          }}
        >
          Search destinations or activities
        </Typography>
        <Box
          sx={{
            width: "480.5px",
            top: "22px",
            left: "711.5px",
            alignContent: "center",
            alignItems: "center",
            paddingX: "30px",
            display: { lg: "flex", sm: "none", sx: "none" },
            justifyContent: "space-between",
            ":hover": {
              color: "#EB662B",
            },
          }}
        >
          <Typography
            sx={{
              color: "#05073C",
              width: "149.61px",
              ":hover": {
                color: "#EB662B",
              },
              top: "0.94px",
            }}
          >
            Destinations
          </Typography>
          <Typography
            sx={{
              width: "127.45px",
              height: "42.13",
              top: "0.94px",
              ":hover": {
                color: "#EB662B",
              },
              color: "#05073C",
            }}
          >
            Activities
          </Typography>
          <Typography
            sx={{
              width: "91.86px",
              height: "42.13",
              top: "0.94px",
              ":hover": {
                color: "#EB662B",
              },
              color: "#05073C",
            }}
          >
            USD
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 430,
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
              fontFamily: "sans-serif",
              ":hover": {
                color: "#EB662B",
              },
            }}
          >
            Sign up
          </Typography>
        </Box>
        <Button
          sx={{
            background: "#EB662B",
            width: { lg: "83.31px ", sm: "90px", xs: "100px" },
            borderRadius: "200px",
            color: "white",
            marginLeft: "20px",
            ":hover": {
              background: "#d06637",
            },
          }}
        >
          Log in
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
