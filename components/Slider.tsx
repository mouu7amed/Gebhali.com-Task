import React, { useState, useEffect } from "react";
import { Box, Avatar, Typography, Stack, IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

const slides = [
  {
    label: "Best Offer",
    text: "New Arrivals on Sale",
    imgPath: "/assets/slide_01.jpg",
  },
  {
    label: "Flash Deals",
    text: "Get your best products",
    imgPath: "/assets/slide_02.jpg",
  },
  {
    label: "Last Minute",
    text: "Grap last minute deals",
    imgPath: "/assets/slide_03.jpg",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
      if (index === slides.length - 1) {
        setIndex(0);
      }
    }, 5000);
  });

  return (
    <Box position="relative" className="slider">
      <Avatar
        src={slides[index].imgPath}
        alt="slide"
        variant="square"
        sx={{ width: "100%", height: "100%" }}
      />
      <Stack
        sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}
        className="text-holder"
      >
        <Typography className="label">{slides[index].label}</Typography>
        <Typography className="text">{slides[index].text}</Typography>
      </Stack>
      <Box className="slider-nav">
        <IconButton color="primary" onClick={() => setIndex(0)}>
          {index === 0 ? (
            <FiberManualRecordIcon />
          ) : (
            <FiberManualRecordOutlinedIcon />
          )}
        </IconButton>

        <IconButton color="primary" onClick={() => setIndex(1)}>
          {index === 1 ? (
            <FiberManualRecordIcon />
          ) : (
            <FiberManualRecordOutlinedIcon />
          )}
        </IconButton>

        <IconButton color="primary" onClick={() => setIndex(2)}>
          {index === 2 ? (
            <FiberManualRecordIcon />
          ) : (
            <FiberManualRecordOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slider;
