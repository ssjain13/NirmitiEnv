import { Box, Container, Paper, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/static/Menu";


export const Menu = () => {
  const data = menuItems;
  
  const MenuItem = styled(Box)(({ theme }) => ({
    display: "flex",
  }));
  const MenuContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flex: "1 0 0",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  }));

  const SubMenu = styled(Paper)(({ theme }) => ({
    height: "60px",
    transition: "all 250ms ease-in-out",
    backgroundColor: "#F3F5F9",
    color: "#2B3445",
    borderRadius: "0px",
    boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)",
  }));

  const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1em",
    alignItems: "center",
    padding: "10px",
    color: "black",
    ":hover": {
      boxShadow: "0px 4px 2px rgb(22,131,161)",
    },
  }));
  return (
    <SubMenu elevation={2}>
      <MenuContainer>
        {data.map((menuItem) => (
          <MenuItem>
            <NavLink to={menuItem.link} key={menuItem.item}>
              {menuItem.item}
            </NavLink>
          </MenuItem>
        ))}
      </MenuContainer>
    </SubMenu>
  );
};
