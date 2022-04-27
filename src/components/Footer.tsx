import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Stack } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Flex justifyContent="center" alignItems="center">
        <Button
          w="100px"
          leftIcon={<ArrowBackIcon />}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          variant="ghost"
          color="#358dff"
          size="sm"
        >
          Anterior
        </Button>
        <Button size="sm">Cancel</Button>
      </Flex>
      <Stack></Stack>
    </Flex>
  );
};

export default Footer;
