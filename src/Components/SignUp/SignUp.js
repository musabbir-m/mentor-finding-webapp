import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { useForm, useFormState } from "react-hook-form";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
     
    </div>
  );
};

export default SignUp;
