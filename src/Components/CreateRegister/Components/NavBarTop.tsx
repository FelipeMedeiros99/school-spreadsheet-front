import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBarTop(){
  return(
    <Box as="nav" position={"absolute"} top={"0"} w={"100%"} backgroundColor={"#D64B14"} height={"90px"} zIndex={"4"} display={{base: "flex", md:"none"}} flexDir={"column"} alignItems={"center"} justifyContent={"space-around"} color={'white'} fontWeight={"400"}>
      <Text fontWeight={"700"} fontSize={"30px"}>CODETECH</Text>
      <Box justifyContent={"center"} textDecor={"underline"} _hover={{cursor: "pointer", fontWeight:"600"}}>
        <Link to="/home">Alunos</Link>
      </Box>
    </Box>
  )
}