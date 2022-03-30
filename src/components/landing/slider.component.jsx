import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  styled,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import Home from "@mui/icons-material/Home";

import React from "react";
import Carousel from "react-material-ui-carousel";

export const ProductSlider = () => {
  const imageList = [
    {
      img: process.env.PUBLIC_URL + "/cat3.png",
      text: "This is image 1",
    },
    {
      img: process.env.PUBLIC_URL + "/slider_img.jpg",
      text: "This is image 1",
    },
    {
      img: process.env.PUBLIC_URL + "/cat3.png",
      text: "This is image 1",
    },
    {
      img: process.env.PUBLIC_URL + "/cat3.png",
      text: "This is image 1",
    },
  ];

  const SliderContent = styled(Card)(({ theme }) => ({
    background: "red",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }));

  const StyleCard = styled(CardContent)(({ theme }) => ({
    margin: "0",
    alignItems: "center",
    alignContent: "center",
    padding: "10px",
    //display: "flex",
    position: "absolute",
    top: "10vh",
  }));

  const StyleButton = styled(Button)(({ theme }) => ({
    background: "#4BB4B4",

    margin: "0 auto",
    ":hover": {
      background: "#257181",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: "white",
    marginBottom: "10px",
    width: "60%",
  }));

  return (
    <Carousel fullHeightHover={false} height="300px">
      {imageList.map((item, i) => (
        <SliderContent
          style={{
            backgroundImage: `url(${item.img})`,
          }}
        >
          <StyleCard>
            <StyledTypography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              officia possimus quo modi iusto porro voluptatem accusamus dicta
              dolor vero quidem dolores doloremque, soluta, fugit error ut,
              temporibus asperiores in!
            </StyledTypography>
            <StyleButton variant="contained" size="large">
              Shop Now!
            </StyleButton>
          </StyleCard>
        </SliderContent>
      ))}
    </Carousel>
  );
};
