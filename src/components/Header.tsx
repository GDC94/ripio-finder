import { Image, Stack } from "@chakra-ui/react";
import coin from "../assets/coin.png";
import coin2 from "../assets/coin-2.png";
import logo from "../assets/logo_ripio.svg";

const Header: React.FC = () => {
  return (
    <Stack
      justifyContent="space-between"
      flexDirection="column"
      alignItems="center"
      mt="4"
    >
      <Image pos="absolute" left="0" src={coin} alt="" w="28" />

      <Image src={logo} alt="" w="20" />
      <Image
        pos="absolute"
        right="5"
        src={coin2}
        alt=""
        w="20"
        filter="auto"
        blur="2px"
      />
    </Stack>
  );
};

export default Header;
