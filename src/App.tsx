import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import SignIn from "./Components/CredentialsPage/SignIn";
import SignUp from "./Components/CredentialsPage/SignUp";
import Home from "./Components/Home";
import RegisterStudent from "./Components/CreateRegister";

export interface TokenProps {
  token: string;
  setToken: (newToken: string) => void;
} 

export default function App() {
  const [ token, setToken ] = useState("")
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn token={token} setToken={setToken}/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home token={token} setToken={setToken}/>} />
        <Route path="/new-register" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}