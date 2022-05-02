import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { Transaction } from "../interfaces/transactionInterface";
import DetailsTransaction from "./DetailsTransaction";
import HashCard from "./HashCard";

interface Props {
  transaction: Transaction
}

const TransactionCard = ({transaction}: Props) => {
  
  console.log(transaction.from_address)
  

  
  return (
    <Flex
      mt="2"
  
      rounded="md"
      h="48px"
      w="full"
      transition=".4s"
      _hover={{
        bg: "#030b53",
        transform: "translateY(-1px)",
        boxShadow: "dark-lg",
      }}
    >
      <Stack
        justifyContent="center"
        overflow="hidden"
        w="full"
        alignItems="left"
      >
        <HashCard transactionValue={transaction.hash} />
      </Stack>
      <Stack
        justifyContent="center"
        overflow="hidden"
        w="full"
        alignItems="left"
      >
        <HashCard transactionValue={transaction.block_hash} />
      </Stack>

      <Flex alignItems="center" w="full" flexDirection="row">
        <HashCard transactionValue={transaction.from_address} />
        <Icon
          ml="2"
          color="whatsapp.300"
          transition=".4s"
          _hover={{ transform: "translateX(3px)" }}
          as={ArrowForwardIcon}
        />
      </Flex>

      <Stack w="full" justifyContent="center">
        <HashCard transactionValue={transaction.to_address}/>
      </Stack>

      <Stack w="full" justifyContent="center">
        <DetailsTransaction transaction={transaction} />
      </Stack>
    </Flex>
  );
};

export default TransactionCard;
