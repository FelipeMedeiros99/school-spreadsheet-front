import { Alert, Box, BoxProps, ProgressPropsProvider } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion";

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
  return (
      
      <motion.div
      initial={{ opacity: 0, y: -250}}
      animate={{ opacity: 1, y: -150 }}
      exit={{ opacity: 0, y: -250}}
      transition={{ duration: 0.5 }}
      >
        <Alert.Root zIndex={"5"} display={"flex"} alignItems={"center"} status={status} position={{base: "fixed", md:"absolute"}} padding={"10px 20px 10px 20px"} left={"50%"} transform={"translateX(-50%)"} width={"auto"} minW={"200px"} variant={"solid"} {...ProgressPropsProvider}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title fontWeight={"700"}>{title}</Alert.Title>
            <Alert.Description fontSize={"14px"}>
              {description}
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        
      </motion.div>
  )
}