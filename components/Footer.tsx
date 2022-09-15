import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ padding: "2rem 1rem 0.5rem" }}>
      <Divider />
      <Typography
        sx={{ mt: 2 }}
        textAlign="center"
        variant="body1"
        color="GrayText"
        fontSize={{ xs: "0.8rem", md: "1rem" }}
      >
        COPYRIGHT © 2022 GEBHALY.COM, LTD. - DESIGN: MOHAMMED AZZAB
      </Typography>
    </Box>
  );
};

export default Footer;
