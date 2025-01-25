import { Box, Heading, Input } from "@chakra-ui/react";

import { Field } from "../../../components/ui/field";
import MyButton from "../../MyButton";


export default function Register() {
  return (
    <Box w={"100%"}>
      <Box borderBottom={"solid 1px #BBBBBB"} height={"70px"} />
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "43px 66px 43px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0" }}>Alunos</Heading>
        <MyButton >Voltar</MyButton>
      </Box>

      <Box as="form">
        <Box display={{ md: "flex" }}>
          <Field label="nome" required >
            <Input variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>

          <Field label="idade" required>
            <Input variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>
        </Box>

        <Field label="turma" required>
          <Input variant="subtle" backgroundColor={"#EEEEEE"} />
        </Field>


        <MyButton>Salvar</MyButton>

      </Box>

    </Box>
  )
}