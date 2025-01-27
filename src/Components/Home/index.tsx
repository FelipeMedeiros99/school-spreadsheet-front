import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";

import "./index.css";
import MyButton from "../MyButton";
import { getStudents } from "../../config";
import { ErrorData } from "../CredentialsPage/SignIn";
import ErrorAlert from "../ErrorAlert";
import { TokenProps } from "@/App";

export interface StudentData{
  age: number;
  class: string;
  createdAt: string;
  id: number;
  name: string;
  userId: number
}


export default function Home({token, setToken}: TokenProps) {
  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [alertData, setAlertData] = useState<ErrorData>({ title: "", description: "", status: "error" })
  const [studentsData, setStudentsData] = useState<StudentData[]>([])
  const [page, setPage] = useState(0)
  const navigate = useNavigate()

  function changeAlertVisibility() {
    setAlertBoxVisibility(true);
    setTimeout(() => { setAlertBoxVisibility(false) }, 5000);
  }


  useEffect(() => {
    (async () => {
      const response = await getStudents(page, token)
      if (response?.status !== 200) {
        changeAlertVisibility()
        setAlertData({...alertData, description: response?.data || "Erro ao buscar alunos", status: "error", title: "Atenção" })
        setTimeout(()=>navigate("/"), 3000)
      }else{
        setStudentsData(response.data)
      }
    })()
  }, [])


  return (
    <VStack>
      <Header />
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertData={alertData} initialPosition={0} />}
      </AnimatePresence>
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "43px 66px 43px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0", md: "30px" }}>Alunos</Heading>
        <MyButton onClick={() => navigate("/new-register")}>Criar Registro</MyButton>
      </Box>

      <StudentsTable />

    </ VStack>
  )
}