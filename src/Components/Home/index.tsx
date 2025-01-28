import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";

import "./index.css";
import MyButton from "../MyButton";
import { getQtStudents, getStudents } from "../../config";
import { CredentialUserProps, ErrorData } from "../CredentialsPage/SignIn";
import ErrorAlert from "../ErrorAlert";

export interface StudentData{
  age: number;
  class: string;
  createdAt: string;
  id: number;
  name: string;
  userId: number
}

export interface PagesData{
  qtPage: number;
  page: number
}

// TODO: ADD LOADING SPIN
// TODO: ADD SEARCH INPUT
export default function Home({credentialUser, setCredentialUser, alertMessageData, setAlertMessageData, changeAlertVisibility}: CredentialUserProps) {
  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [studentsData, setStudentsData] = useState<StudentData[]>([])
  const [pagesData, setPagesData] = useState<PagesData>({qtPage: 0, page: 1})
  const navigate = useNavigate()
  
  
  useEffect(() => {
    (async () => {
      const response = await getStudents(pagesData.page, credentialUser)
      if (response?.status !== 200) {
        changeAlertVisibility(setAlertBoxVisibility)
        setAlertMessageData({...alertMessageData, description: response?.data || "Erro ao buscar alunos", status: "error", title: "Atenção" })
        setTimeout(()=>navigate("/sign-in"), 3000)
      }else{
        setStudentsData(response.data)
      }
    })()
  }, [])

  useEffect(()=>{
    (async()=>{
      const response = await getQtStudents(credentialUser)
      if (response?.status !== 200) {
        changeAlertVisibility(setAlertBoxVisibility)
        setAlertMessageData({...alertMessageData, description: response?.data || "Erro ao buscar quantidade de alunos", status: "error", title: "Atenção" })
        setTimeout(()=>navigate("/sign-in"), 3000)
      }else{
        setPagesData({
          ...pagesData, 
          qtPage: Math.ceil(response?.data?.quantityStudents/10)
        })
      }
    })()
  }, [])


  return (
    <VStack>
      <Header />
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertMessageData={alertMessageData} initialPosition={0} setVisibility={setAlertBoxVisibility}/>}
      </AnimatePresence>
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "43px 66px 43px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0", md: "30px" }}>Alunos</Heading>
        <MyButton onClick={() => navigate("/new-register")}>Criar Registro</MyButton>
      </Box>

      <StudentsTable 
        studentData={studentsData} 
        setStudentData={setStudentsData} 
        pagesData={pagesData} 
        setPagesData={setPagesData} 
        credentialUser={credentialUser} 
        alertMessageData={alertMessageData} 
        setAlertMessageData={setAlertMessageData}
        changeAlertVisibility={changeAlertVisibility}
        />

    </ VStack>
  )
}