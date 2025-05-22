import { Star, User } from "react-feather";

import React, { FC } from "react";

import { IReview } from "@/apis/dtos/blocks-component.type";

import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

export type IReviewCardProps = IReview;

// ======================= Component =====================
/**
 * ReviewCard component
 * Renders a single review/testimonial card.
 */

const ReviewCard: FC<IReviewCardProps> = (props) => {
  const { text, author, company, profile } = props;

  return (
    <div className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-lg">
      {/* ======================= Rating ===================== */}
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-amber-400" size={20} />
        ))}
      </div>

      {/* ======================= Review Text ===================== */}
      <blockquote className="mt-4 text-lg text-gray-700">{text}</blockquote>

      {/* ======================= Author Info ===================== */}
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
