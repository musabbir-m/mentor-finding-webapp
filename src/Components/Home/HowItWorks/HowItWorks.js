import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const WorkBox = styled(Box)(({ theme }) => ({
    height: "80vh",
    width: "100%",
    backgroundColor: "#",
    padding: "4rem ",
    marginTop: "0",
    display: "",
  
    justifyContent: "space-between",
    alignItems: "",
  }));
  
const HowItWorks = () => {
    return (
        <WorkBox>
            <Typography sx={{fontSize: '2rem', fontWeight: 'medium'}}>Instant or long-term mentorship? Finding help is pretty simple. </Typography>

            <Box>
                
            </Box>

        </WorkBox>
    );
};

export default HowItWorks;