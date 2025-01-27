import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Header  from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";

import "./index.css";
import MyButton from "../MyButton";
import { useState } from "react";



export default function Home(){
  const [studentsData, setStudentsData ] = useState([])
  const [page, setPage] = useState(0)
  const navigate = useNavigate()

  
  
  
  return(
    <VStack>
      <Header />
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{base: "20px 20px 20px 20px", md:"43px 66px 43px 66px"}}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{base: "0", md: "30px"}}>Alunos</Heading>
        <MyButton onClick={()=>navigate("/new-register")}>Criar Registro</MyButton>
      </Box>

      <StudentsTable />

    </ VStack>
  )
}