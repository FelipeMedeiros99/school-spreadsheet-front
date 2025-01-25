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
      <Box >
        <Heading as="h1">Alunos</Heading>
        <HomeButton>Criar Registro</HomeButton>
      </Box>

      <StudentsTable>

      </StudentsTable>

    </ Box>
  )
}