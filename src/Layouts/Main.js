import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <Container disableGutters maxWidth="">
      <CssBaseline></CssBaseline>
     <Navbar></Navbar>
      <Outlet></Outlet>
    </Container>
  );
};

export default Main;
