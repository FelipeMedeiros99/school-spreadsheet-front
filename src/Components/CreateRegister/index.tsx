import { Box } from "@chakra-ui/react";


import NavBarLeft from "./Components/NavBarLeft";
import Register from "./Components/Register";

export default function RegisterStudent() {
  return (
    <Box height={"100%"} display={"flex"}>
      <NavBarLeft />
      <Register />
    </Box>
  )
}