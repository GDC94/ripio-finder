import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import eth from "../assets/eth-green.svg";
import TransactionCard from "./TransactionCard";

interface Props {
  transactions: [];
}

const ContainerTSX = ({ transactions }: Props) => {
  return (
    <Stack
      pos="relative"
      height="auto"
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
        <TransactionCard transaction={transactions} />
      </Flex>
    </Stack>
  );
};

export default ContainerTSX;
