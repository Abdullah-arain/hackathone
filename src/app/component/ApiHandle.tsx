import axios from "axios";
import FetchData from "../../lib/FetchData";
import { client } from "../../lib/ClientSanity";

let apiHandle = axios.create({
  baseURL: `*[_type=="products"]`,
});

let Get = (endPoint: any) => {
  // return client.apiHandle.get(endPoint);
};

export {Get}