import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";

const BrandingBox = styled(Box)(({ theme }) => ({
  height: "80vh",
  width: "100%",
  backgroundColor: "#e6e6ff",
  padding: "1rem",
  margin: " 0",
  display: "flex",

  justifyContent: "space-between",
  alignItems: "",
}));

const Branding = () => {
  return (
    <BrandingBox>
      <Box>
        <Typography variant="h3" sx={{lineHeight:'1.2'}}>
          Find Your Mentor and <br /> boost your career
        </Typography>
        <Typography sx={{mb:2}}>
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Magni, est.
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "purple" }}>
          Find mentor
        </Button>
        <Button variant="outlined" color="secondary" sx={{ ml: 1 }}>
          {" "}
          Become a mentor
        </Button>
      </Box>
      <Box 
      sx={{
        width: '50%',
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block'
        }
      }}
      >
        <img
          src="https://i.ibb.co/jWcJdMw/Webinar-bro.png"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </Box>
    </BrandingBox>
  );
};

export default Branding;
