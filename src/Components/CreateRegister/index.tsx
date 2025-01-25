import { Box } from "@chakra-ui/react";


import NavBar from "./Components/NavBar";
import Register from "./Components/Register";

export default function RegisterStudent() {
  return (
    <Box height={"100%"} display={"flex"}>
      <NavBar />
      <Register />
    </Box>
  )
}