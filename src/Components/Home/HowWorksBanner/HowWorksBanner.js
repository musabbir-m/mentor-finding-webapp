import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
const HowWorksBox = styled(Box)(({ theme }) => ({
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  
}));

const HowWorksBanner = () => {
  return (
    <Box sx={{ mt: "150px" }}>
        <Typography sx={{fontSize:'3rem', textAlign:'center', my:'15px'}}>Online lessons. Real–world results.</Typography>
      <HowWorksBox>
        <Box sx={{ width: "50%" }}>
          <img
            src="https://i.ibb.co/gJRc3yY/Online-learning-cuate.png"
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </Box>
        <Box sx={{my:'auto'}}>
          <Box sx={{ display: "flex" , mb:'15px'}}>
            <CheckCircleOutlineOutlinedIcon sx={{fontSize:'40px', mr:'10px', color:'green'}}></CheckCircleOutlineOutlinedIcon>
            <Typography noWrap>
              Meet with the expert of your choice, anywhere in the country,{" "}
              <br /> online or in-person
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb:'15px' }}>
            <CheckCircleOutlineOutlinedIcon sx={{fontSize:'40px', mr:'10px' , color:'green'}}></CheckCircleOutlineOutlinedIcon>
            <Typography lineHeight={1.5} noWrap>
              Meet with the expert of your choice, anywhere in the country,{" "}
              <br /> online or in-person
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb:'15px' }}>
            <CheckCircleOutlineOutlinedIcon sx={{fontSize:'40px', mr:'10px' , color:'green'}}></CheckCircleOutlineOutlinedIcon>
            <Typography noWrap>
              Meet with the expert of your choice, anywhere in the country,{" "}
              <br /> online or in-person
            </Typography>
          </Box>
          <Button variant="contained" className="bg-blue-500" sx={{mx:'2rem', mt:'2rem'}}>See More</Button>
        </Box>
      </HowWorksBox>
    </Box>
  );
};

export default HowWorksBanner;
