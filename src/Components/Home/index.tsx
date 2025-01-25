import { Box, Heading, HStack, Button, VStack } from "@chakra-ui/react"  

import Header  from "./Components/Header"
import { HomeButton } from "./Components/Button"
import StudentsTable from "./Components/StudentsTable"

import "./index.css"

import students from "../../data"


export default function Home(){
  return(
    <VStack>
      <Header />
      <Box w={"100%"} maxW={"930px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{base: "20px 20px 20px 20px", md:"43px 66px 43px 66px"}}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{base: "0", md: "30px"}}>Alunos</Heading>
        <HomeButton>Criar Registro</HomeButton>
      </Box>

      <StudentsTable />

    </ VStack>
  )
}