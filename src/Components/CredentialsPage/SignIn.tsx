import { Box, Input, Stack, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

import { Field } from "../../components/ui/field"
import { PasswordInput } from "../../components/ui/password-input"



export default function SignIn() {

  interface FormValues {
    email: string
    password: string
  }

  const { register, handleSubmit, formState: { errors }, } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => { console.log(data) })

  return (
    <Box as="form" onSubmit={onSubmit}>
      <Stack>
        <Field
          label="email"
          invalid={!!errors.email}
          errorText={errors.email?.message}
        >
          <Input
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
            {...register("password", {
              required: "senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres"
              }
            })}
          />
        </Field>
      </Stack>

      <Button type="submit" >Entrar</Button>
    </Box>
  )
}