
import {extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#000641",
      },
    },
  },
  fonts: {
    heading: "Quicksand",
    body: "Quicksand",
  },
  colors: {
    yellow: {
      100: "#FFB800"
    },
    green: {
      100: "#00d060",
    },
    blue: {
      100: "#293ef6",
    }
  },
  shadows: {
    black: '0px 4px 20px rgb(0 0 0 / 25%)',
    blackStrong: '0px 4px 25px rgb(0 0 0 / 35%)'
  },
  
});


