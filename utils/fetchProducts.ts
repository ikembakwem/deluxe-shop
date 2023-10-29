import { URL } from "url";
import { Product } from "./types";

export async function fetchProducts() {
  const uri = process.env.API_URL;
  const res = await fetch(uri as RequestInfo | URL);

  const products = (await res.json()) as unknown;
  assertIsProducts(products);
  return products;
}

function assertIsProducts(productsData: unknown): asserts productsData is Product[] {
  if (!Array.isArray(productsData)) {
    throw new Error("Data returned is not posts");
  }
  if (productsData.length === 0) {
    return;
  }

  productsData.forEach((product) => {
    chectProp("_id", "string", product);
    chectProp("brand", "string", product);
    chectProp("category", "string", product);
    chectProp("countInStock", "number", product);
    chectProp("description", "string", product);
    chectProp("image", "string", product);
    chectProp("name", "string", product);
    chectProp("numReviews", "number", product);
    chectProp("price", "number", product);
    chectProp("rating", "number", product);
  });
}

function chectProp(prop: keyof Product, type: "string" | "number", obj: Product) {
  if (prop in obj) {
    if (typeof obj[prop] !== type) {
      throw new Error(`Product rating is not a ${type} type`);
    }
  } else {
    throw new Error(`Product does not have ${prop}`);
  }
}
