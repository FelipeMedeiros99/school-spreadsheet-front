import { Button, ButtonProps } from "@chakra-ui/react";


export default function SubmitButton({children, ...styleProps}: ButtonProps){
  return(
    <Button _hover={{backgroundColor: "#D64B14"}} w={"100%"} marginTop={"16px"} {...styleProps} bgColor={"#EC622C"} color={"White"} fontWeight={"700"}>{children}</Button>
  )
}


