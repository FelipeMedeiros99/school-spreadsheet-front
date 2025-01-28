import { Alert, Box, BoxProps, ProgressPropsProvider } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion";
import {CloseButton} from "../components/ui/close-button";
export type StatusErrorType = "error" | "info" | "warning" | "success" | "neutral"

export interface ErrorAlertProps extends BoxProps {
  alertData: {
    title: string;
    description: string;
    status: StatusErrorType;
  }, 
  initialPosition: number;
  setVisibility: (newVisibility: boolean)=>void;
}

export default function ErrorAlert({alertData, initialPosition, setVisibility, ...props}: ErrorAlertProps) {
  const {status, title, description} = alertData;
  return (
      
      <motion.div
      initial={{ opacity: 0, y: initialPosition - 100}}
      animate={{ opacity: 1, y: initialPosition }}
      exit={{ opacity: 0, y: initialPosition - 100}}
      transition={{ duration: 0.7 }}
      style={{
        zIndex: "6"
      }}
      >
        <Alert.Root  display={"flex"} alignItems={"center"} status={status} position={{base: "fixed", md:"absolute"}} padding={"10px 20px 10px 20px"} left={"50%"} transform={"translateX(-50%)"} width={"auto"} minW={"200px"} variant={"solid"} {...props}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title fontWeight={"700"}>{title}</Alert.Title>
            <Alert.Description fontSize={"14px"}>
              {description}
            </Alert.Description>
          </Alert.Content>
        <CloseButton onClick={()=>setVisibility(false)}/>
        </Alert.Root>
        
      </motion.div>
  )
}