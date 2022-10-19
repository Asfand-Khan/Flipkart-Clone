import { Box, Button, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../features/cart/cartSlice";

const CartWrapper = styled(Box)`
  margin: 58px 10px 10px 10px;
`;

const Wrapper = styled(Paper)`
  margin: 10px 0px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <CartWrapper>
      {cartItems.map((item, index) => (
        <Wrapper key={index}>
          <Box>
            <img src={item.detailUrl} alt="cart" style={{ height: 200 }} />
          </Box>
          <Box>
            <Typography>{item.title.longTitle}</Typography>
            <Typography>{item.price.cost}</Typography>
            <Typography>{item.price.discount}</Typography>
          </Box>
          <Button variant="contained" onClick={() => handleRemove(item.id)}>
            Remove
          </Button>
        </Wrapper>
      ))}
    </CartWrapper>
  );
};

export default Cart;
