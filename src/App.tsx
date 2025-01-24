import { Box } from "@chakra-ui/react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Components/CredentialsPage/SignIn";
import SignUp from "./Components/CredentialsPage/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}