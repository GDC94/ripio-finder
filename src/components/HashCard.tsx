import {
  Button,
  Flex,
  Input,
  Tag,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { useState } from "react";

const HashCard: React.FC = () => {
  const [value, setValue] = useState("Hello world");
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex mb={2}>
      <Tooltip label={value}>
        <Tag></Tag>
      </Tooltip>
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Flex>
  );
};

export default HashCard;
