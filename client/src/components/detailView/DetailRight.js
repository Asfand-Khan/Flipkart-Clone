import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../features/cart/cartSlice";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled("img")({
  width: "90%",
  border: "1px solid #cecece",
});

const CustomButton = styled(Button)`
  width: 45%;
  font-size: 12px;
  height: 50px;
  font-weight: bold;
  margin-top: 10px;
`;
const DetailRight = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add(product));
    // console.log(product);
  };
  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <Box sx={{ width: "100%" }}>
        <CustomButton
          variant="contained"
          sx={{ background: "#ff9f00", borderRadius: "2px" }}
          onClick={() => handleAdd()}
        >
          Add To Cart
        </CustomButton>
        &nbsp;
        <CustomButton
          variant="contained"
          sx={{ background: "#fb641b", borderRadius: "2px" }}
        >
          Buy Now
        </CustomButton>
      </Box>
    </Wrapper>
  );
};

export default DetailRight;
