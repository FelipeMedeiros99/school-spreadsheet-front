import { Box, BoxProps, Button, ButtonProps } from "@chakra-ui/react";


export function Form({ children, ...styleProps }: BoxProps) {
  return (
    <Box {...styleProps} display={"flex"} flexDir={{base: "column", md: "row"}}  width="100%" height="100%">
      <Box width="100%" height="100%" bgColor="cyan" display={{base: "none", md:"flex"}} bg={"#EC622C"}></Box>
      <Box width="100%" height="100%" >
        {children}
      </Box>
    </Box>
  );
}


export function SubmitButton({children, ...styleProps}: ButtonProps){
  return(
    <Button {...styleProps} bgColor={"#EC622C"} color={"White"} fontWeight={"700"}>{children}</Button>
  )
}
