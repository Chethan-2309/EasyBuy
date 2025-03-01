import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import pic from "../Assets/Images/herobg.webp";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={pic}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              EasyBuy- Super Style, Super Price
            </Typography> <br />
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}>
                Discover the ultimate shopping destination for the whole family at Easybuy. 
                Explore our clothing collection for men, women, and kids. Visit now!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
