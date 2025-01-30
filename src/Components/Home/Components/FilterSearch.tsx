import { Box, Input } from "@chakra-ui/react";
import { InputGroup } from "../../../components/ui/input-group";
import { IoCloseSharp } from "react-icons/io5";

interface FilterSearchProps {
  onSubmit: any;
  resetInput: any;
  register: any;
  setFilter: (newFilter: string) => void;
}

export default function FilterSearch({ 
  onSubmit,
  resetInput,
  register, 
  setFilter
}: FilterSearchProps) {


  return (
    <InputGroup as={"form"}
      onSubmit={onSubmit}
      endElement={
        <Box
          display={'flex'}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
          paddingRight={"10px"}
          _hover={{ cursor: 'pointer' }}
          onClick={()=>{
            resetInput()
            setFilter("")
          }}
          zIndex={"5"}
        >
          <IoCloseSharp />
        </Box>
      }
    >
      <Input
        backgroundColor={"#EEEEEE"}
        color={"black"}
        border={"none"}
        placeholder={"Buscar estudante..."}
        {...register("filter")}
      />
    </InputGroup>

  )
}