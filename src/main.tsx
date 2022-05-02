import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { MoralisProvider } from "react-moralis";
const appId = "Ycq0QlCPdq9V6E6mF1sCVHE932GbIEIPbURgY7SS";
const server = "https://4czbbjur1wdv.usemoralis.com:2053/server";


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
