import { Box, Heading, Input } from "@chakra-ui/react";

import { Field } from "../../../components/ui/field";
import MyButton from "../../MyButton";


export default function Register() {
  return (
    <Box w={"100%"} h={"100%"} display={"flex"} flexDir={"column"}>
      <Box borderBottom={"solid 1px #BBBBBB"} height={"70px"} />
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "40px 66px 40px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0" }}>Alunos</Heading>
        <MyButton >Voltar</MyButton>
      </Box>

      <Box as="form" display={"flex"} flexDir={"column"} alignItems={"left"} height={"100%"} margin={{ base: "20px 20px 20px 20px", md: "0px 66px 78px 66px" }} padding={{base: "20px 20px 20px 20px", lg: "70px 0 0 43px"}} border={"solid 1px #DDDDDD"}>
        <Box display={{ xl: "flex" }} flexDirection={{base:"column", lg:"row"}} w={"100%"}>
          <Field label="nome" w={{base: "auto", lg: "547px"}} marginRight={{base: "0", lg: "32px"}} maxW={"547px"} required >
            <Input variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>

          <Field label="idade" required w={{ base: "auto", xl:"153px"}} maxW={"547px"} marginTop={{base:"24px", xl: "0"}}>
            <Input variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>
        </Box>

        <Field label="turma" w={{base:"auto", md:"547px"}}  required maxW={"547px"} marginTop={"24px"} width="100%" display={"flex"} justifyContent={"left"}>
          <Input variant="subtle" backgroundColor={"#EEEEEE"} />
        </Field>


        <MyButton marginTop={"39px"}>Salvar</MyButton>

      </Box>

    </Box>
  )
}