import { FormEvent, ChangeEvent, useState, useEffect } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import ContainerTSX from "./ContainerTSX";

import { useMoralisWeb3Api } from "react-moralis";

export default function Buscador() {
  const Web3Api = useMoralisWeb3Api();

  const [input, setInput] = useState<string>("");
  const [resultados, setResultados] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [transactions, setTransactions] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [notResult, setNotResults] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(false);

  const Reg = /^0x[a-fA-F0-9]{40}$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === "" || input.trim() === "" || Reg.test(input) === false) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      setInput("");
      return;
    }

    setLoading(true);
    setAddress(input);
    setInput("");
  };

  const getTransactions = async () => {
    const data = await Web3Api.account
      .getTransactions({
        chain: "eth",
        address: address,
        limit: 60,
      })
      .catch((err) => {
        setNotResults(true);
        console.log(err);
      });

    if (data) {
      setTransactions(data.result);
      setResultados(data.result?.length);
      setTimeout(() => {
        setLoading(false);
        setVisible(true);
      }, 5500);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [address]);

  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Container w={"700px"} p={4}>
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"4px"}
            onSubmit={handleSubmit}
          >
            <FormControl w={{ base: "100%", md: "40%", lg: "100%" }}>
              <Input
                focusBorderColor="#00b7ff"
                _hover={{ borderColor: "blue.100", outlineOffset: "3px" }}
                size="sm"
                variant={"outline"}
                borderWidth={2}
                color={"lime"}
                fontWeight="bold"
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={"blue.100"}
                placeholder={"Ingresá una dirección aquí..."}
                aria-label={"Your Email"}
                value={input}
                onChange={handleChange}
                boxShadow={"dark-lg"}
                rounded="md"
                type="text"
                bg="#000641"
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

          {!notResult ? (
            <Stack minH="16">
              <Text
                fontSize="sm"
                mt={4}
                textAlign={"center"}
                color={error ? "#ff0000" : "#a8a8a8c5"}
                fontWeight="bold"
              >
                No se encontraron resultados
              </Text>
            </Stack>
          ) : (
            <Stack minH="16">
              <Text
                fontSize="sm"
                mt={4}
                textAlign={"center"}
                color={error ? "#ff0000" : "#a8a8a8c5"}
                fontWeight="bold"
              >
                {error
                  ? "Debes ingresar una dirección válida"
                  : "Recordá que la dirección debe tener el siguiente formato: 0x3ab28ecedea6cdb6feed398e93ae8c7b316b1182"}
              </Text>
            </Stack>
          )}
        </Container>
      </Flex>
      <ContainerTSX
        loading={loading}
        transactions={transactions}
        resultados={resultados}
        visible={visible}
      />
    </>
  );
}
