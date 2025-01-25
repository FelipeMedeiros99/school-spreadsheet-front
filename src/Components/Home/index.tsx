import { Box, Heading, HStack, Button } from "@chakra-ui/react"  

import Header  from "./Header"
import students from "../../data"
import { HomeButton } from "./Button"

export default function Home(){
  return(
    <Box >
      <Header />
      <Box >
        <Heading as="h1">Alunos</Heading>
        <HomeButton >Criar Registro</HomeButton>
      </Box>


    </ Box>
  )
}