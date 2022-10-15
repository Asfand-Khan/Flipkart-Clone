import { Box, styled, Typography } from "@mui/material";
import React from "react";

const DetailLeft = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Box>
      <Typography sx={{ fontSize: "22px" }}>
        {product.title.longTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          color: "#878787",
          display: "flex",
          alignItems: "center",
        }}
      >
        10 Ratings & 1 review
        <Box component="span">
          <img
            src={fassured}
            alt="flipkartassured"
            style={{ width: 75, marginLeft: 10 }}
          />
        </Box>
      </Typography>
      <Typography
        sx={{ fontSize: "14px", color: "#388E3C", fontWeight: "bold" }}
      >
        Special Price
      </Typography>
      <Typography>
        <Box component="span" sx={{ fontSize: "25px" }}>
          ₹{product.price.cost}
        </Box>
        <Box component="span" sx={{ color: "#878787", marginLeft: "5px" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        <Box component="span" sx={{ color: "#388E3C", marginLeft: "5px" }}>
          {product.price.discount}
        </Box>
      </Typography>
    </Box>
  );
};

export default DetailLeft;
