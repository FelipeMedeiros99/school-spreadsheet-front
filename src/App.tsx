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

export type StatusErrorType = "error" | "info" | "warning" | "success" | "neutral"

export interface AlertMessageData {
  title: string;
  description: string;
  status: StatusErrorType;
}

export default function App() {
  const [credentialUser, setCredentialUser] = useState<CredentialUser>({ token: "", userId: NaN })
  const [alertMessageData, setAlertMessageData] = useState<AlertMessageData>({ title: "", description: "", status: "error" })

  function changeAlertVisibility(setAlertBoxVisibility: (newVisibility: boolean)=>void){
    setAlertBoxVisibility(true);
    setTimeout(()=>{setAlertBoxVisibility(false)}, 5000);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        
        <Route path="/sign-in" element={
          <SignIn 
            alertMessageData={alertMessageData} 
            setAlertMessageData={setAlertMessageData} 
            credentialUser={credentialUser} 
            setCredentialUser={setCredentialUser} 
            changeAlertVisibility={changeAlertVisibility}
          />} 
        />
        
        <Route path="/sign-up" element={
          <SignUp 
            alertMessageData={alertMessageData} 
            setAlertMessageData={setAlertMessageData} 
            changeAlertVisibility={changeAlertVisibility}
            />} 
          />
        
        <Route path="/home" element={
          <Home 
            credentialUser={credentialUser} 
            setCredentialUser={setCredentialUser} 
            alertMessageData={alertMessageData} 
            setAlertMessageData={setAlertMessageData}
            changeAlertVisibility={changeAlertVisibility} 
            />} 
          />
        
        <Route path="/new-register" element={
          <RegisterStudent 
            credentialUser={credentialUser} 
            setCredentialUser={setCredentialUser} 
            alertMessageData={alertMessageData} 
            setAlertMessageData={setAlertMessageData} 
            changeAlertVisibility={changeAlertVisibility}
            />} 
          />
      </Routes>
    </Router>
  );
}