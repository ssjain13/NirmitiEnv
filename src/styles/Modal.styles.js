import { Dialog, styled, Paper, Box, TextField, Button } from "@mui/material";

export const StyleDialog = styled(Dialog)(({ theme }) => ({
  height: "100%",
  outline: "0px",
  overflow: "hidden auto",
  textAlign: "center",
  ".MuiDialog-paperScrollBody": {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(43, 52, 69)",
    margin: "32px",
    position: "relative",
    overflowY: "auto",
    verticalAlign: "middle",
    textAlign: "left",
    maxWidth: "600px",
    borderRadius: " 8px",
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "8px",
  width: "500px",
}));

export const Title = styled(Box)(({ theme }) => ({
  marginBottom: "8px",
  marginTop: "0px",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "1.5",
  textAlign: "center",
  textTransform: "none",
  whiteSpace: "normal",
}));
export const SmallText = styled(Box)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "1.5",
  color: "rgb(55, 63, 80)",
  marginBottom: "36px",
  display: "block",
  textAlign: "center",
  textTransform: "none",
  whiteSpace: "normal",
}));

export const Label = styled(Box)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "1.5",

  marginBottom: "8px",
  display: "block",
  textAlign: "left",
  textTransform: "none",
  whiteSpace: "normal",

  color: "rgb(75, 86, 107)",
}));

export const TextBox = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    height: "44px",
  },
}));
export const FieldBox = styled(Box)(({ theme }) => ({
  marginBottom: "12px",
}));
export const ButtonBox = styled(Box)(({ theme }) => ({
  marginBottom: "16px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#4BB4B4",
  height: "44px",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "#257181",
  },
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
  background: "rgb(66, 133, 244)",
  color: "white",
  height: "44px",
  textTransform: "capitalize",
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  marginLeft: "8px",
  marginBottom: "0",
  marginTop: "0",
  fontSize: "14px",
  fontWeight: "600",
  borderBottom: "1px solid rgb(43, 52, 69)",
}));
