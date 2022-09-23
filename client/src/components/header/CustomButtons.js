import { Box, Button, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../login-dialog/Login";

const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  font-weight: bold;
  margin-left: 20px;
`;

const CustomButton = styled(Button)`
  height: 29px;
  color: #2874f0;
  background-color: #fff;
  border-radius: 2px;
  padding: 5px 40px;
  margin-left: 20px;
  font-weight: bold;
  box-shadow:none:
`;

const CartWrapper = styled(Box)`
  display: flex;
`;
const CustomButtons = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <ButtonsWrapper>
      <CustomButton
        variant="contained"
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Login
      </CustomButton>
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <CartWrapper>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartWrapper>
      <Login dialogIsOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />
    </ButtonsWrapper>
  );
};

export default CustomButtons;
