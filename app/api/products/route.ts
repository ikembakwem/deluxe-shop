import { NextApiRequest } from "next";
import { products } from "@lib/products.js";

export async function GET(request: NextApiRequest) {
  return new Response(JSON.stringify(products));
}
