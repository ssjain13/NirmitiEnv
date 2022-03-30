import {
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
    ButtonBox, FieldBox, FooterBox, GoogleButton, Label, SmallText, StyledButton, StyleDialog,
    StyledPaper, TextBox, Title
} from "../styles/Modal.styles";

export const LoginModal = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <StyleDialog onClose={handleClose} open={open} scroll={"body"}>
      <StyledPaper elevation={3}>
        <form style={{ textAlign: "center", padding: "3rem 3.75rem 0px" }}>
          <Title component={"h3"}>Welcome to Nimriti Environment</Title>
          <SmallText component={"small"}>
            Log in with email & password
          </SmallText>

          <FieldBox>
            <Label component={"small"}>Email or phone number</Label>
            <TextBox type="email" fullWidth variant="outlined" />
          </FieldBox>
          <FieldBox>
            <Label component={"small"}>Password</Label>
            <TextBox type="password" fullWidth variant="outlined" />
          </FieldBox>
          <ButtonBox>
            <StyledButton fullWidth variant="contained">
              Login
            </StyledButton>
          </ButtonBox>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5em",
            }}
          >
            <Typography>Or</Typography>
          </Box>
          <Box>
            <GoogleButton fullWidth variant="contained">
              <img src={process.env.PUBLIC_URL + "/google-1.svg"} />
              <div style={{ marginLeft: "8px", fontSize: "12px" }}>
                Continue with Google
              </div>
            </GoogleButton>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <Box>Don't have an account?</Box>

            <Link to="/register">
              <FooterBox component={"h6"}>Sign Up</FooterBox>
            </Link>
          </Box>
        </form>
        <Box
          style={{
            backgroundColor: "rgb(243, 245, 249)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: "0",
          }}
        >
          Forgot your password?
          <Link to="/reset">
            <FooterBox component={"h6"}>Reset It</FooterBox>
          </Link>
        </Box>
      </StyledPaper>
    </StyleDialog>
  );
};
