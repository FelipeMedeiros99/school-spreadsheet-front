import { Heading, HStack } from "@chakra-ui/react"  

export default function Header(){
  return(
      <HStack as="header" bgColor={"#D64B14"} height={"69px"} paddingLeft={"50px"}>
        <Heading fontSize={{base: "36px"}} fontWeight={"800"} color={"white"}>
          CODETECH
        </Heading>
      </HStack>
  )
}