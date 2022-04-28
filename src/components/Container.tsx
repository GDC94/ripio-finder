import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import eth from "../assets/eth-green.svg";
import { useTransactions } from "../Hooks/useTransactions";
import TransactionCard from "./TransactionCard";

const Container: React.FC = () => {

  const transactions = useTransactions();
  console.log(transactions)
  return (
    <Stack
      pos="relative"
      height="450px"
      bg="#050e61"
      w="full"
      alignItems="center"
    >
      <Stack pos="absolute" top="-6" alignItems="center">
        <Image src={eth} alt="" w="10" />
      </Stack>
      <Flex w="1400px" p="2" flexDirection="column" m="auto">
        <Flex
          mt="3"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Stack w="full" alignItems="left">
            <Text fontWeight="bold" color="white">
              Operación realizada hace
            </Text>
          </Stack>
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
        <TransactionCard />
      </Flex>
    </Stack>
  );
};

export default Container;
