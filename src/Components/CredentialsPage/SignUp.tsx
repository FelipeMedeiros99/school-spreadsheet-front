import { Box, Input, Stack, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";

import Form from "./Components/Form";
import TextTop from "./Components/TextTop";
import MyButton from "../MyButton";

import "./index.css";


export default function SignUp() {

  interface FormValues {
    email: string
    password: string
    confirmPassword: string
  }

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>()
  const onSubmit = handleSubmit((data) => { console.log(data) })

  const passwordValue = watch("password")

  return (

    <Form onSubmit={onSubmit}>
      <TextTop title="Cadastro" subtitle="Cadastre-se com os dados solicitados" />
      <Field
        label="email"
        invalid={!!errors.email}
        errorText={errors.email?.message}
      >
        <Input
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

      <Field
        label="confirmar senha"
        invalid={!!errors.confirmPassword}
        errorText={errors.confirmPassword?.message}
      >
        <PasswordInput
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

      <MyButton type="submit" w={"100%"} >Entrar</MyButton>


      <Link to={"/sign-in"}>Já possui cadastro? Faça login!</Link>

    </Form>
  )
}