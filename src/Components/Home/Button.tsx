import { Button, ButtonProps } from "@chakra-ui/react";

export function HomeButton({ children, ...props}: ButtonProps){

  return(
    <Button bgColor={"#EC622C"} color={"white"} {...props}>{children}</Button>
  )

}