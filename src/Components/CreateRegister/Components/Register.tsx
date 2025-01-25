import { Box, Heading } from "@chakra-ui/react";

import { HomeButton } from "../../Home/Components/Button";


export default function Register() {
  return (
    <Box>
      <Box w={"100%"} maxW={"930px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "43px 66px 43px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0", md: "30px" }}>Alunos</Heading>
        <HomeButton>Voltar</HomeButton>
      </Box>
    </Box>
  )
}