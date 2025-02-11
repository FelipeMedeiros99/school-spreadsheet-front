import { Heading, HStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack
      w="100%"
      as="header"
      bgColor="#D64B14"
      height="69px"
      paddingLeft={{ md: "50px" }}
      display="flex"
      justifyContent={{ base: "center", md: "left" }}
    >
      <Heading fontSize={{ base: "36px" }} fontWeight="800" color="white">
        CODETECH
      </Heading>
    </HStack>
  );
}
