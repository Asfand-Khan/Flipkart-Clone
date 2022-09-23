import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../../constants/data";

const NavbarContainer = styled(Box)`
  margin-top: 56px;
`;

const Nav = styled(Box)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  background-color: white;
  padding: 15px;
`;

const StyledImg = styled("img")({
  height: "64px",
});
const Navbar = () => {
  return (
    <NavbarContainer>
      <Nav>
        {navData.map((data, index) => (
          <Box key={index} sx={{ cursor: "pointer" }}>
            <StyledImg src={data.url} alt="navicon" />
            <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
              {data.text}
            </Typography>
          </Box>
        ))}
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
