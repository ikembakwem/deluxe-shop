import { Container } from "@components/Container";
import { ProductCard } from "@components/ProductCard";
import { assertIsProducts } from "@utils/checkers";
import Link from "next/link";

export const ProductPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http:/localhost:3000/api/products`);

  const products = (await res.json()) as unknown;
  assertIsProducts(products);

  const product = products.find((p) => p._id === params.id);

  if (!product) {
    return null;
  }

  return (
    <Container>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-5 py-3 h-10 rounded-full text-white/60 font-bold bg-gray-600 my-4"
      >
        Go back home
      </Link>
      <div>Dynamic stuffs for </div>
      <ProductCard product={product} />
    </Container>
  );
};

export default ProductPage;
