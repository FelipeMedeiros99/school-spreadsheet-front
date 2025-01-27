import { Box, Table, For, VStack } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";


import students from "../../../data";
import { StudentData } from "..";

export default function StudentsTable({studentData}: {studentData: StudentData[]}) {
  return (
    <VStack padding={{ base: "0px 20px 20px 20px", md: "0px 66px 43px 66px" }} width={"100%"}>
      <Table.Root width={"100%"}>
        <Table.Header>
          <Table.Row justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
            <For each={["nome", "idade", "turma", "deletar"]}>
              {(title) => (
                <Table.ColumnHeader key={title} textAlign={"center"} verticalAlign={"middle"}>{title}</Table.ColumnHeader>
              )}
            </For>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {studentData.map((student) => (
            <Table.Row _hover={{bgColor: "#f7f7f7"}} key={student.id} bgColor={"white"} color={"black"} alignItems={"center"} justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
              <For each={["name", "age", "class"]}>
                {(key)=>(
                  <Table.Cell key={key} textAlign={"center"} >{student[key]}</Table.Cell>
                )}
              </For>
              <Table.Cell display={"flex"} textAlign={"center"} justifyContent={"center"}>
                <Box _hover={{cursor:"pointer"}}>
                  <FaRegTrashAlt />
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>

      </Table.Root>

    </VStack>
  )
}