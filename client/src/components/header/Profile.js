import { Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlicer";

const Profile = ({ name }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box onClick={(e) => handleClick(e)} sx={{ cursor: "pointer" }}>
        <Typography>{name}</Typography>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            dispatch(logout());
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
