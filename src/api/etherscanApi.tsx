import axios from "axios";
const apiKey = "E2JUUM3CPBBA8R23DRSJ2SM9K2DARNZ199";


export const etherscanApi = axios.create({
  baseURL: "https://api.etherscan.io/api",
  params: {
    api_key: apiKey,
  },
});
