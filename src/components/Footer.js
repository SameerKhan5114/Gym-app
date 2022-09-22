import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#202422">
    {/* <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "41px" }} />
    </Stack> */}
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "20px", xs: "15px" } }}
      mt="41px"
      textAlign="center"
      pb="20px"
      color="white"
      pt="20px"
    >
      Made by Abhishek
    </Typography>
  </Box>
);

export default Footer;
