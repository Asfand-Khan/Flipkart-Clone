import { Box, Button, Divider, styled, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled("img")({
  height: 150,
  width: 150,
  textAlign: "center",
});

const CarouselHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const CarouselSlider = styled(Carousel)`
  margin-top: 10px;
`;

const Card = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductSlider = ({ products, title }) => {
  return (
    <Box sx={{ background: "#ffffff", padding: "5px", margin: "10px 0px" }}>
      <CarouselHeader>
        <Typography>
          <b>{title}</b>
        </Typography>
        <Button variant="contained">View All</Button>
      </CarouselHeader>
      <Divider />
      <CarouselSlider
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {products.map((product, index) => (
          <Box key={index}>
            <Link to={`product/${product.id}`} style={{ color: "inherit" }}>
              <Card
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={product.url} alt="product" />

                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  {product.title.shortTitle}
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "green" }}>
                  {product.discount}
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#9a9696" }}>
                  Rs {product.price.cost} /-
                </Typography>
              </Card>
            </Link>
          </Box>
        ))}
      </CarouselSlider>
    </Box>
  );
};

export default ProductSlider;
