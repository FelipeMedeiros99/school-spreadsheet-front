import { Alert, Box, BoxProps, ProgressPropsProvider } from "@chakra-ui/react"
import { CloseButton } from "../components/ui/close-button";

export type StatusErrorType = "error" | "info" | "warning" | "success" | "neutral"

export interface ErrorAlertProps extends BoxProps {
  alertData: {
    title: string;
    description: string;
    status: StatusErrorType;
  }
}

export default function ErrorAlert({alertData, ...props}: ErrorAlertProps) {
  const {status, title, description} = alertData;
  console.log(alertData)
  return (
    <Alert.Root display={"flex"} alignItems={"center"} status={status} position={{base: "fixed", md:"absolute"}} padding={"10px 20px 10px 20px"} top={{base: "105px", md: "60px"}} left={"50%"} transform={"translateX(-50%)"} width={"auto"} variant={"solid"} {...ProgressPropsProvider}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title fontWeight={"700"}>{title}</Alert.Title>
        <Alert.Description fontSize={"14px"}>
          {description}
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}