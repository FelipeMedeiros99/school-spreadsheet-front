import { Box, Heading, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function NavBar(){
  return(
    <Box position={"relative"} bgColor={"#D64B14"} height={"100%"} width={"30%"} maxW={"380px"}>
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