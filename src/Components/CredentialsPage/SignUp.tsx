import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner"

import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";

import Form from "./Components/Form";
import TextTop from "./Components/TextTop";
import MyButton from "../MyButton";

import "./index.css";
import { useState } from "react";
import ErrorAlert from "../ErrorAlert";
import { AnimatePresence } from "framer-motion";
import { signUp } from "../../config";
import { AlertMessageData } from "../../App";

interface FormValues {
  email: string
  password: string
  confirmPassword: string
}

export interface CredentialSignupProps {
  alertMessageData: AlertMessageData;
  setAlertMessageData: (newAlert: AlertMessageData) => void;
  changeAlertVisibility: any
}

export default function SignUp({
  alertMessageData,
  setAlertMessageData,
  changeAlertVisibility
}: CredentialSignupProps) {

  const [alertBoxVisibility, setAlertBoxVisibility] = useState(false);
  const [spinnerAtive, setSpinnerAtive] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  const onSubmit = handleSubmit((data) => { submitCommands(data) })
  const passwordValue = watch("password")

  async function submitCommands(data: any) {
    setSpinnerAtive(true)
    const response = await signUp(data);
    if (response?.status !== 201) {
      setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: response?.data || "Erro ao fazer cadastro", status: "error" })
      changeAlertVisibility(setAlertBoxVisibility)
      setSpinnerAtive(false)
    } else {
      setAlertMessageData({ ...alertMessageData, title: "Atenção!", description: "Cadastro feito com sucesso!", status: "success" })
      changeAlertVisibility(setAlertBoxVisibility)
      setTimeout(() => navigate("/sign-in"), 2000)

    }
    setSpinnerAtive(false)
  }

  return (

    <Form
      onSubmit={onSubmit}
    >
      <AnimatePresence>
        {
          alertBoxVisibility
          &&
          <ErrorAlert
            alertMessageData={alertMessageData}
            initialPosition={-50}
            setVisibility={setAlertBoxVisibility}
          />}
      </AnimatePresence>
      <TextTop title="Cadastro" subtitle="Cadastre-se com os dados solicitados" />
      <Field
        label="email"
        invalid={!!errors?.email}
        errorText={errors?.email?.message}
      >
        <Input
          disabled={spinnerAtive}
          variant="subtle"
          backgroundColor={"#EEEEEE"}
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

      <Field
        className="passwordInput"
        label="confirmar senha"
        invalid={!!errors?.confirmPassword}
        errorText={errors?.confirmPassword?.message}
      >
        <PasswordInput
          disabled={spinnerAtive}
          variant="subtle"
          backgroundColor={"#EEEEEE"}
          {...register("confirmPassword", {
            required: "confirmação de senha é obrigatória",
            validate: (value) => {
              return value === passwordValue || "As senhas não coincidem"
            }
          })}
        />
      </Field>

      <MyButton
        disabled={spinnerAtive}
        type="submit"
        w={"100%"}
        position={"relative"}>
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
        to={"/sign-in"}
      >
        Já possui cadastro? Faça login!
      </Link>

    </Form>
  )
}