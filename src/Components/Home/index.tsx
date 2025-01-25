import { Box, Heading, HStack, Button } from "@chakra-ui/react"  

import Header  from "./Header"
import { HomeButton } from "./Button"
import StudentsTable from "./StudentsTable"

import "./index.css"

import students from "../../data"


export default function Home(){
  return(
    <Box >
      <Header />
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{base: "20px 20px 20px 20px", md:"43px 66px 43px 66px"}}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{base: "0", md: "30px"}}>Alunos</Heading>
        <HomeButton>Criar Registro</HomeButton>
      </Box>

      <StudentsTable />

    </ Box>
  )
}