import { Flex, Tag } from "@chakra-ui/react";

const TimeConverter = (minutes: number) => {
  if (typeof minutes !== "number" || !Number.isInteger(minutes)) {
    throw TypeError("Minutos debe ser un numero entero");
  }
  if (minutes < 0) {
    return null;
  }
  let horas = Math.floor(minutes / 60);
  minutes = minutes % 60;
  const resultado = `${horas} hr ${minutes} min `;
  const respuesta = resultado.replace(/["']/g, "");

  return respuesta;
};

interface Props {
  minutes: number;
}

const Timer = ({ minutes }: Props) => {
  return (
    <Flex>
      <Tag
        p="0"
        cursor="pointer"
        bg="transparent"
        fontWeight="extrabold"
        color="white"
        fontSize="15px"
      >
        🕖 {TimeConverter(minutes)}
      </Tag>
    </Flex>
  );
};

export default Timer;
