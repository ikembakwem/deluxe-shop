/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Rating } from "./Rating";

export type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numOfReviews: number;
};

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col break-words rounded-md p-5 my-5 border border-black/20">
      <div className="">
        <a href="">
          <img src={product.image} alt="Product's image" className="w-full rounded-t-md" />
        </a>
        <div className="shrink grow basis-auto p-5 ">
          <a href="">
            <div className="h-10 overflow-hidden text-ellipsis whitespace-nowrap mb-2 font-bold">
              {product.description}
            </div>
          </a>
          <div>
            <Rating rating={product.rating} numOfReviews={product.numOfReviews} />
          </div>
          <h3 className="font-medium text-2xl text-bsGray">${product.price}</h3>
        </div>
      </div>
    </div>
  );
};
