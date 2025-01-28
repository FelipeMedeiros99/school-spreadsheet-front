import { Box, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Field } from "../../../components/ui/field";
import MyButton from "../../MyButton";
import { SaveStudentData } from "../../../config";



export default function Register() {
  
  const {register, handleSubmit, formState: {errors}} = useForm<SaveStudentData>()
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data)=>createRegister(data))

  function createRegister(data: SaveStudentData){ 
    console.log(data)
  }

  return (
    <Box w={"100%"} h={"100%"} display={"flex"} flexDir={"column"}>
      <Box borderBottom={"solid 1px #BBBBBB"} height={{base: "120px", md:"70px"}} />
      <Box w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={{ base: "20px 20px 20px 20px", md: "40px 66px 40px 66px" }}>
        <Heading as="h1" fontWeight={"800"} fontSize={"24px"} marginLeft={{ base: "0" }}>Alunos</Heading>
        <MyButton onClick={()=>navigate("/home")} >Voltar</MyButton>
      </Box>

      <Box as="form" onSubmit={onSubmit} display={"flex"} flexDir={"column"} alignItems={"left"} height={"100%"} margin={{ base: "20px 20px 20px 20px", md: "0px 66px 78px 66px" }} padding={{base: "20px 20px 20px 20px", lg: "70px 0 0 43px"}} border={"solid 1px #DDDDDD"}>
        <Box display={{ xl: "flex" }} flexDirection={{base:"column", lg:"row"}} w={"100%"}>
          <Field invalid={!!errors.name} errorText={errors.name?.message} label="nome" w={{base: "auto", lg: "547px"}} marginRight={{base: "0", lg: "32px"}} maxW={"547px"} >
            <Input {...register("name", {required: "O nome é necessário"})}  variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>

          <Field invalid={!!errors.age} errorText={errors.age?.message} label="idade" w={{ base: "auto", xl:"153px"}} maxW={"547px"} marginTop={{base:"24px", xl: "0"}}>
            <Input {...register("age", {required: "A idade é necessária", valueAsNumber:true, validate: ((value)=>(value>0?true:"Digite uma idade válida"))})} variant="subtle" backgroundColor={"#EEEEEE"} />
          </Field>
        </Box>

        <Field invalid={!!errors.class} errorText={errors.class?.message} label="turma" w={{base:"auto", md:"547px"}}  maxW={"547px"} marginTop={"24px"} width="100%" display={"flex"} justifyContent={"left"}>
          <Input {...register("class", {required: "A turma é necessária"})} variant="subtle" backgroundColor={"#EEEEEE"} />
        </Field>


        <MyButton marginTop={"39px"} type="submit">Salvar</MyButton>

      </Box>

    </Box>
  )
}