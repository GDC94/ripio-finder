import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import eth from "../assets/eth-green.svg";
import { Transaction } from "../interfaces/transactionInterface";
import TransactionCard from "./TransactionCard";
import { FiGithub } from "react-icons/fi";
import Motion from "./Motion";
import { useState } from "react";
import Paginador from "./Paginator";

interface Props {
  transactions: [];
  resultados: string;
  loading: boolean;
  visible: boolean;
}

const ContainerTSX = ({
  loading,
  transactions,
  resultados,
  visible,
}: Props) => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(6);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  const maximo = Number(resultados) / perPage;

  return (
    <Stack height="450px" w="full" alignItems="center">
      <Flex w="1400px" p="2" flexDirection="column" m="auto">
        {loading ? (
          <Stack
            flexDirection="column"
            h="400px"
            w="full"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner
              thickness="7px"
              speed="3s"
              emptyColor="blue.100"
              color="green.100"
              size="lg"
            />

            <Text color="green.100" fontWeight="extrabold">
              Buscando ...{" "}
            </Text>
          </Stack>
        ) : null}

        {visible ? (
          <Motion delay={"0.1"} duration={"1.2"}>
            <Stack mt="3" mb="3" justifyContent="center" alignItems="center">
              <Text
                rounded="md"
                mb="2"
                pl="1"
                pr="1"
                w="max-content"
                bg="#38f0001d"
                color="lime"
                fontWeight="extrabold"
                fontSize="15px"
              >
                Se encontraron {resultados} resultados
              </Text>
            </Stack>
            <Flex
              mt="3"
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
              bg="#000641"
              mb="3"
            >
              <Stack w="full" alignItems="left">
                <Text fontWeight="bold" color="white">
                  Hash de la operación
                </Text>
              </Stack>
              <Stack w="full" alignItems="left">
                <Text fontWeight="bold" color="white">
                  Hash del Bloque
                </Text>
              </Stack>
              <Stack w="full" alignItems="left">
                <Text fontWeight="bold" color="white">
                  Dirección de origen
                </Text>
              </Stack>
              <Stack w="full">
                <Text fontWeight="bold" color="white">
                  Dirección de destino
                </Text>
              </Stack>
              <Stack w="full">
                <Text fontWeight="bold" color="white"></Text>
              </Stack>
            </Flex>

            <Stack>
              {loadingPage ? (
                <Stack h="336px" justifyContent="center" alignItems="center">
                  <Spinner
                    thickness="7px"
                    speed="3s"
                    emptyColor="blue.100"
                    color="green.100"
                    size="md"
                  />{" "}
                  )
                </Stack>
              ) : (
                <Motion delay={"0.1"} duration={".6"}>
                  {transactions
                    ?.slice(
                      (page - 1) * perPage,
                      (page - 1) * perPage + perPage
                    )
                    .map((tsx: Transaction) => (
                      <TransactionCard key={tsx.hash} transaction={tsx} />
                    ))}
                </Motion>
              )}
              )
            </Stack>
            <Paginador
              setLoadingPage={setLoadingPage}
              maximo={maximo}
              page={page}
              setPage={setPage}
            />
          </Motion>
        ) : (
          <Flex
            flexDirection="column"
            h="400px"
            w="full"
            mt="4"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              p="5"
              boxShadow="dark-lg"
              rounded="lg"
              borderWidth="2px"
              borderColor="blue.100"
              h="auto"
              bg="#08033f"
              w="400px"
              justifyContent="center"
              alignItems="center"
              pos="relative"
            >
              <Image src={eth} alt="" pos="absolute" top="-6" w="10" />
              <Text
                textAlign="center"
                maxW="280px"
                fontSize="15px"
                fontWeight="bold"
                color="#a8a8a8c5"
              >
                Esta aplicación fue construida con React, Typescript, Moralis y
                Chakra Ui.
              </Text>
              <Box
                pt="2"
                as="a"
                href="https://github.com/GDC94/ripio-finder"
                target="_blank"
              >
                <Icon color="green.100" as={FiGithub} />
              </Box>
              <Text fontWeight="bold" fontSize="14px" color="lime">
              Germán Derbes Catoni
              </Text>
            </Stack>
          </Flex>
        )}
      </Flex>
    </Stack>
  );
};

export default ContainerTSX;
