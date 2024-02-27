import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../IMG/things1.jpg";
import Image1 from "../IMG/things2.jpg";
import Image2 from "../IMG/things3.jpg";
import Image3 from "../IMG/things4.jpg";
import Image4 from "../IMG/things5.jpg";
import Image5 from "../IMG/things6.jpg";

function PopularThings() {
  return (
    <>
      <Stack sx={{ width: "90%", margin: "auto" }}>
        <Grid container sx={{ width: "100%" }}>
          <Grid item>
            <Grid
              sx={{
                backgroundImage: `url(${Image})`,
                height: "240px",
                width: "300px",
                marginTop: 3,
              }}
            ></Grid>
            <Grid
              sx={{
                backgroundImage: `url(${Image1})`,
                height: "240px",
                width: "300px",
                marginTop: 3,
                borderRadius: 3,
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            sx={{
              backgroundImage: `url(${Image2})`,
              height: "510px",
              width: "400px",
              display: "flex",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              margin: 2,
              borderRadius: 3,
            }}
          ></Grid>
          <Grid item gap={3} sx={{}}>
            <Grid
              sx={{
                backgroundImage: `url(${Image3})`,
                height: "240px",
                width: "570px",

                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginTop: 3,
                borderRadius: 3,
              }}
            ></Grid>

            <Grid sx={{ display: "flex", gap: "7px", padding: 3 }}>
              <Grid
                sx={{
                  backgroundImage: `url(${Image4})`,
                  height: "240px",
                  width: "190px",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Grid>
              <Grid
                sx={{
                  backgroundImage: `url(${Image5})`,
                  height: "240px",
                  width: "350px",

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: 3,
                }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default PopularThings;
