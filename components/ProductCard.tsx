/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Rating } from "./Rating";
import Link from "next/link";
import { Product } from "@utils/types";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col break-words rounded-md p-5 my-5 border border-black/20">
      <div className="">
        <Link href={`/product/${product._id}`}>
          <img src={product.image} alt="Product's image" className="w-full rounded-t-md" />
        </Link>
        <div className="shrink grow basis-auto p-5 ">
          <Link href={`/product/${product._id}`}>
            <div className="h-10 overflow-hidden text-ellipsis whitespace-nowrap mb-2 font-bold">
              {product.name}
            </div>
          </Link>
          <div>
            <Rating rating={product.rating} numOfReviews={product.numReviews} />
          </div>
          <h3 className="font-medium text-2xl text-bsGray">${product.price}</h3>
        </div>
      </div>
    </div>
  );
};
