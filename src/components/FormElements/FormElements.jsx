import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonBox,
  FieldBox,
  FooterBox,
  GoogleButton,
  Label,
  SmallText,
  StyledButton,
  TextBox,
  Title,
} from "../../styles/Modal.styles";

export const Button = (props) => {
  return (
    <ButtonBox>
      <StyledButton fullWidth variant="contained" type={`${props.type}`}>
        {props.text}
      </StyledButton>
    </ButtonBox>
  );
};

export const GButton = () => {
  return (
    <Box>
      <GoogleButton fullWidth variant="contained">
        <img src={process.env.PUBLIC_URL + "/google-1.svg"} />
        <div style={{ marginLeft: "8px", fontSize: "12px" }}>
          Continue with Google
        </div>
      </GoogleButton>
    </Box>
  );
};

export const CustomizedLink = (props) => {
  return (
    <Link to={`${props.link}`} onClick={props.onClick}>
      <FooterBox component={"h6"}>{props.text}</FooterBox>
    </Link>
  );
};

export const Input = (props) => {
  return (
    <FieldBox>
      <Label component={"small"}>{props.label}</Label>
      <TextBox type={`${props.type}`} fullWidth variant="outlined" />
    </FieldBox>
  );
};

export const FormHeader = (props) => {
  return (
    <div>
      <Title component={"h3"}>{props.title}</Title>
      <SmallText component={"small"}>{props.text}</SmallText>
    </div>
  );
};

export const DontHaveAccount = (props) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1.25rem",
        marginBottom: "1.25rem",
      }}
    >
      <Box>{props.content}</Box>

      <Link to={`${props.link}`} onClick={props.onClick}>
      <FooterBox component={"h6"}>{props.text}</FooterBox>
    </Link>
    </Box>
  );
};
