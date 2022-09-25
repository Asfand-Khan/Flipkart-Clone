import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const Wrapper = styled(Box)`
  display: flex;
  height: 90vh;
  box-sizing: border-box;
`;
const ImageWrapper = styled(Box)`
  width: 40%;
  background-color: #2874f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > img {
    margin-bottom: 40px;
    padding: 0px 20px;
  }

  & > div {
    margin-top: 30px;
    padding: 20px;
    color: #ffffff;
    font-family: inherit;
  }
`;

const ContentWrapper = styled(Box)`
  width: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginButton = styled(Button)`
  width: 100%;
  height: 55px;
  border-radius: 2px;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: none;
  box-shadow: none;
  background-color: #fb641b;
  margin: 20px;
`;
const OTPButton = styled(Button)`
  width: 100%;
  height: 55px;
  border-radius: 2px;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: none;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  color: #2874f0;
  margin: 20px;
`;

const Text = styled(Typography)`
  color: #2874f0;
  margin-top: 10%;
  cursor: pointer;
`;
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const Login = ({ dialogIsOpen, setDialogIsOpen }) => {
  
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [user,setUser] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    contact:"",
  });
  
  const image =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
  
  const handleClose = () => {
    setDialogIsOpen(false);
    toggleAccount(accountInitialValues.login);
  };
  
  const handleToggle = (e) => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleInput=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  
  const handleSignup=(user)=>{
    console.log(user)
  }
  
  return (
    <Dialog
      open={dialogIsOpen}
      onClose={() => handleClose()}
      maxWidth="sm"
      fullWidth={true}
    >
      <Wrapper>
        <ImageWrapper>
          <Box>
            <Typography
              variant="h5"
              sx={{ paddingBottom: "20px", fontWeight: "700" }}
            >
              {account.heading}
            </Typography>
            <Typography>{account.subHeading}</Typography>
          </Box>
          <img src={image} alt="login" />
        </ImageWrapper>
        {account.view === "login" ? (
          <ContentWrapper>
            <TextField
              label="Enter Email/Mobile No:"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              label="Enter Password"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
            />
            <Typography sx={{ marginTop: "20px", fontSize: "12px" }}>
              By continuing, you agree to Flipkart's
              <Box component="span" sx={{ color: "#2874f0" }}>
                &nbsp;Terms of Use
              </Box>
              &nbsp;and&nbsp;
              <Box component="span" sx={{ color: "#2874f0" }}>
                Privacy Policy
              </Box>
              .
            </Typography>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography sx={{ color: "#666666", fontSize: "14px" }}>
              OR
            </Typography>
            <OTPButton variant="contained">Request OTP</OTPButton>
            <Text
              onClick={() => {
                handleToggle();
              }}
            >
              New to Flipkart? Create an account
            </Text>
          </ContentWrapper>
        ) : (
          <ContentWrapper>
            <TextField
              label="Enter Firstname"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
              onChange={(e)=>{handleInput(e)}}
              name="firstname"
            />
            <TextField
              label="Enter Lastname"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
              onChange={(e)=>{handleInput(e)}}
              name="lastname"
            />
            <TextField
              label="Enter Username"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
              onChange={(e)=>{handleInput(e)}}
              name="username"
            />
            <TextField
              label="Enter Email"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
              onChange={(e)=>{handleInput(e)}}
              name="email"
            />
            <TextField
              label="Enter Password"
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
              onChange={(e)=>{handleInput(e)}}
              name="password"
            />
            <TextField
              label="Enter Contact No."
              variant="standard"
              sx={{ width: "100%", marginBottom: "10px" }}
              onChange={(e)=>{handleInput(e)}}
              name="contact"
            />

            <LoginButton variant="contained" onClick={()=>{handleSignup(user)}}>Continue</LoginButton>
            <Text
              sx={{ margin: "-15px" }}
              onClick={() => {
                toggleAccount(accountInitialValues.login);
              }}
            >
              Existing User? Login
            </Text>
          </ContentWrapper>
        )}
      </Wrapper>
    </Dialog>
  );
};

export default Login;
