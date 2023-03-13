import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { useForm, useFormState } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {


  };

 

  return (
  
    

    <div>
      <Typography sx={{textAlign:'center', fontSize:'2rem'}}>Sign Up</Typography>
      <Card style={{ maxWidth: "450px", margin:'0 auto' }}>
        <CardContent>
          <form action="">
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                   {...register}
                  label="Full Name"
                  placeholder="Enter your full name"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  type="password"
                  placeholder="Enter your Email"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid xs={12} item>
                <Button fullWidth variant="outlined" type="submit">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
