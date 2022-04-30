import axios from "axios";



export const etherscanApi = axios.create({
  baseURL: "https://rinkeby.etherscan.io/tx/",
  
});

