import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Stack } from "@chakra-ui/react";

interface Props {
  maximo: number;
  page: number;
  setPage: (value: number) => void;
  setLoadingPage: (value: boolean) => void;
}

const Paginador = ({ maximo, setPage, page, setLoadingPage }: Props) => {
  const NextPage = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 1200);

    setPage(page + 1);
  };
  const previousPage = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 1200);
    setPage(page - 1);
  };

  return (
    <Flex justifyContent="center" mt="5">
      <Flex justifyContent="center" alignItems="center">
        <Button
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
        <Button
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
