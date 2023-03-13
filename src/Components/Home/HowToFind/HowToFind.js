import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AnimationOutlinedIcon from '@mui/icons-material/AnimationOutlined';

const WorkBox = styled(Box)(({ theme }) => ({
  height: "80vh",
  width: "100%",
  backgroundColor: "#",
  padding: "6rem 0 4rem 0",
  marginTop: "",
  display: "",

  justifyContent: "",
  alignItems: "",
  //   [theme.breakpoints.down('sm')]: {
  //     flexDirection: "column",
  //     "& > img": {},
  //   },
}));

const HowToFind = () => {
  return (
    <WorkBox>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "medium",
          textAlign: "center",
          mb: "4rem",
        }}
      >
        Instant or long-term mentorship? <br /> Finding help is pretty simple.{" "}
      </Typography>

      <Grid container sx={{ mx: "auto", px: "auto" }} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
                color="secondary"
                gutterBottom
              >
                Find a Mentor
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <ConnectWithoutContactIcon
                sx={{ color: "green", fontSize: "80px" }}
              ></ConnectWithoutContactIcon>
              <Typography variant="body2">
                Explore from the top mentors <br /> of multiple fields
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
                color="secondary"
                gutterBottom
              >
                Apply For Mentorship
              </Typography>
              <Typography variant="h5" component="div"></Typography>

              <NoteAltOutlinedIcon
                sx={{ color: "blue", fontSize: "80px" }}
              ></NoteAltOutlinedIcon>
              <Typography variant="body2">
                Explore from the top mentors <br /> of multiple fields
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
                color="secondary"
                gutterBottom
              >
                Boost your Skills{" "}
              </Typography>
              <Typography variant="h5" component="div"></Typography>
             <AnimationOutlinedIcon sx={{ color: "orange", fontSize: "80px" }}></AnimationOutlinedIcon>
              <Typography variant="body2">
                Explore from the top mentors <br /> of multiple fields
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </WorkBox>
  );
};

export default HowToFind;
