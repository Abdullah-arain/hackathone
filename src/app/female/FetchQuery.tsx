import { client } from "../../lib/ClientSanity";

export default async function FetchData(){
      const data = await client.fetch(`*[_type == "products" && productTypes[0] == "female"]`)
      return data
}