import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

const Login = () => {
    const {login}= useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm(); 
      const [error, setError]= useState("")


      const location= useLocation()
    const navigate= useNavigate()
    const from= location.state?.from?.pathname || '/'
      
    const handleLogin= (data)=> {
        setError("")
        login(data.email, data.password)
        .then(user=> console.log(user))
        toast("logged in successfully")
        navigate(from, {replace: true})

        .catch((err) => setError(err.message));
        console.log(data);



       
    }

    return (
        <div>
        <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
          Login 
        </Typography>
        <Card style={{ maxWidth: "450px", margin: "0 auto" }}>
          <CardContent>
            <form action="" onSubmit={handleSubmit(handleLogin)}>
              <Grid container spacing={1}>
               
                <Grid xs={12} item>
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="Enter your Email"
                    variant="outlined"
                    fullWidth
                    required
                    {...register("email", { required: "Please insert your email" })}
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
                    {...register("password", { required: "Password is required" })}
                  ></TextField>
                   {errors.password && (
                  <Typography>{errors.password.message}</Typography>
                )}
                </Grid>
                {error && <Alert fullWidth severity="error">{error}</Alert>}
                <Typography sx={{text:'center', ml:'1rem'}}>Don't have an account? <Link className='underline' to='/signup'>Signup</Link></Typography>
                <Grid xs={12} item>
                  <Button className='bg-blue-500' fullWidth variant="contained" type="submit">
                   Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    );
};

export default Login;