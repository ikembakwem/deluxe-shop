/* eslint-disable @next/next/no-img-element */
import { Container } from "@components/Container";
import { Rating } from "@components/Rating";
import { fetchProducts } from "@utils/fetchProducts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map((product) => ({
    id: product._id
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const products = await fetchProducts();
  const product = products.find((p) => p._id === id);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="my-6 px-3">
        <Link href="/">
          <button className="inline-flex items-center justify-center p-3 text-white bg-bsBlue text-center rounded-md h-10">
            Go back home
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap">
        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 max-w-full px-3 ">
          <img src={product.image} alt="" className="max-w-full h-auto" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-4/12 max-w-full px-3">
          <div className="flex flex-col text-bsGray">
            <div className="p-5 border-b border-borderColor">
              <h3 className="mb-5 text-3xl">{product.name}</h3>
            </div>
            <div className="p-5 border-b border-borderColor">
              <Rating rating={product.rating} numOfReviews={product.numReviews} />
            </div>
            <div className="p-5 border-b border-borderColor">${product.price}</div>
            <div className="p-5">{product.description}</div>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 max-w-full px-3">
          <div className="flex flex-col min-w-0 break-words border border-black/20 rounded-md">
            <div className="flex flex-col text-bsGray">
              <div className="flex border-b border-borderColor p-5">
                <div className="grow-1 shrink-0 basis-6/12 px-3">Price:</div>
                <div className="grow-1 shrink-0 basis-6/12 px-3">
                  <span className="font-bold">${product.price}</span>
                </div>
              </div>
              <div className="flex border-b border-borderColor p-5">
                <div className="grow-1 shrink-0 basis-6/12 px-3">Status:</div>
                <div className="grow-1 shrink-0 basis-6/12 px-3">
                  <span className="font-bold">
                    {product.countInStock >= 10
                      ? "In Stock"
                      : product.countInStock > 0
                      ? "Few units left!"
                      : "Out of stock!"}
                  </span>
                </div>
              </div>
              <div className="flex p-5">
                <button className="inline-flex items-center justify-center p-3 text-white bg-bsBlue text-center rounded-md h-10">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
