import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import SignIn from "./Components/CredentialsPage/SignIn";
import SignUp from "./Components/CredentialsPage/SignUp";
import Home from "./Components/Home";
import RegisterStudent from "./Components/CreateRegister";
import EditStudent, { StudentDataEdit } from "./Components/EditStudent";

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
  const [studentDataEdit, setStudentDataEdit] = useState<StudentDataEdit>({age: NaN, class: "", createdAt: "", id: NaN, name: "", userId: NaN})

  function changeAlertVisibility(setAlertBoxVisibility: (newVisibility: boolean)=>void){
    setAlertBoxVisibility(true);
    setTimeout(()=>{setAlertBoxVisibility(false)}, 5000);
  }

  function updateCredentialUser(credential: CredentialUser){
    setCredentialUser(credential)
  }

  function updateAlertMessage(alertData: AlertMessageData){
    setAlertMessageData(alertData)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        
        <Route path="/sign-in" element={
          <SignIn 
            alertMessageData={alertMessageData} 
            setAlertMessageData={updateAlertMessage} 
            credentialUser={credentialUser} 
            setCredentialUser={updateCredentialUser} 
            changeAlertVisibility={changeAlertVisibility}
          />} 
        />
        
        <Route path="/sign-up" element={
          <SignUp 
            alertMessageData={alertMessageData} 
            setAlertMessageData={updateAlertMessage} 
            changeAlertVisibility={changeAlertVisibility}
            />} 
          />
        
        <Route path="/home" element={
          <Home 
            credentialUser={credentialUser} 
            setCredentialUser={updateCredentialUser} 
            alertMessageData={alertMessageData} 
            setAlertMessageData={updateAlertMessage}
            changeAlertVisibility={changeAlertVisibility} 
            setStudentDataEdit={setStudentDataEdit}
            // alertBox
            />} 
          />
        
        <Route path="/new-register" element={
          <RegisterStudent 
            credentialUser={credentialUser} 
            setCredentialUser={updateCredentialUser} 
            alertMessageData={alertMessageData} 
            setAlertMessageData={updateAlertMessage} 
            changeAlertVisibility={changeAlertVisibility}
            />} 
          />



        <Route path="/edit-student" element={
          <EditStudent 
            credentialUser={credentialUser} 
            setCredentialUser={updateCredentialUser} 
            alertMessageData={alertMessageData} 
            setAlertMessageData={updateAlertMessage} 
            changeAlertVisibility={changeAlertVisibility}
            studentData={studentDataEdit}
            />} 
          />


      </Routes>
    </Router>
  );
}