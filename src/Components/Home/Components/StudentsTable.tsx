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
import { deleteStudentApi, getQtStudents, getStudents } from "../../../config";
import { ErrorData } from "@/Components/CredentialsPage/SignIn";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface StudentsTableProps {
  studentData: StudentData[];
  setStudentData: (newStudentData: StudentData[]) => void;
  pagesData: PagesData;
  setPagesData: (newPage: PagesData) => void;
  token: string
}


//TODO: valid with empty studentData

export default function StudentsTable({ studentData, setStudentData, pagesData, setPagesData, token }: StudentsTableProps) {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [alertData, setAlertData] = useState<ErrorData>({ title: "", description: "", status: "error" })
  const [deleteEffectKey, setDeleteEffectKey ] = useState<boolean>(true)
  const navigate = useNavigate()

  function changeAlertVisibility() {
    setAlertBoxVisibility(true);
    setTimeout(() => { setAlertBoxVisibility(false) }, 5000);
  }

  async function deleteStudent(id: number) {
    const response = await deleteStudentApi(token, id)
    console.log()
    if (response.status !== 200) {
      if(response.data !== "Token expirou, faça login novamente!"){
        changeAlertVisibility()
        setAlertData({ ...alertData, title: "Atenção!", description: response?.data || "Erro ao deletar estudante" })
      }
      if (response?.data === "Token expirou, faça login novamente!") {
        setTimeout(() => navigate("/sign-in"), 3000)
      }
      return
    }
    setPagesData({...pagesData})
    setDeleteEffectKey(!deleteEffectKey)
    changeAlertVisibility()
    setAlertData({ ...alertData, title: "Atenção!", description: "Estudante deletado com sucesso", status: "success"})
    
  }


  useEffect(() => {
    (async () => {
      const response = await getStudents(pagesData.page, token)
      if (response.status !== 200) {
        if(response.data !== "Token expirou, faça login novamente!"){
          changeAlertVisibility()
          setAlertData({ ...alertData, title: "Atenção!", description: response?.data || "Erro ao buscar estudantes" })
        }
        if (response?.data === "Token expirou, faça login novamente!") {
          setTimeout(() => navigate("/sign-in"), 3000)
        }
        return
      }
      setStudentData(response.data)
    })()
  }, [pagesData])


  useEffect(()=>{
    (async()=>{
      const response = await getQtStudents(token)
      if (response?.status !== 200) {
        if(response.data !== "Token expirou, faça login novamente!"){
          changeAlertVisibility()
          setAlertData({ ...alertData, title: "Atenção!", description: response?.data || "Erro ao buscar estudantes" })
        }
        setTimeout(()=>navigate("/sign-in"), 3000)
      }else{
        setPagesData({
          ...pagesData, 
          qtPage: Math.ceil(response?.data?.quantityStudents/10)
        })
      }
    })()
  }, [deleteEffectKey])


  return (
    <VStack padding={{ base: "0px 20px 20px 20px", md: "0px 66px 43px 66px" }} width={"100%"}>
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertData={alertData} initialPosition={-100} />}
      </AnimatePresence>

      <Table.Root width={"100%"}>
        <Table.Header>
          <Table.Row justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
            <For each={["nome", "idade", "turma", "deletar"]}>
              {(title) => (
                <Table.ColumnHeader key={title} paddingLeft={{ base: "10px", md: title === "nome" ? "30px" : "10px" }} textAlign={title === "nome" ? "left" : "center"} verticalAlign={"middle"}>{title}</Table.ColumnHeader>
              )}
            </For>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {studentData.map((student) => (
            <Table.Row _hover={{ bgColor: "#f7f7f7" }} key={student.id} bgColor={"white"} color={"black"} alignItems={"center"} justifyContent={"space-around"} borderBottom={"solid 1px #0000001f"}>
              <For each={["name", "age", "class"]}>
                {(key) => (
                  <Table.Cell key={key} paddingLeft={{ base: "10px", md: key === "name" ? "30px" : "10px", }} textAlign={key === "name" ? "left" : "center"}>{student[key]}</Table.Cell>
                )}
              </For>
              <Table.Cell display={"flex"} textAlign={"center"} justifyContent={"center"}>
                <Box _hover={{ cursor: "pointer" }} onClick={async () => { await deleteStudent(student.id) }}>
                  <FaRegTrashAlt />
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