import React, { FC } from "react";
import BaseStrapiImage from "../ui/BaseStrapiImage";
import { IReview } from "@/apis/dtos/home-page.type";
import { Star, User } from "react-feather";

export type IReviewCardProps = IReview;

const ReviewCard: FC<IReviewCardProps> = (props) => {
  const { text, author, company, profile } = props;

  return (
    <div className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-lg">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-amber-400" size={20} />
        ))}
      </div>
      <blockquote className="mt-4 text-lg text-gray-700">{text}</blockquote>
      <div className="mt-6 flex items-center">
        <div className="h-12 w-12 overflow-hidden flex items-center justify-center rounded-full bg-gradient-to-br text-blue-500 from-cyan-100 to-blue-100">
          {profile ? <BaseStrapiImage {...profile} /> : <User />}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
