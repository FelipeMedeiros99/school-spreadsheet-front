import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TailSpin } from "react-loader-spinner";
import { useForm } from "react-hook-form";

import Header from "./Components/Header";
import StudentsTable from "./Components/StudentsTable";
import "./index.css";
import MyButton from "../MyButton";
import { getQtStudents, getStudents } from "../../config";
import { CredentialUserProps } from "../CredentialsPage/SignIn";
import ErrorAlert from "../ErrorAlert";
import { StudentDataEdit } from "../EditStudent";
import FilterSearch from "./Components/FilterSearch";

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

// TODO: SPIN WHILE LOADING TABLE DATA

export default function Home({
  credentialUser,
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
  const [spinnerOn, setSpinnerOn] = useState(false)

  
  async function findFilterStudents(data: FilterFindInterface) {
    setFilter(data.filter)
    const response = await getStudents(pagesData.page, credentialUser, data.filter)
    const pages = await getQtStudents(credentialUser, data.filter)

    if (response?.status === 200 && pages?.status === 200) {
      setStudentsData(response?.data || [])
      const pages = Math.ceil(response?.data?.quantityStudents / 10)
      if (pagesData.qtPage !== pages) {
        setPagesData({
          ...pagesData,
          qtPage: pages
        })
      }
      return
    }

    changeAlertVisibility(setAlertBoxVisibility)
    setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao buscar estudante", status: "error" })

    if (response?.data === "Token expirou, faça login novamente!") {
      setTimeout(() => navigate("/sign-in"), 3000)
    }
  }
  
  const ativeMessageAlertAndRedirect = useCallback((response: any)=>{
    if(!alertBoxVisibility){
      changeAlertVisibility(setAlertBoxVisibility)
      setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao buscar estudantes", status: "error" })
      if (response?.data === "Token expirou, faça login novamente!") {
        setTimeout(() => navigate("/sign-in"), 3000)
      }
    }
  }, [alertMessageData, changeAlertVisibility, navigate, setAlertMessageData, alertBoxVisibility])
  
  useEffect(() => {
    (async () => {
      setSpinnerOn(true)
      const stundentResponse = await getStudents(pagesData.page, credentialUser, filter)
      if(stundentResponse.status===200){
        setStudentsData(stundentResponse.data)
      }else{
        ativeMessageAlertAndRedirect(stundentResponse)
      }

      const qtStudentsResponse = await getQtStudents(credentialUser, filter)

      if(qtStudentsResponse?.status === 200){
        const pages = Math.ceil(qtStudentsResponse?.data?.quantityStudents / 10)
        if (pagesData.qtPage !== pages) {
          setPagesData({
            ...pagesData,
            qtPage: pages
          })
        }
      }else{
        ativeMessageAlertAndRedirect(qtStudentsResponse)
      }
      setSpinnerOn(false)
      
    })()
  }, [pagesData, credentialUser, filter, setStudentsData, ativeMessageAlertAndRedirect])


  return (
    <VStack>
      <Header />
      <AnimatePresence>
        {alertBoxVisibility &&
          <ErrorAlert
            alertMessageData={alertMessageData}
            initialPosition={0}
            setVisibility={setAlertBoxVisibility}
          />
        }
      </AnimatePresence>

      <Box
        w={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={{ base: "20px 20px 0px 20px", md: "43px 66px 0px 66px" }}
      >
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0", md: "30px" }}>
          Alunos
        </Heading>
        <MyButton onClick={() => navigate("/new-register")}>Criar Registro</MyButton>
      </Box>


      <FilterSearch
        setFilter={setFilter}
        onSubmit={onSubmit}
        register={register}
        resetInput={reset}
      />


      {
        spinnerOn ?
          <Box 
            height="100%"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingTop="100px"
          >
            <TailSpin
                visible={true}
                height="150"
                width="150"
                color="#EC622C"
                ariaLabel="tail-spin-loading"
                wrapperStyle={{}}
                wrapperClass=""
              /> 
          </Box>:

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
      }

    </ VStack>
  )
}