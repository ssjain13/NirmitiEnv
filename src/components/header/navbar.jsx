import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./search";
import {LoginModal } from "../login.component"
export const NavBar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#4BB4B4",
    },
  }));

  const Wrapper = styled(Box)(({ theme }) => ({
    height: "80px",
  }));

  const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    width: "100%",
  }));

  const handleAccountClick = () => {
    //IsloggedIn? ShowAccountInfo : Login Pop up
    console.log("In account information");
    //Open Modal window
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#F3F5F9",
        boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)",
      }}
    >
      <Wrapper>
        <StyledContainer>
          <Box>
            <Link to="/">LOGO</Link>
          </Box>

          <Search />
          <Box>
            <IconButton aria-label="login user" onClick={handleAccountClick}>
              <AccountCircleRoundedIcon />
            </IconButton>
            <LoginModal open={open} onClose={handleClose}/>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        </StyledContainer>
      </Wrapper>
    </AppBar>
  );
};
