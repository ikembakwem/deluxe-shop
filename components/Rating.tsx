import StarIcon from "@components/icons/star-filled.svg";
import StarOutline from "@components/icons/star-outline.svg";
import StarHalf from "@components/icons/half-star.svg";
import { FC } from "react";

interface Props {
  rating: number;
  numOfReviews?: number;
}

export const Rating: FC<Props> = ({ rating, numOfReviews }) => {
  return (
    <div className="text-ratings flex gap-x-1">
      <span>{rating >= 1 ? <StarIcon /> : rating >= 0.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{rating >= 2 ? <StarIcon /> : rating >= 1.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{rating >= 3 ? <StarIcon /> : rating >= 2.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{rating >= 4 ? <StarIcon /> : rating >= 3.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{rating >= 5 ? <StarIcon /> : rating >= 4.5 ? <StarHalf /> : <StarOutline />}</span>
      <span className="pl-2 font-semibold text-xs text-bsGray">
        {numOfReviews !== 0 ? `${numOfReviews} reviews` : "No Reviews yet"}
      </span>
    </div>
  );
};
