import React, { createContext, useContext } from "react";
import app from "../../firebase/firebase.config";
import { getAtuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAtuth(app);

const AuthProvider = ({ children }) => {

const authInfo= {

}


  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
