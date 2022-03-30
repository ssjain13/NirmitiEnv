import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, styled, IconButton } from "@mui/material";
import React from "react";

export const SocialIcons = () => {
  const SocialContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "16px",
    marginLeft: "-5px",
    marginRight: "-5px",
  }));
  const Social = styled(IconButton)(({ theme }) => ({
    margin: "4px",
    padding: "10px",
    background: "white",
    fontSize: "12px",
    ":hover": {
      backgroundColor: "#08151a",
    },
  }));

  return (
    <SocialContainer>
      <a href="/">
        <Social>
          <FacebookRoundedIcon style={{ color: "#1877F2" }} />
        </Social>
      </a>
      <a href="/">
        <Social>
          <YouTubeIcon style={{ color: "#CD201F" }} />
        </Social>
      </a>
      <a href="/">
        <Social>
          <TwitterIcon style={{ color: "#1DA1F2" }} />
        </Social>
      </a>
      <a href="/">
        <Social>
          <InstagramIcon style={{ color: "#FD1D1D" }} />
        </Social>
      </a>
    </SocialContainer>
  );
};
