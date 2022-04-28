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

  return {
    horas,
    minutes,
  };
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
        {JSON.stringify(TimeConverter(minutes))}
      </Tag>
    </Flex>
  );
};

export default Timer;
