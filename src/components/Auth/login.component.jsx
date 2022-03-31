import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  SmallText,
  StyleDialog,
  StyledPaper,
  Title,
} from "../../styles/Modal.styles";
import {
  Button,
  Input,
  CustomizedLink,
  GButton,
  FormHeader,
  DontHaveAccount,
} from "../FormElements/FormElements";

export const LoginModal = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <StyleDialog
      onClose={handleClose}
      open={open}
      scroll={"body"}
      onBackdropClick={handleClose}
    >
      <StyledPaper elevation={3}>
        <form style={{ textAlign: "center", padding: "3rem 3.75rem 0px" }}>
          <FormHeader
            title="Welcome to Nirmiti Environment"
            text="Log in with email & password"
          />

          <Input label="Email or Phone number" type="email" />
          <Input label="Password" type="password" />

          <Button text="Login" type="submit" />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5em",
            }}
          >
            <Typography>Or</Typography>
          </Box>
          <GButton />
          

          <DontHaveAccount
            content="Don't have an account?"
            text="Sign Up"
            link="/register"
            onClick={handleClose}
          />
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
          <CustomizedLink text="Reset It" link="/reset" />
        </Box>
      </StyledPaper>
    </StyleDialog>
  );
};
