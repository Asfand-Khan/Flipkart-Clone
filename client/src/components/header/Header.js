import React from "react";
import { AppBar, Toolbar, styled, Typography, Box } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  height: 56px;
  background-color: #2874f0;
`;
const Wrapper = styled(Toolbar)`
  min-height: 56px !important;
  display: flex;
  flex-direction: row;
  margin-left: 12%;
`;

const Logo = styled("img")({
  width: 80,
});
const SubHeading = styled(Typography)`
  font-size: 12px;
  font-style: italic;
  line-height: 0;
  display: flex;
  align-items: center;
`;
const PlusBox = styled(Box)`
  color: yellow;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <>
      <StyledAppBar>
        <Wrapper>
          <Box>
            <Link to="/" style={{ color: "inherit" }}>
              <Logo src={logoURL} alt="logo" />
              <SubHeading>
                Explore&nbsp;
                <PlusBox component="span">
                  Plus&nbsp;
                  <img src={subURL} alt="sublogo" style={{ height: 10 }} />
                </PlusBox>
              </SubHeading>
            </Link>
          </Box>
          <Search />
          <CustomButtons />
        </Wrapper>
      </StyledAppBar>
    </>
  );
};

export default Header;
