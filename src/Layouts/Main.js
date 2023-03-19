import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <Container disableGutters maxWidth="">
      <CssBaseline></CssBaseline>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
