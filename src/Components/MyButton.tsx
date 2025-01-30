import { Button, ButtonProps } from "@chakra-ui/react";


export default function MyButton({ children, ...styleProps }: ButtonProps) {
  return (
    <Button
      width={"174px"}
      _hover={{ backgroundColor: "#D64B14" }}
      bgColor={"#EC622C"}
      color={"White"}
      fontWeight={"700"}
      {...styleProps}
    >
      {children}
    </Button>
  )
}


