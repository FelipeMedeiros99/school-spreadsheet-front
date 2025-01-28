import { Box, Text } from "@chakra-ui/react";
export default function BottomBar() {
  return (
    <Box as="nav" position={"fixed"} bottom={"0"} w={"100%"} backgroundColor={"#D64B14"} height={"70px"} zIndex={"4"} display={{ base: "flex", md: "none" }} flexDir={"column"} alignItems={"center"} justifyContent={"space-around"} color={'white'} fontWeight={"400"}>
      <Text textAlign={"center"} position="absolute" fontWeight={"300"} fontSize={"12px"} w={"100%"}>desenvolvido por <Text as="span" fontWeight={"600"}>Felipe Medeiros</Text>, Codetech</Text>
    </Box>
  )
}