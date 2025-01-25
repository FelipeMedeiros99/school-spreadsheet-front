import { Box } from "@chakra-ui/react";
import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";

import SignIn from "./Components/CredentialsPage/SignIn";
import SignUp from "./Components/CredentialsPage/SignUp";
import Home from "./Components/Home";
import RegisterStudent from "./Components/Home/RegisterStudentPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register-student" element={<RegisterStudent />} />

      </Routes>
    </Router>
  );
}