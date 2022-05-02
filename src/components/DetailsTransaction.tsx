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
import { Transaction } from "../interfaces/transactionInterface";

interface Props {
  transaction: Transaction;
}

const DetailsTransaction = ({ transaction }: Props) => {
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
          <ModalHeader textAlign="center" p="3" mb="2" color="black">
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
              <Text ml="3" fontWeight="bold" color="black" fontSize="15px">
                {transaction.block_number}
              </Text>
            </Flex>

            <Flex mt="3" flexDirection="row" alignItems="center">
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={
                  "Es un dato almacenado en cada bloque a modo de serial único que tienen como principal función determinar el momento exacto en el que el bloque ha sido sido minado y validado por la red"
                }
              >
                <Badge
                  maxW="max-content"
                  bg="#032755"
                  color="white"
                  fontWeight="bold"
                >
                  TimeStamp:{" "}
                </Badge>
              </Tooltip>
              <Text ml="3" fontWeight="bold" color="black" fontSize="15px">
                {transaction.block_timestamp}
              </Text>
            </Flex>

            <Flex mt="3" flexDirection="row" alignItems="center">
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={
                  "El GAS es una unidad de medida utilizada para cuantificar el trabajo realizado por Ethereum para ejecutar transacciones o cualquier interacción dentro de la red."
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
              <Text ml="3" fontWeight="bold" color="black" fontSize="15px">
                {transaction.gas}
              </Text>
            </Flex>

            <Flex mt="3" flexDirection="row" alignItems="center">
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
              <Text ml="3" fontWeight="bold" color="black" fontSize="15px">
                {transaction.nonce}
              </Text>
            </Flex>
            <Flex h="70px" alignItems="center" justifyContent="space-between">
              <Flex flexDirection="column">
                <Badge
                  maxW="max-content"
                  bg="#032755"
                  color="white"
                  fontWeight="bold"
                >
                  Origen
                </Badge>
                <Flex flexDirection="row" alignItems="center">
                  <Tooltip
                    boxShadow="dark-lg"
                    bg="black"
                    rounded="md"
                    textAlign="center"
                    label={transaction.from_address}
                  >
                    <Tag
                      p="0"
                      cursor="pointer"
                      bg="transparent"
                      fontWeight="extrabold"
                      color="#ff450d"
                      fontSize="13px"
                    >
                      {transaction.from_address.substr(0, 10)} ...
                    </Tag>
                  </Tooltip>
                  <Icon ml="2" color="#197c00" as={ArrowForwardIcon} />
                </Flex>
              </Flex>

              <Image mt="5" src={block} w="35px" alt="" />

              <Flex flexDirection="column" alignItems="end">
                <Badge
                  maxW="max-content"
                  bg="#032755"
                  color="white"
                  fontWeight="bold"
                >
                  Destino
                </Badge>
                <Flex flexDirection="row-reverse" alignItems="center">
                  <Tooltip
                    boxShadow="dark-lg"
                    bg="black"
                    rounded="md"
                    textAlign="center"
                    label={transaction.to_address}
                  >
                    <Tag
                      p="0"
                      cursor="pointer"
                      bg="transparent"
                      fontWeight="extrabold"
                      color="#2f9500"
                      fontSize="13px"
                    >
                      {transaction.to_address.substr(0, 10)} ...
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
              <Badge
                maxW="max-content"
                bg="#032755"
                color="white"
                fontWeight="bold"
              >
                Hash del bloque
              </Badge>
              <Tooltip
                boxShadow="dark-lg"
                bg="black"
                rounded="md"
                textAlign="center"
                label={transaction.block_hash}
              >
                <Tag
                  p="0"
                  cursor="pointer"
                  bg="transparent"
                  fontWeight="extrabold"
                  color="#0D74FF"
                  fontSize="13px"
                >
                  {transaction.block_hash.substr(0, 10)} ...
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
