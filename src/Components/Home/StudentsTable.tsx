  import { Box, Table, For, VStack, Button } from "@chakra-ui/react";
  import { FaRegTrashAlt } from "react-icons/fa";


  import students from "../../data";

  export default function StudentsTable() {
    return (
      <VStack padding={"0 66px 0 66px"} >
        <Table.Root maxW={"1310px"}>
          <Table.Header>
            <Table.Row justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
              <Table.ColumnHeader  textAlign={"center"} >nome</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>idade</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>turma</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>deletar</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students.map((student)=>(
                <Table.Row key={student.id} bgColor={"white"} color={"black"} alignItems={"center"} justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
                  <Table.Cell textAlign={"center"} >{student.name}</Table.Cell>
                  <Table.Cell textAlign={"center"}>{student.age}</Table.Cell>
                  <Table.Cell textAlign={"center"}>{student.class}</Table.Cell>
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