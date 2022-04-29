import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useTransactions } from "../Hooks/useTransactions";

export default function Buscador() {
  const [direction, setDirection] = useState("");
  const [error, setError] = useState(false);

  const transactions = useTransactions();
  console.log(transactions);

  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDirection(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (direction === "") {
      setError(true);
    }
  }





  return (
    <Flex align={"center"} justify={"center"}>
      <Container w={"700px"} p={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"4px"}
          onSubmit={() => handleSubmit}
        >
          <FormControl w={{ base: "100%", md: "40%", lg: "100%" }}>
            <Input
              _hover={{ borderColor: "blue.100" }}
              size="sm"
              variant={"outline"}
              borderWidth={2}
              color={"green.100"}
              fontWeight="bold"
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={"blue.100"}
              id={"direction"}
              placeholder={"Ingresá una dirección aquí..."}
              aria-label={"Your Email"}
              value={direction}
              onChange={handleChange}
              boxShadow={"dark-lg"}
              rounded="md"
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%", lg: "30%" }}>
            <Button
              _focus={{ outline: "none" }}
              transition=".4s"
              w="100%"
              type={"submit"}
              bg="#0D74FF"
              color="white"
              _hover={{ bg: "#0060dd" }}
              boxShadow={"dark-lg"}
              size="sm"
              rounded="md"
            >
              Buscar
            </Button>
          </FormControl>
        </Stack>
        <Stack minH="16">
          <Text
            fontSize="sm"
            mt={4}
            textAlign={"center"}
            color={error ? "#ff0000" : "#a8a8a8c5"}
            fontWeight="bold"
          >
            {error
              ? "Debes ingresar una dirección."
              : "Recordá que la dirección debe tener el siguiente formato: 0x8CF70736d8E7715437306bb278060155b0ec0f84"}
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}
