import { Flex, Stack, Tag, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const TransactionCard: React.FC = () => {
  return (
    <Flex rounded="md" h="48px" bg="#4772ff7d" w="full">
      <Stack overflow="hidden" w="full" alignItems="left">
        <Tooltip
          label="0x01721e2a2c2520d8072d1a89501b69bc333de7a65d52fff95cf587889f327e17"
          bg="black"
          placement="top-start"
        >
          <Tag as="button" size="md" w="max-content">
            {" "}
            0x01501d2b2a2520d8072d1a8...
          </Tag>
        </Tooltip>
      </Stack>

      <Stack w="full" alignItems="left">
        <Text fontWeight="bold" color="white">
          0x95a9bd206ae52c4ba8eecfc93d18eacdd41c88cc
        </Text>
      </Stack>
      <Stack w="full">
        <Text fontWeight="bold" color="white">
          0x95a9bd206ae52c4ba8eecfc93d18eacdd41c88cc
        </Text>
      </Stack>
    </Flex>
  );
};

export default TransactionCard;
