import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { useForm, useFormState } from "react-hook-form";
import {
  Alert,
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
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");
        <Alert severity="success">user Created successfully</Alert>;
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => {});

        saveUser(data.name, data.email);
      })
      .catch((err) => setSignupError(err.message));
  };
  //saveuser to database
  const saveUser = (name, email) => {
    const user = { name, email, type: "mentee" };
    fetch("https://server-findmentor.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <div>
      <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
        Sign Up
      </Typography>
      <Card style={{ maxWidth: "450px", margin: "0 auto" }}>
        <CardContent>
          <form action="" onSubmit={handleSubmit(handleSignup)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  {...register("name", { required: "Please insert your name" })}
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
                  type="email"
                  placeholder="Enter your Email"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("email", {
                    required: "Please insert your email",
                  })}
                ></TextField>
                {errors.email && (
                  <Typography>{errors.email.message}</Typography>
                )}
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("password", {
                    required: "Password is required",
                  })}
                ></TextField>
                {errors.password && (
                  <Typography>{errors.password.message}</Typography>
                )}
              </Grid>
              {signupError && (
                <Alert fullWidth severity="error">
                  {signupError}
                </Alert>
              )}
              <Grid xs={12} item>
                <Button
                  className="bg-blue-500"
                  fullWidth
                  variant="contained"
                  type="submit"
                >
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
