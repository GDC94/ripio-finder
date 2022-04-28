import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Icon, Stack, Tag, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import DetailsTransaction from "./DetailsTransaction";
import HashCard from "./HashCard";
import Timer from "./Timer";

const TransactionCard: React.FC = () => {
  return (
    <Flex mt='2' mb='2' rounded="md" h="48px" w="full" transition='.4s' _hover={{bg:'#030b53', transform: "translateY(-1px)", boxShadow: 'dark-lg'}}>
      <Stack
        justifyContent="center"
        overflow="hidden"
        w="full"
        alignItems="left"
      >
        <Timer minutes={90} />
      </Stack>
      <Stack
        justifyContent="center"
        overflow="hidden"
        w="full"
        alignItems="left"
      >
        <HashCard transactionValue="0x3bbb2f9ce305b5a292dc27572bb096c0017029eb7652a56816d2d23c4e6bb676" />
      </Stack>
      <Stack
        justifyContent="center"
        overflow="hidden"
        w="full"
        alignItems="left"
      >
        <HashCard transactionValue="0x01721e2a2c2520d8072d1a89501b69bc333de7a65d52fff95cf587889f327e17" />
      </Stack>

      <Flex alignItems="center" w="full" flexDirection="row">
        <HashCard transactionValue="0x95a9bd206ae52c4ba8eecfc93d18eacdd41c88cc" />
        <Icon ml="2" color='whatsapp.300' transition='.4s' _hover={{transform: "translateX(3px)"}} as={ArrowForwardIcon} />
      </Flex>

      <Stack w="full" justifyContent="center">
        <HashCard transactionValue="0x95a9bd206ae52c4ba8eecfc93d18eacdd41c88cc" />
      </Stack>

      <Stack w="full" justifyContent="center">
        <DetailsTransaction />
      </Stack>
    </Flex>
  );
};

export default TransactionCard;
