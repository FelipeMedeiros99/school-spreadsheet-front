import { Box } from "@chakra-ui/react";


import NavBarLeft from "./Components/NavBarLeft";
import NavBarTop from "./Components/NavBarTop";
import Register from "./Components/Register";
import BottomBar from "./Components/BottomBar";


import { CredentialUserProps } from "../CredentialsPage/SignIn";

export interface StudentDataEdit {
  age: number;
  class : string;
  createdAt: string;
  id: number;
  name: string;
  userId: number;
}

export type EditStudentType  = CredentialUserProps & {
  studentData: StudentDataEdit
}

export default function EditStudent({credentialUser, setCredentialUser, alertMessageData, setAlertMessageData, changeAlertVisibility, studentData}: EditStudentType) {
  return (
    <Box height={"100%"} display={"flex"} position={"relative"}>
      <NavBarTop />
      <NavBarLeft />
      <Register 
        credentialUser={credentialUser} 
        setCredentialUser={setCredentialUser} 
        alertMessageData={alertMessageData} 
        setAlertMessageData={setAlertMessageData} 
        changeAlertVisibility={changeAlertVisibility}
        studentData={studentData}
      />
      <BottomBar />
    </Box>
  )
}