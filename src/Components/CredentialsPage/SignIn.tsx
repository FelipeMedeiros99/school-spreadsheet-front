import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";
import { useState } from "react";

import Form from "./Components/Form";
import TextTop from "./Components/TextTop";
import MyButton from "../MyButton";
import ErrorAlert, { ErrorAlertProps, StatusErrorType } from "../ErrorAlert";
import { signIn, SignInUserData } from "../../config";

import "./index.css"

interface ErrorData {
  title: string;
  description: string;
  status: StatusErrorType;
}

export default function SignIn() {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [alertData, setAlertData] = useState <ErrorData>({title: "", description: "", status: "error"})

  const { register, handleSubmit, formState: { errors }, } = useForm<SignInUserData>();
  const onSubmit = handleSubmit(async(data) => submitCommands(data));

  async function submitCommands(data: any){
    const response = await signIn(data);
    if(response.status !==200){
      console.log(response);
      setAlertBoxVisibility(true);
      setTimeout(()=>{setAlertBoxVisibility(false)}, 5000);
      setAlertData({...alertData, title: "Atenção!", description: response?.data || "Erro ao fazer login"})
    }
  }

  return (
    <Form onSubmit={onSubmit} position={"relative"}>
      {alertBoxVisibility && <ErrorAlert alertData={alertData}></ErrorAlert>}

      <TextTop title="Login" subtitle="entre com seu email e senha" />
      <Field
        label="email"
        invalid={!!errors.email}
        errorText={errors.email?.message}
      >
        <Input
          variant="subtle"
          backgroundColor={"#EEEEEE"}
          type="email"
          {...register("email", {
            required: "email é obrigatório",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "insira um email válido"
            },
          })}
        />
      </Field>
      

      <Field
        label="senha"
        invalid={!!errors.password}
        errorText={errors.password?.message}
      >
        <PasswordInput
          variant="subtle"
          backgroundColor={"#EEEEEE"}
          {...register("password", {
            required: "senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter no mínimo 6 caracteres"
            }
          })}
        />
      </Field>

      <MyButton type="submit" w={"100%"} >Entrar</MyButton>

      <Link to={"/sign-up"}>Não possui cadastro? Cadastre-se!</Link>
    </Form>
  )
}