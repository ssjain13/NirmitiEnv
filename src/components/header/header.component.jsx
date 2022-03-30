import { Box } from "@mui/material";
import React from "react";
import { Menu } from "./Menu.component";
import { NavBar } from "./navbar";

export const Header = () => {
  return (
    <Box>
      <NavBar />
      <Menu />
    </Box>
  );
};
