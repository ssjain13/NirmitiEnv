import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcons } from "./SocialIcons.component";
import { footerMenu } from "../../data/static/Menu";

export default function Footer() {
  const menu = footerMenu;
  const FooterContainer = styled(Container)(({ theme }) => ({
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  }));

  const FooterGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: "-48px",
    width: "calc(100% + 48px)",
    marginLeft: "-48px",
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    paddingTop: "4.8px",
    paddingBottom: "4.8px",
  }));
  const NavLink = styled(Link)(({ theme }) => ({
    color: "white",
  }));
  return (
    <footer style={{ background: "#4BB4B4", padding: "40px" }}>
      <FooterContainer>
        <NavLink to="/">LOGO</NavLink>
        <FooterGrid container spacing={6}>
          <Grid item xs={12} md={6} sm={6}>
            <InnerContainer>
              <Typography variant="h6">Customer Care</Typography>
            </InnerContainer>
            {menu.map((item) => (
              <InnerContainer>
                <NavLink to={item.link}>{item.title}</NavLink>
              </InnerContainer>
            ))}
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <InnerContainer>
              <Typography variant="h6">Contact Us</Typography>
            </InnerContainer>
            <InnerContainer>
              <LocationOnIcon />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderi
              </Typography>
            </InnerContainer>
            <InnerContainer>
              <Box>
                <EmailRoundedIcon />
              </Box>
              <Box>
                <Typography>santoshjain04@gmail.com</Typography>
              </Box>
            </InnerContainer>
            <InnerContainer>
              <LocalPhoneIcon />
              <Typography>+919867811254</Typography>
            </InnerContainer>
          <SocialIcons/>
          </Grid>
        </FooterGrid>
      </FooterContainer>
    </footer>
  );
}
