import { Box, Heading, VStack } from "@chakra-ui/react";

import Header  from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";

import "./index.css";
import MyButton from "../MyButton";



export default function Home(){
  return(
    <VStack>
      <Header />
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{base: "20px 20px 20px 20px", md:"43px 66px 43px 66px"}}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{base: "0", md: "30px"}}>Alunos</Heading>
        <MyButton>Criar Registro</MyButton>
      </Box>

      <StudentsTable />

    </ VStack>
  )
}