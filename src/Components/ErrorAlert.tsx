import { Alert } from "@chakra-ui/react"

type Status = "error" | "info" | "warning" | "sucess" | "neutral" 

interface ErrorAlertProps{
  title: string;
  description: string; 
  status: Status;
}

export default function ErrorAlert({title, description, status}: ErrorAlertProps){
  return(
    <Alert.Root status={(status as any)}>
      <Alert.Indicator/>
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}