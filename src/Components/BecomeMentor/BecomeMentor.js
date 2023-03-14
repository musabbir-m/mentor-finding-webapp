import {
  Alert,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const BecomeMentor = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const [signupError, setSignupError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = { displayName: data.name1+" "+data.name2 };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => {});
        toast('Registered successfully')

        saveUser(data.name1+" "+data.name2, data.email, data.category, data.bio, data.job, data.company);
      })
      .catch((err) => setSignupError(err.message));
  };
  //saveuser to database
  const saveUser = (name, email, category, bio, job, company) => {
    const user = { name, email,category,bio, job,company, type: "mentor", approved: 'false' };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  //
  return (
    <div className="mx-auto px-5 mt-16 mb-32  md:px-16">
      <h2 className="text-center font-semibold text-4xl">Apply as A mentor</h2>

      <Alert className="w- mx-auto mt-10" severity="info">
        Filling out the form only takes a couple minutes. We'd love to learn
        more about your background and the ins-and-outs of why you'd like to
        become a mentor. Keep things personal and talk directly to us and your
        mentees. We don't need jargon and polished cover letters here! You agree
        to our code of conduct and the mentor agreement by sending the form, so
        be sure to have a look at those.
      </Alert>
      <form onSubmit={handleSubmit(handleSignup)}>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <TextField
            {...register("name1", { required: "Please insert your name" })}
            label="First Name"
            placeholder="Enter your first name"
            variant="outlined"
            fullWidth
            required
            size="small"
            className=""
          ></TextField>
          <TextField
            {...register("name2", { required: "Please insert your name" })}
            label="Last Name"
            placeholder="Enter your last name"
            variant="outlined"
            fullWidth
            required
            size="small"
            className=""
          ></TextField>
          <TextField
            {...register("email", { required: "Please insert your email" })}
            label="Email"
            placeholder="Enter your full name"
            variant="outlined"
            fullWidth
            required
            type="email"
            size="small"
            className=""
          ></TextField>
          <TextField
            {...register("password", {
              required: "Please insert your password",
            })}
            label="Select a password"
            placeholder="Enter a strong password"
            variant="outlined"
            fullWidth
            required
            size="small"
            type="password"
            className=""
          ></TextField>
          <TextField
            {...register("job", { required: "Please put your job title" })}
            label="Job title"
            placeholder="Enter your job title"
            variant="outlined"
            fullWidth
            required
            size="small"
            className=""
          ></TextField>
          <TextField
            {...register("company")}
            label="company"
            placeholder="Enter your company name"
            variant="outlined"
            fullWidth
            size="small"
            className=""
          ></TextField>
          <TextField
            {...register("location")}
            label="Location"
            placeholder="Select Location"
            variant="outlined"
            fullWidth
            size="small"
            className=""
          ></TextField>
        </div>
        <div>
          <div className="mt-3">
            <h2 className="text-2xl text-center">Give Some more information </h2>
            <p>Category</p>
            <select
              className=" mb-3 h-10 w-2/4 border-2 rounded"
              placeholder="User type"
              {...register("category", { required: "Please select a category" })}
            >
              <option value="Web Development">Web Development</option>
              <option value="Programming">Programming</option>
              <option value="Ux and Design">UX and Design</option>
              <option value="Product adn Marketing">Product and Marketing</option>
            </select>
          </div>
          <p className="">Bio</p>
          <TextField
          {...register("bio", { required: "Please add a short bio" })}
          id="outlined-multiline-static"
         
          placeholder="Add a bio"
          multiline
          rows={4}
          
          fullWidth
        />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="mt-8  px-4 py-2 bg-blue-500 text-white rounded">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BecomeMentor;