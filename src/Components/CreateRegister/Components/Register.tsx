import { Box, Heading, Input, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { Oval } from "react-loader-spinner";

import { Field } from "../../../components/ui/field";
import MyButton from "../../MyButton";
import { addStudentApi, SaveStudentData } from "../../../config";

import { CredentialUserProps, ErrorData } from "../../CredentialsPage/SignIn";
import { useState } from "react";
import ErrorAlert from "../../ErrorAlert";



export default function Register({ credentialUser, setCredentialUser, alertMessageData, setAlertMessageData, changeAlertVisibility }: CredentialUserProps) {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [spinnerAtive, setSpinnerAtive] = useState(false)
  const { register, reset, handleSubmit, formState: { errors } } = useForm<SaveStudentData>()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => await createRegister(data))

  async function createRegister(data: SaveStudentData) {
    setSpinnerAtive(true)
    const response = await addStudentApi(credentialUser, data)
    if (response.status !== 201) {
      changeAlertVisibility(setAlertBoxVisibility)
      setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao adicionar estudante" })
      if (response?.data === "Token expirou, faça login novamente!") {
        setTimeout(() => navigate("/sign-in"), 3000)
      }
      setSpinnerAtive(false)
      return
    }
    changeAlertVisibility(setAlertBoxVisibility)
    setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: "Estudante adicionado com sucesso", status: "success" })
    reset()
    setSpinnerAtive(false)

  }

  return (
    <Box w={"100%"} h={"100%"} display={"flex"} flexDir={"column"}>
      <AnimatePresence>
        {alertBoxVisibility && <ErrorAlert alertMessageData={alertMessageData} initialPosition={100} setVisibility={setAlertBoxVisibility} />}
      </AnimatePresence>
      <Box borderBottom={"solid 1px #BBBBBB"} height={{ base: "120px", md: "70px" }} />
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "40px 66px 40px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0" }}>Alunos</Heading>
        <MyButton onClick={() => navigate("/home")} >Voltar</MyButton>
      </Box>

      <Box as="form" onSubmit={onSubmit} display={"flex"} flexDir={"column"} alignItems={"left"} height={"100%"} margin={{ base: "20px 20px 20px 20px", md: "0px 66px 78px 66px" }} padding={{ base: "20px 20px 20px 20px", lg: "70px 0 0 43px" }} border={"solid 1px #DDDDDD"}>
        <Box display={{ xl: "flex" }} flexDirection={{ base: "column", lg: "row" }} w={"100%"}>
          <Field invalid={!!errors.name} errorText={errors.name?.message} label="nome" w={{ base: "auto", lg: "547px" }} marginRight={{ base: "0", lg: "32px" }} maxW={"547px"} >
            <Input disabled={spinnerAtive} {...register("name", { required: "O nome é necessário" })} variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>

          <Field invalid={!!errors.age} errorText={errors.age?.message} label="idade" w={{ base: "auto", xl: "153px" }} maxW={"547px"} marginTop={{ base: "24px", xl: "0" }}>
            <Input disabled={spinnerAtive} {...register("age", { required: "A idade é necessária", valueAsNumber: true, validate: ((value) => (value > 0 ? true : "Digite uma idade válida")) })} variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>
        </Box>

        <Field invalid={!!errors.class} errorText={errors.class?.message} label="turma" w={{ base: "auto", md: "547px" }} maxW={"547px"} marginTop={"24px"} width="100%" display={"flex"} justifyContent={"left"}>
          <Input disabled={spinnerAtive} {...register("class", { required: "A turma é necessária", maxLength: { value: 10, message: "A turma deve possuir, no máximo, 10 caracteres!" } })} variant="subtle" backgroundColor={"#EEEEEE"} />
        </Field>


        <MyButton disabled={spinnerAtive} marginTop={"39px"} type="submit">{spinnerAtive ?

          <Oval
            visible={true}
            height="80px"
            width="80px"
            color="white"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          : "Salvar"}
        </MyButton>

      </Box>

    </Box>
  )
}