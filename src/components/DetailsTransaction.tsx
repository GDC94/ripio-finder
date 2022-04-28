import { ArrowForwardIcon, ArrowUpIcon, ViewIcon } from "@chakra-ui/icons";

import {
  Badge,
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import block from "../assets/icons8-blockchain-64.png";

const DetailsTransaction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        _focus={{ outline: "none" }}
        size="xs"
        bg="#0D74FF"
        onClick={onOpen}
        _hover={{ bg: "#0D74FF" }}
        color="white"
        fontWeight="bold"
        rounded="md"
        rightIcon={<ViewIcon />}
      >
        Más detalles
      </Button>

      <Modal onClose={onClose} size={"xs"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="#f0efef" minH="400px">
          <ModalHeader p="3" color="black">
            Información adicional
          </ModalHeader>

          <ModalBody p="3">
            <Flex flexDirection="row" alignItems="center">
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={
                  "Define la posición del bloque en la cadena, confirmado además, que forma parte de la misma."
                }
              >
                <Badge
                  maxW="max-content"
                  bg="#032755"
                  color="white"
                  fontWeight="bold"
                >
                  Número de bloque:{" "}
                </Badge>
              </Tooltip>
              <Text ml="3" fontWeight="bold" color="black" fontSize="20px">
                {" "}
                8{" "}
              </Text>
            </Flex>
            <Flex flexDirection="row" alignItems="center">
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={
                  "El Gas en Ethereum es una unidad de medida utilizada para medir el trabajo realizado por Ethereum para realizar transacciones o cualquier interacción dentro de la red."
                }
              >
                <Badge
                  maxW="max-content"
                  bg="#032755"
                  color="white"
                  fontWeight="bold"
                >
                  Gas utilizado:{" "}
                </Badge>
              </Tooltip>
              <Text ml="3" fontWeight="bold" color="black" fontSize="20px">
                {" "}
                8{" "}
              </Text>
            </Flex>

            <Flex flexDirection="row" alignItems="center">
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={
                  "Es un número arbitrario que funciona en combinación con el hash como un elemento de control para evitar la manipulación de la información de los bloques. "
                }
              >
                <Badge
                  maxW="max-content"
                  bg="#032755"
                  color="white"
                  fontWeight="bold"
                >
                  Nonce:{" "}
                </Badge>
              </Tooltip>
              <Text ml="3" fontWeight="bold" color="black" fontSize="20px">
                {" "}
                8{" "}
              </Text>
            </Flex>
            <Flex h="70px" alignItems="center" justifyContent="space-between">
              <Flex flexDirection="column">
                <Text fontSize="13px" fontWeight="extrabold">
                  Origen
                </Text>
                <Flex flexDirection="row" alignItems="center">
                  <Tooltip
                    boxShadow="dark-lg"
                    bg="black"
                    rounded="md"
                    textAlign="center"
                    label={"0xbd04df86576bf4a743277049aa319914d88da4a8"}
                  >
                    <Tag
                      p="0"
                      cursor="pointer"
                      bg="transparent"
                      fontWeight="extrabold"
                      color="#ff450d"
                      fontSize="13px"
                    >
                      {"0xbd04df86576bf4a743277049aa319914d88da4a8".substr(
                        0,
                        10
                      )}{" "}
                      ...
                    </Tag>
                  </Tooltip>
                  <Icon ml="2" color="#197c00" as={ArrowForwardIcon} />
                </Flex>
              </Flex>

              <Image mt="5" src={block} w="35px" alt="" />

              <Flex flexDirection="column" alignItems="end">
                <Text fontSize="13px" fontWeight="extrabold">
                  Destino
                </Text>
                <Flex flexDirection="row-reverse" alignItems="center">
                  <Tooltip
                    boxShadow="dark-lg"
                    bg="black"
                    rounded="md"
                    textAlign="center"
                    label={"0xbd04df86576bf4a743277049aa319914d88da4a8"}
                  >
                    <Tag
                      p="0"
                      cursor="pointer"
                      bg="transparent"
                      fontWeight="extrabold"
                      color="#2f9500"
                      fontSize="13px"
                    >
                      {"0xbd04df86576bf4a743277049aa319914d88da4a8".substr(
                        0,
                        10
                      )}{" "}
                      ...
                    </Tag>
                  </Tooltip>
                  <Icon mr="2" color="#197c00" as={ArrowForwardIcon} />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              textAlign="center"
              alignItems="center"
              mt="2"
            >
              <Icon mb="1" color="#197c00" as={ArrowUpIcon} />
              <Text fontSize="13px" fontWeight="extrabold">
                Hash del Bloque
              </Text>
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={"0xbd04df86576bf4a743277049aa319914d88da4a8"}
              >
                <Tag
                  p="0"
                  cursor="pointer"
                  bg="transparent"
                  fontWeight="extrabold"
                  color="#0D74FF"
                  fontSize="13px"
                >
                  {"0xbd04df86576bf4a743277049aa319914d88da4a8".substr(0, 10)}{" "}
                  ...
                </Tag>
              </Tooltip>
            </Flex>
          </ModalBody>
          <ModalFooter p="3">
            <Button
              size="xs"
              _focus={{ outline: "none" }}
              bg="#0D74FF"
              _hover={{ bg: "#0D74FF" }}
              color="white"
              onClick={onClose}
            >
              cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailsTransaction;
