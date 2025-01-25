import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";

import Form from "./Components/Form";
import TextTop from "./Components/TextTop";
import MyButton from "../MyButton";

import "./index.css"


export default function SignIn() {

  interface FormValues {
    email: string
    password: string
  }

  const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => { console.log(data) })

  return (
    <Form onSubmit={onSubmit} >
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