import { Stack, Text } from "@chakra-ui/react";

import Buscador from "./components/Buscador";
import Container from "./components/Container";

import Header from "./components/Header";
import Motion from "./components/Motion";

function App() {
  return (
    <Motion delay={"0.1"} duration={"1.5"}>
      <Stack alignItems="center" pb="3.5">
        <Header />
        <Text
          textAlign="center"
          w="450px"
          color="white"
          fontSize="21px"
          fontWeight="extrabold"
        >
          Buscá y analizá transacciones de manera rápida y sencilla.
        </Text>
        <Buscador />
      </Stack>

      <Container />
    </Motion>
  );
}

export default App;
