import { Box, Table, For, VStack, HStack } from "@chakra-ui/react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../../components/ui/pagination";

import { PagesData, StudentData } from "..";
import ErrorAlert from "../../ErrorAlert";
import { deleteStudentApi, getQtStudents, getStudents } from "../../../config";
import { AlertMessageData, CredentialUser } from "../../../App";
import { StudentDataEdit } from "../../../Components/EditStudent";


interface StudentsTableProps {
  studentData: StudentData[];
  setStudentData: (newStudentData: StudentData[]) => void;
  pagesData: PagesData;
  setPagesData: (newPage: PagesData) => void;
  credentialUser: CredentialUser;
  alertMessageData: AlertMessageData;
  setAlertMessageData: (newAlert: AlertMessageData) => void;
  changeAlertVisibility: any
}


//TODO: valid with empty studentData

export default function StudentsTable({ 
  studentData, 
  setStudentData, 
  pagesData, 
  setPagesData, 
  credentialUser, 
  alertMessageData, 
  setAlertMessageData, 
  changeAlertVisibility,
  setStudentDataEdit
}: StudentsTableProps & {setStudentDataEdit: (newData: StudentDataEdit) => void;}) {
  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const navigate = useNavigate();
  const qtRenderizatioin = useRef(0)

  qtRenderizatioin.current = qtRenderizatioin.current + 1
  console.log(qtRenderizatioin)

  async function deleteStudent(id: number) {
    const response = await deleteStudentApi(credentialUser, id)
    if (response?.status !== 200) {
      if (response?.data !== "Token expirou, faça login novamente!") {
        changeAlertVisibility(setAlertBoxVisibility)
        setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao deletar estudante" })
      }
      if (response?.data === "Token expirou, faça login novamente!") {
        setTimeout(() => navigate("/sign-in"), 3000)
      }
      return
    }
    setPagesData({ ...pagesData })
    changeAlertVisibility(setAlertBoxVisibility)
    setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: "Estudante deletado com sucesso", status: "success" })
  }

  async function editStudent(studentData: any) {
    setStudentDataEdit(studentData)
    navigate("/edit-student")
  }

  useEffect(() => {
    (async () => {
      const response = await getStudents(pagesData.page, credentialUser)
      if (response?.status !== 200) {
        if (response?.data !== "Token expirou, faça login novamente!") {
          changeAlertVisibility(setAlertBoxVisibility)
          setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao buscar estudantes" })
        }
        if (response?.data === "Token expirou, faça login novamente!") {
          setTimeout(() => navigate("/sign-in"), 3000)
        }
        return
      }
      setStudentData(response.data)
    })()
  }, [pagesData, credentialUser, alertMessageData, changeAlertVisibility, navigate, setAlertMessageData, setStudentData])


  useEffect(() => {
    (async () => {
      const response = await getQtStudents(credentialUser)
      if (response?.status !== 200) {
        if (response?.data !== "Token expirou, faça login novamente!") {
          changeAlertVisibility(setAlertBoxVisibility)
          setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao buscar estudantes" })
        }
        setTimeout(() => navigate("/sign-in"), 3000)
        return
      }  

      const pages = Math.ceil(response?.data?.quantityStudents / 10)
      if(pagesData.qtPage !== pages){
        setPagesData({
          ...pagesData,
          qtPage: pages
        })
      }
      
    })()
  }, [alertMessageData, changeAlertVisibility, credentialUser, navigate, pagesData, setAlertMessageData, setPagesData])

  return (
    <VStack padding={{ base: "0px 20px 20px 20px", md: "0px 66px 43px 66px" }} width={"100%"}>
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertMessageData={alertMessageData} initialPosition={-100} setVisibility={setAlertBoxVisibility} />}
      </AnimatePresence>

      <Table.Root width={"100%"}>
        <Table.Header>
          <Table.Row justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
            <For each={["nome", "idade", "turma", "editar", "deletar"]}>
              {(title) => (
                <Table.ColumnHeader key={title} paddingLeft={{ base: "10px", md: title === "nome" ? "30px" : "10px" }} textAlign={title === "nome" ? "left" : "center"} verticalAlign={"middle"}>{title}</Table.ColumnHeader>
              )}
            </For>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {studentData?.map((student) => (
            <Table.Row _hover={{ bgColor: "#f7f7f7" }} key={student?.id} bgColor={"white"} color={"black"} alignItems={"center"} justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
              <For each={["name", "age", "class"]}>
                {(key) => (
                  <Table.Cell key={key} paddingLeft={{ base: "10px", md: key === "name" ? "30px" : "10px", }} textAlign={key === "name" ? "left" : "center"}>{student?.[key]}</Table.Cell>
                )}
              </For>
              
              <Table.Cell paddingLeft={"10px"} textAlign={"center"}>
                <Box width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} _hover={{ cursor: "pointer" }} onClick={async () => { await editStudent(student) }}>
                  <FaEdit />
                </Box>
              </Table.Cell>

              <Table.Cell paddingLeft={"10px"} textAlign={"center"}>
                <Box width={"100%"} height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} _hover={{ cursor: "pointer" }} onClick={async () => { await deleteStudent(student?.id) }}>
                  <FaRegTrashAlt display={"flex"}/>
                </Box>
              </Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <PaginationRoot count={pagesData.qtPage * 10} pageSize={10} defaultPage={1} onPageChange={(e) => setPagesData({ ...pagesData, page: e.page })}>
        <HStack wrap="wrap" >
          <PaginationPrevTrigger color="#D64B14" />
          <PaginationItems color="#D64B14" />
          <PaginationNextTrigger color="#D64B14" />
        </HStack>
      </PaginationRoot>

    </VStack>
  )
}