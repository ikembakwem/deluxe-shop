import { Product } from "./types";

export function assertIsProducts(productsData: unknown): asserts productsData is Product[] {
  if (!Array.isArray(productsData)) {
    throw new Error("Data returned is not posts");
  }
  if (productsData.length === 0) {
    return;
  }
}
