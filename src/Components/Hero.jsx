import { Box, Button, Typography } from "@mui/material";
import React from "react";
import herobg from "../Assets/Images/hero.jpg"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${herobg})`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom>
          Welcome to <br /> EASYBUY
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "white" }}
        >
          Buy Products Easily
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "white" }}
        >
           <h3>Discover the ultimate shopping destination for the whole family at Easybuy. 
           Explore our clothing collection for men, women, and kids. Visit now!</h3>
        </Typography>
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          color="secondary"
          sx={{
            fontSize: "1rem",
            padding: "10px 20px",
            borderRadius: "25px",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#fff",
            color: "#000",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
            marginTop: "20px", // Add some space above the button
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
