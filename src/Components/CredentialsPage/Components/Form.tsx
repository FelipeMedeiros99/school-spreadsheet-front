import { Box, BoxProps, Text , Stack, VStack } from "@chakra-ui/react";


export default function Form({ children, ...styleProps }: BoxProps) {
  return (
    <Box display={"flex"} flexDir={{base: "column", md: "row"}}  width="100%" height="100%" position={"relative"}>
      <Box width="100%" height={{base: "100px", md:"100%" }} position={{base: "absolute", md: "relative"}} top={{base: "0", md: "auto"}} bgColor="cyan" display={{base: "block", md:"flex"}} bg={"#EC622C"}></Box>
      <Box marginTop={{base: "150px", md: "0"}} marginBottom={"50px"} as="form" width="100%" height="100%" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} {...styleProps}>
        <Stack width={"100%"} maxW={"547px"} alignItems={'center'} padding={"30px"} gap={"40px"}>
          {children}
        </Stack>
     
        <VStack as="footer" color={{base: "white", md: "black"}} justifyContent={"center"} position={"fixed"} bottom={"0"} fontWeight={"300"} fontSize={"14px"} height={"50px"} width={{base:"100%", md: "auto"}} backgroundColor={{base: "#EC622C", md: "white"}}>
          <Text >desenvolvido por <Text as="span" fontWeight={"700"}>Felipe Medeiros</Text>, Codetech</Text>
        </VStack>
      </Box>
    </Box>
  );
}
