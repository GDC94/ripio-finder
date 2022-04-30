import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { MoralisProvider } from "react-moralis";
const appId = "uVSsa6u6x1o1QDHbeqPk77QKmWn2GwrmnG17F14T";
const server = "https://2k93pxiek3of.usemoralis.com:2053/server";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MoralisProvider appId={appId} serverUrl={server}>
        <App />
      </MoralisProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
