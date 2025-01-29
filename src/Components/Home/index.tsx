import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";

import "./index.css";
import MyButton from "../MyButton";
import { getQtStudents, getStudents } from "../../config";
import { CredentialUserProps } from "../CredentialsPage/SignIn";
import ErrorAlert from "../ErrorAlert";
import { StudentDataEdit } from "../EditStudent";
import FilterSearch from "./Components/FilterSearch";
import { useForm } from "react-hook-form";

export interface FilterFindInterface {
  filter: string
}

export interface StudentData {
  age: number;
  class: string;
  createdAt: string;
  id: number;
  name: string;
  userId: number
}

export interface PagesData {
  qtPage: number;
  page: number
}

// TODO: ADD SEARCH INPUT

export default function Home({
  credentialUser,
  setCredentialUser,
  alertMessageData,
  setAlertMessageData,
  changeAlertVisibility,
  setStudentDataEdit,
}: CredentialUserProps & { setStudentDataEdit: (newData: StudentDataEdit) => void; }) {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [studentsData, setStudentsData] = useState<StudentData[]>([])
  const [pagesData, setPagesData] = useState<PagesData>({ qtPage: 0, page: 1 })
  const [filter, setFilter] = useState("")
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm<FilterFindInterface>()
  const onSubmit = handleSubmit(async (data) => findFilterStudents(data))



  async function findFilterStudents(data: FilterFindInterface) {
    setFilter(data.filter)

    const response = await getStudents(pagesData.page, credentialUser, data.filter)
    const pages = await getQtStudents(credentialUser, data.filter)

    if (response?.status === 200 && pages?.status === 200) {
      setStudentsData(response?.data)
      setPagesData({ ...pagesData, qtPage: Math.ceil(pages?.data?.quantityStudents / 10) })
      return
    }
    changeAlertVisibility(setAlertBoxVisibility)
    setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao buscar estudante" })

    if (response?.data === "Token expirou, faça login novamente!") {
      setTimeout(() => navigate("/sign-in"), 3000)
    }
  }

  useEffect(() => {
    (async () => {
      const response = await getStudents(pagesData?.page, credentialUser)
      if (response === undefined) {
        changeAlertVisibility(setAlertBoxVisibility)
        setAlertMessageData({ ...alertMessageData, description: "Erro ao conectar com o servidor", status: "error", title: "Atenção" })
        setTimeout(() => navigate("/sign-in"), 3000)
        return
      }
      if (response?.status !== 200) {
        changeAlertVisibility(setAlertBoxVisibility)
        setAlertMessageData({ ...alertMessageData, description: response?.data || "Erro ao buscar alunos", status: "error", title: "Atenção" })
        setTimeout(() => navigate("/sign-in"), 3000)
      } else {
        setStudentsData(response.data)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await getQtStudents(credentialUser)
      if (response === undefined) {
        setTimeout(() => navigate("/sign-in"), 3000)
        return
      }
      if (response?.status !== 200) {
        changeAlertVisibility(setAlertBoxVisibility)
        setAlertMessageData({ ...alertMessageData, description: response?.data || "Erro ao buscar quantidade de alunos", status: "error", title: "Atenção" })
        setTimeout(() => navigate("/sign-in"), 3000)
      } else {
        setPagesData({
          ...pagesData,
          qtPage: Math.ceil(response?.data?.quantityStudents / 10)
        })
      }
    })()
  }, [])


  return (
    <VStack>
      <Header />
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertMessageData={alertMessageData} initialPosition={0} setVisibility={setAlertBoxVisibility} />}
      </AnimatePresence>
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "43px 66px 43px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0", md: "30px" }}>Alunos</Heading>
        <MyButton onClick={() => navigate("/new-register")}>Criar Registro</MyButton>
      </Box>

      <FilterSearch
        onSubmit={onSubmit}
        register={register}
        resetInput={reset}
      />

      <StudentsTable
        studentData={studentsData}
        setStudentData={setStudentsData}
        pagesData={pagesData}
        setPagesData={setPagesData}
        credentialUser={credentialUser}
        alertMessageData={alertMessageData}
        setAlertMessageData={setAlertMessageData}
        changeAlertVisibility={changeAlertVisibility}
        setStudentDataEdit={setStudentDataEdit}
        filter={filter}
      />

    </ VStack>
  )
}