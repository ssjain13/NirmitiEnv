import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import {
  Button,
  CustomizedLink,
  FormHeader,
  GButton,
  Input,
  DontHaveAccount,
} from "../FormElements/FormElements";

export const Register = () => {
  return (
    <Box>
      <Box>
        <FormHeader
          title="Create Your Account"
          text="Please fill all fields to continue"
        />
      </Box>
      <Box>
        <form style={{ textAlign: "center", padding: "3rem 3.75rem 0px" }}>
          <Input label="Full Name" type="text" />
          <Input label="Email or Phone number" type="email" />
          <Input label="Password" type="password" />
          <Input label="Retype Password" type="password" />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <Checkbox />
            <Box>By signing up, you agree to</Box>
            <CustomizedLink text="Terms and Condition" link="/terms" />
          </Box>
          <Button type="submit" text="Create Account" />
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
            onClick={null}
          />
        </form>
      </Box>
    </Box>
  );
};
