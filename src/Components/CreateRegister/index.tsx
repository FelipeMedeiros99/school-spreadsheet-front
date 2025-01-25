import { Box } from "@chakra-ui/react";


import NavBarLeft from "./Components/NavBarLeft";
import NavBarTop from "./Components/NavBarTop";
import Register from "./Components/Register";
import BottomBar from "./Components/BottomBar";

export default function RegisterStudent() {
  return (
    <Box height={"100%"} display={"flex"} position={"relative"}>
      <NavBarTop />
      <NavBarLeft />
      <Register />
      <BottomBar />
    </Box>
  )
}