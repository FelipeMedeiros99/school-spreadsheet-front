import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";
import { useState } from "react";
import { AnimatePresence } from "framer-motion"
import { Oval } from "react-loader-spinner"

import Form from "./Components/Form";
import TextTop from "./Components/TextTop";
import MyButton from "../MyButton";
import ErrorAlert, { StatusErrorType } from "../ErrorAlert";
import { signIn, SignInUserData } from "../../config";

import "./index.css"
import { AlertMessageData, CredentialUser } from "../../App";

export interface ErrorData {
  title: string;
  description: string;
  status: StatusErrorType;
}

export interface CredentialUserProps {
  credentialUser: CredentialUser;
  setCredentialUser: (newCredential: CredentialUser) => void;
  alertMessageData: AlertMessageData;
  setAlertMessageData: (newAlert: AlertMessageData) => void;
  changeAlertVisibility: any;
}


export default function SignIn({
  setCredentialUser,
  alertMessageData,
  setAlertMessageData,
  changeAlertVisibility,
}: CredentialUserProps) {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [spinnerAtive, setSpinnerAtive] = useState(false)

  const { register, handleSubmit, formState: { errors }, } = useForm<SignInUserData>();
  const onSubmit = handleSubmit(async (data) => submitCommands(data));
  const navigate = useNavigate()

  async function submitCommands(data: any) {
    setSpinnerAtive(true)
    const response = await signIn(data);
    if (response?.status !== 200) {
      changeAlertVisibility(setAlertBoxVisibility)
      setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao fazer login" })
    } else {
      setCredentialUser(response?.data)
      localStorage.setItem("school-spreadsheet", JSON.stringify({ credentialUser: response?.data }))
      navigate("/home")
    }
    setSpinnerAtive(false)
  }

  return (
    <Form
      onSubmit={onSubmit}
      position={"relative"}
    >
      <AnimatePresence>
        {
          alertBoxVisibility
          &&
          <ErrorAlert
            alertMessageData={alertMessageData}
            initialPosition={-150}
            setVisibility={setAlertBoxVisibility}
          />
        }
      </AnimatePresence>
      <TextTop
        title="Login"
        subtitle="entre com seu email e senha"
      />
      <Field
        label="email"
        invalid={!!errors?.email}
        errorText={errors?.email?.message}
      >
        <Input
          disabled={spinnerAtive}
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
        className="passwordInput"
        label="senha"
        invalid={!!errors?.password}
        errorText={errors?.password?.message}
      >
        <PasswordInput
          disabled={spinnerAtive}
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

      <MyButton disabled={spinnerAtive} type="submit" w={"100%"} >
        {
          spinnerAtive ?
            <Oval
              visible={true}
              height="80"
              width="80"
              color="white"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            /> :
            "Entrar"
        }
      </MyButton>

      <Link
        to={"/sign-up"}
      >
        Não possui cadastro? Cadastre-se!
      </Link>
    </Form>
  )
}