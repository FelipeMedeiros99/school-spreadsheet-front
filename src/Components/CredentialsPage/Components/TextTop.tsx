import { Heading, Text, VStack } from "@chakra-ui/react";

interface TextTopProps {
  title: string;
  subtitle: string;
}

export default function TextTop({title, subtitle}: TextTopProps){  
  return(
    <VStack gap={"8px"} >
      <Heading as="h1" fontSize={"32px"} fontWeight={"800"}>{title}</Heading>
      <Text fontSize={"14px"}>{subtitle}</Text>
    </VStack>
  )
}