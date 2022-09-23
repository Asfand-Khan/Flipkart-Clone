import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const CustomSearchBox = styled(Box)`
  background-color: #fff;
  border-radius: 2px;
  width: 350px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const InputSearchBase = styled(InputBase)`
  width: 100%;
  min-height: 36px;
  padding: 10px;
  font-size: 12px;
`;

const Search = () => {
  return (
    <CustomSearchBox>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIcon
        style={{ color: "#2874f0", padding: "5px", cursor: "pointer" }}
      />
    </CustomSearchBox>
  );
};

export default Search;
