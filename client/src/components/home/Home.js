import { Box } from "@mui/material";
import React from "react";
import Navbar from "./navbar/Navbar";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: "10px",
          backgroundColor: "#F2F2F2",
        }}
      >
        <Slider />
      </Box>
    </>
  );
};

export default Home;
