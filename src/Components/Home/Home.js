import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import SignUp from "../SignUp/SignUp";
import Branding from "./Branding/Branding";
import HowToFind from "./HowToFind/HowToFind";
import HowWorksBanner from "./HowWorksBanner/HowWorksBanner";

const Home = () => {
  return (
    <Container>
      <Branding></Branding>
      <HowToFind></HowToFind>
       <HowWorksBanner></HowWorksBanner>
      <CssBaseline></CssBaseline>

    </Container>
  );
};

export default Home;
