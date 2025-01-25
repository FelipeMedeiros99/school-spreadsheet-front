import { Box, Table, For, VStack, Button } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";


import students from "../../data";

export default function StudentsTable() {
  return (
    <VStack padding={{ base: "20px 20px 20px 20px", md: "43px 66px 43px 66px" }}>
      <Table.Root maxW={"1310px"}>
        <Table.Header>
          <Table.Row justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
            <For each={["nome", "idade", "turma", "deletar"]}>
              {(title) => (
                <Table.ColumnHeader key={title} textAlign={"center"} >{title}</Table.ColumnHeader>
              )}
            </For>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <Table.Row key={student.id} bgColor={"white"} color={"black"} alignItems={"center"} justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
              <For each={["name", "age", "class"]}>
                {(key)=>(
                  <Table.Cell key={key} textAlign={"center"} >{student[key]}</Table.Cell>
                )}
              </For>
              <Table.Cell display={"flex"} textAlign={"center"} justifyContent={"center"}>
                <FaRegTrashAlt />
              </Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>

      </Table.Root>

    </VStack>
  )
}