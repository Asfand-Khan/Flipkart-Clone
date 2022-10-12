import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/product/productSlicer";
import Navbar from "./navbar/Navbar";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

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
      <Box sx={{ padding: "0px 10px 10px 10px", backgroundColor: "#F2F2F2" }}>
        <ProductSlider products={products} title="Deal of the day" />
        <ProductSlider products={products} title="Monthly Essentials" />
        <ProductSlider products={products} title="Home and kitchen" />
        <ProductSlider products={products} title="Grooming and Books" />
        <ProductSlider products={products} title="Fashion top deals" />
        <ProductSlider products={products} title="Others" />
      </Box>
    </>
  );
};

export default Home;
