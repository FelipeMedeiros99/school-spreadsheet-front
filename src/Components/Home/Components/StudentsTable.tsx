import { Box, Table, For, VStack, HStack } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../../components/ui/pagination"
// /components/ui/pagination

import { PagesData, StudentData } from "..";
import ErrorAlert from "../../ErrorAlert";
import { getStudents } from "../../../config";
import { ErrorData } from "@/Components/CredentialsPage/SignIn";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

interface StudentsTableProps{
  studentData: StudentData[];
  setStudentData: (newStudentData: StudentData[])=>void;
  pagesData: PagesData;
  setPagesData: (newPage: PagesData)=>void;
  token: string
}


//TODO: valid with empty studentData

export default function StudentsTable({studentData, setStudentData, pagesData, setPagesData, token}: StudentsTableProps) {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [alertData, setAlertData] = useState<ErrorData>({title: "", description: "", status: "error"})
  

  function changePage(operation: "next" | "prev"){
    if(operation==="next"){
      setPagesData({...pagesData, page: pagesData.page+1})
    }
    if(operation==="prev"){
      setPagesData({...pagesData, page: pagesData.page-1})
    }
  }

  function changeAlertVisibility(){
    setAlertBoxVisibility(true);
    setTimeout(()=>{setAlertBoxVisibility(false)}, 5000);
  }


  async function navigationTable(operation: "next" | "prev"){
    changePage(operation)
    const response = await getStudents(pagesData.page, token)
    if(response.status !== 200){
      changeAlertVisibility()
      setAlertData({...alertData, title: "Atenção!", description: response?.data || "Erro ao buscar estudantes"})
      return
    }
    setStudentData(response.data)

  }

  return (
    <VStack padding={{ base: "0px 20px 20px 20px", md: "0px 66px 43px 66px" }} width={"100%"}>
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertData={alertData} initialPosition={0}/>}
      </AnimatePresence>

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
      <PaginationRoot count={10} pageSize={2} page={pagesData.page+1}>
        <HStack wrap="wrap" >
          <PaginationPrevTrigger onClick={()=>navigationTable("prev")} color="#D64B14"/>
          <PaginationItems color="#D64B14"/>
          <PaginationNextTrigger onClick={()=>navigationTable("next")} color="#D64B14"/>
        </HStack>
      </PaginationRoot>

    </VStack>
  )
}