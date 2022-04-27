import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import eth from "../assets/eth-green.svg";
import TransactionCard from "./TransactionCard";

const Container: React.FC = () => {
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
        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Stack w="full" alignItems="left">
            <Text fontWeight="bold" color="white">
              Block hash
            </Text>
          </Stack>
          <Stack w="full" alignItems="left">
            <Text fontWeight="bold" color="white">
              Desde
            </Text>
          </Stack>
          <Stack w="full">
            <Text fontWeight="bold" color="white">
              Hacia
            </Text>
          </Stack>
        </Stack>
        <TransactionCard />
      </Flex>
    </Stack>
  );
};

export default Container;
