import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/product/productSlicer";
import Navbar from "./navbar/Navbar";
import Slider from "./Slider";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
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
