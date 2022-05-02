import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Tag, Tooltip, useClipboard } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  transactionValue: string;
}

const HashCard = ({ transactionValue }: Props) => {
  const [value, setValue] = useState(transactionValue);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex>
      <Tooltip
        boxShadow="dark-lg"
        bg="black"
        rounded="md"
        textAlign="center"
        label={value}
      >
        <Tag
          p="0"
          cursor="pointer"
          bg="transparent"
          fontWeight="extrabold"
          color="white"
          fontSize="15px"
        >
          {transactionValue?.substr(0, 15)} . . .
        </Tag>
      </Tooltip>

      <IconButton
        _focus={{ outline: "none" }}
        _hover={{ bg: "transparent" }}
        outline="none"
        size="sm"
        bg="transparent"
        onClick={onCopy}
        colorScheme="blue"
        aria-label="Search database"
        icon={
          hasCopied ? (
            <CheckCircleIcon color="green.100" />
          ) : (
            <CopyIcon color="green.100" />
          )
        }
      />
    </Flex>
  );
};

export default HashCard;
