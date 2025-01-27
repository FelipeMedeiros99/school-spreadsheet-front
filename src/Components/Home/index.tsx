import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header  from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";

import "./index.css";
import MyButton from "../MyButton";
import { getStudents } from "../../config";
import { ErrorData } from "../CredentialsPage/SignIn";
import ErrorAlert from "../ErrorAlert";



export default function Home(){
  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [alertData, setAlertData] = useState <ErrorData>({title: "", description: "", status: "error"})
  const [studentsData, setStudentsData ] = useState([])
  const [page, setPage] = useState(0)
  const navigate = useNavigate()

  function changeAlertVisibility(){
    setAlertBoxVisibility(true);
    setTimeout(()=>{setAlertBoxVisibility(false)}, 5000);
  }


  useEffect(()=>{
    (async()=>{
      const response = await getStudents(page)
      console.log(response)
      if(response?.status !==201){
        console.log("fui chamado")
        changeAlertVisibility()
        setAlertData({description: "Erro ao buscar alunos", status: "error", title: "Atenção"})
      }
    })()
  }, [])
  
  
  return(
    <VStack>
      <Header />
      <ErrorAlert alertData={alertData} initialPosition={-250}/>
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{base: "20px 20px 20px 20px", md:"43px 66px 43px 66px"}}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{base: "0", md: "30px"}}>Alunos</Heading>
        <MyButton onClick={()=>navigate("/new-register")}>Criar Registro</MyButton>
      </Box>

      <StudentsTable />

    </ VStack>
  )
}