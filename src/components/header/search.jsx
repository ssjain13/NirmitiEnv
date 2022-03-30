import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
export const Search = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#4BB4B4",
    ":hover": {
      backgroundColor: "#257181",
    },
    paddingLeft: "3rem",
    minWidth: "0",
    minHeight: "0",
    paddingRight: "3rem",
    height: "43px",
    borderRadius: "0 300px 300px 0",
    textTransform: "capitalize",
  }));
  const StyledInput = styled(TextField)(({ theme }) => ({
    color: "#0F3460",
    "& .MuiOutlinedInput-root": {
      paddingRight: "0",
      borderColor: "red",
      borderRadius: "1200px",
      paddingLeft: "14px",
      width: "100%",
      height: "44px",
    },
  }));

  const SearchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flex: "1 0 0",
  }));
  const StyledFormControl = styled(FormControl)(({ theme }) => ({
    marginRight: "auto",
    maxWidth: "670px",
    marginLeft: "auto",
  }));
  return (
    <SearchBox>
      <StyledFormControl variant="standard" fullWidth>
        <StyledInput
          id="outlined-basic"
          variant="outlined"
          placeholder="Searching for..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <StyledButton variant="contained">Search</StyledButton>
              </InputAdornment>
            ),
          }}
        />
      </StyledFormControl>
    </SearchBox>
  );
};
