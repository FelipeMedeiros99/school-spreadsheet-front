import { Box } from "@chakra-ui/react";


import NavBarLeft from "./Components/NavBarLeft";
import NavBarTop from "./Components/NavBarTop";
import Register from "./Components/Register";
import BottomBar from "./Components/BottomBar";


import { CredentialUserProps } from "../CredentialsPage/SignIn";

export default function RegisterStudent({
  credentialUser,
  setCredentialUser,
  alertMessageData,
  setAlertMessageData,
  changeAlertVisibility
}: CredentialUserProps) {
return (
    <Box
      height={"100%"}
      display={"flex"}
      position={"relative"}>
      <NavBarTop />
      <NavBarLeft />
      <Register
        credentialUser={credentialUser}
        setCredentialUser={setCredentialUser}
        alertMessageData={alertMessageData}
        setAlertMessageData={setAlertMessageData}
        changeAlertVisibility={changeAlertVisibility}
      />
      <BottomBar />
    </Box>
  )
}