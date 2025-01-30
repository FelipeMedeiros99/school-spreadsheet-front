import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function NavBarLeft() {
  return (
    <Box
      position={{ base: "absolute", md: "relative" }}
      bgColor={"#D64B14"}
      height={"100%"}
      width={"30%"}
      maxW={"380px"}
      color={"white"}
      display={{ base: "none", md: "block" }}
    >
      <VStack
        w={"100%"}
        marginTop={{ base: "30px", md: "90px" }}
      >
        <Heading
          fontWeight={"800"}
          fontSize={{ base: "20px", md: "36px" }}
        >
          CODETECH

        </Heading>
        <Text
          fontWeight={"300"}
          fontSize={"12px"}
        >
          desenvolvimento de sistemas
        </Text>
      </VStack>


      <Box
        as="nav"
        marginTop={"35px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"left"}
          height={"50px"}
          backgroundColor={"#EC622C"}
          fontWeight={"600"}
          fontSize={"18px"}
          paddingLeft={{ base: "20px", xl: "59px" }}>
          <Link
            to="/new-register">
            Alunos
          </Link>
        </Box>
      </Box>

      <Text
        textAlign={"center"}
        position="absolute"
        bottom={"43px"}
        fontWeight={"300"}
        fontSize={"12px"}
        w={"100%"}
      >
        desenvolvido por
        <Text
          as="span"
          fontWeight={"600"}
        >
          Felipe Medeiros
        </Text>
        , Codetech
      </Text>
    </Box>
  )
}