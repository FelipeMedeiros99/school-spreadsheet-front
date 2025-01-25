import { Button, ButtonProps } from "@chakra-ui/react";

export function HomeButton({ children, ...props}: ButtonProps){

  return(
    <Button _hover={{bgColor: "#D64B14"}} bgColor={"#EC622C"} color={"white"} {...props}>{children}</Button>
  )

}