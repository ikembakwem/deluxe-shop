import StarIcon from "@components/icons/star-filled.svg";
import StarOutline from "@components/icons/star-outline.svg";
import StarHalf from "@components/icons/half-star.svg";
import { FC } from "react";

interface Props {
  value: number;
  numOfReviews?: number;
}

export const Rating: FC<Props> = ({ value, numOfReviews }) => {
  return (
    <div className="text-ratings flex gap-x-1">
      <span>{value >= 1 ? <StarIcon /> : value >= 0.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{value >= 2 ? <StarIcon /> : value >= 1.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{value >= 3 ? <StarIcon /> : value >= 2.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{value >= 4 ? <StarIcon /> : value >= 3.5 ? <StarHalf /> : <StarOutline />}</span>
      <span>{value >= 5 ? <StarIcon /> : value >= 4.5 ? <StarHalf /> : <StarOutline />}</span>
      <span className="pl-2 font-semibold text-xs text-bsGray">
        {numOfReviews && `${numOfReviews} reviews`}
      </span>
    </div>
  );
};
