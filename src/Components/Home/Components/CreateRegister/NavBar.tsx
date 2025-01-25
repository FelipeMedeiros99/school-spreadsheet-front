import { Box, Heading, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function NavBar(){
  return(
    <Box position={"relative"} bgColor={"cyan"} height={"100%"} maxW={"312px"}>
      <Box>
        <Heading>CODETECH</Heading>
        <Text>desenvolvimento de sistemas</Text>
      </Box>

      <Box as="nav">
        <Link to="/home">Alunos</Link>
      </Box>

      <Text position="fixed" bottom={"43px"}>desenvolvido por Felipe Medeiros, Codetech</Text>
    </Box>
  )
}