import { Box, BoxProps, Button, ButtonProps, Heading, Text , Stack, VStack, Input} from "@chakra-ui/react";

interface TextTopProps {
  title: string;
  subtitle: string;
}


export function Form({ children, ...styleProps }: BoxProps) {
  return (
    <Box display={"flex"} flexDir={{base: "column", md: "row"}}  width="100%" height="100%" position={"relative"}>
      <Box width="100%" height={{base: "100px", md:"100%" }} position={{base: "absolute", md: "relative"}} top={{base: "0", md: "auto"}} bgColor="cyan" display={{base: "block", md:"flex"}} bg={"#EC622C"}></Box>
      <Box marginTop={{base: "150px", md: "0"}} marginBottom={"50px"} as="form" width="100%" height="100%" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} {...styleProps}>
        <Stack width={"100%"} maxW={"547px"} alignItems={'center'} padding={"30px"} gap={"40px"}>
          {children}
        </Stack>
     
        <VStack as="footer" color={{base: "white", md: "black"}} justifyContent={"center"} position={"absolute"} bottom={"0"} fontWeight={"300"} fontSize={"14px"} height={"50px"} width={{base:"100%", md: "auto"}} backgroundColor={{base: "#EC622C", md: "white"}}>
          <Text >desenvolvido por <Text as="span" fontWeight={"700"}>Felipe Medeiros</Text>, Codetech</Text>
        </VStack>
      </Box>
    </Box>
  );
}


export function SubmitButton({children, ...styleProps}: ButtonProps){
  return(
    <Button w={"100%"} marginTop={"16px"} {...styleProps} bgColor={"#EC622C"} color={"White"} fontWeight={"700"}>{children}</Button>
  )
}


export function TextTop({title, subtitle}: TextTopProps){  
  return(
    <VStack gap={"8px"} >
      <Heading as="h1" fontSize={"32px"} fontWeight={"800"}>{title}</Heading>
      <Text fontSize={"14px"}>{subtitle}</Text>
    </VStack>
  )
}