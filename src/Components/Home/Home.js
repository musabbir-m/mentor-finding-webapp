import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import SignUp from "../SignUp/SignUp";
import Branding from "./Branding/Branding";
import HowItWorks from "./HowItWorks/HowItWorks";

const Home = () => {
  return (
    <Container>
      <Branding></Branding>
      <HowItWorks></HowItWorks>
      <CssBaseline></CssBaseline>
    </Container>
  );
};

export default Home;
