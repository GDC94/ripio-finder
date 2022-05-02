import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  maximo: number;
  page: number;
  setPage: (value: number) => void;
  setLoadingPage: (value: boolean) => void;
}

const Paginador = ({ maximo, setPage, page, setLoadingPage }: Props) => {
  const [input, setInput] = useState<number>(1);
  const NextPage = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 1200);
    setInput(input + 1);
    setPage(page + 1);
  };
  const previousPage = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 1200);
    setInput(input - 1);
    setPage(page - 1);
  };

  return (
    <Flex justifyContent="center" mt="5">
      <Flex justifyContent="center" alignItems="center">
        <Button
          disabled={page === 1 || page < 1}
          w="100px"
          leftIcon={<ArrowBackIcon />}
          bg="transparent"
          transition=".3s"
          _hover={{ bg: "#0d00bd55" }}
          variant="ghost"
          color="#358dff"
          size="sm"
          mr="1.5"
          borderWidth="2px"
          borderColor="#0d00bd78"
          onClick={previousPage}
          _focus={{ outline: "none" }}

        >
          Anterior
        </Button>
        <Input
          fontWeight="extrabold"
          _hover={{ borderColor: "transparent" }}
          w="40px"
          value={input}
          isReadOnly
          cursor="pointer"
          rounded="md"
          borderWidth={2}
          color={"lime"}
          size="sm"
          placeholder=""
          borderColor="transparent"
          outline="none"
          mr="1"
        />
        <Text mr="1.5" color="lime" fontWeight="extrabold">
          de {maximo}
        </Text>
        <Button
          disabled={page === Math.ceil(maximo) || page > Math.ceil(maximo)}
          ml="1.5"
          w="100px"
          rightIcon={<ArrowForwardIcon />}
          bg="transparent"
          transition=".3s"
          _hover={{ bg: "#0d00bd55" }}
          variant="ghost"
          color="#358dff"
          size="sm"
          borderWidth="2px"
          borderColor="#0d00bd78"
          onClick={NextPage}
          _focus={{ outline: "none" }}
        >
          Siguiente
        </Button>
      </Flex>
    </Flex>
  );
};

export default Paginador;
