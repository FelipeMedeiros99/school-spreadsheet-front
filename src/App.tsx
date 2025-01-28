import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import SignIn from "./Components/CredentialsPage/SignIn";
import SignUp from "./Components/CredentialsPage/SignUp";
import Home from "./Components/Home";
import RegisterStudent from "./Components/CreateRegister";

export interface CredentialUser {
  token: string;
  userId: number
}


export default function App() {
  const [ credentialUser, setCredentialUser ] = useState<CredentialUser>({token: "", userId: NaN})
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn credentialUser={credentialUser} setCredentialUser={setCredentialUser}/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home credentialUser={credentialUser} setCredentialUser={setCredentialUser}/>} />
        <Route path="/new-register" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}