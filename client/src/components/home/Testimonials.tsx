import { FC } from "react";

import { ITestimonialsSection } from "@/apis/dtos/home-page.type";

import ReviewCard from "@/components/home/ReviewCard";

export type ITestimonialsProps = { data: ITestimonialsSection };

const Testimonials: FC<ITestimonialsProps> = (props) => {
  const { badge, description, title, reviews } = props.data;

  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-br from-cyan-50 to-white py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-800 shadow-sm">
              {badge.text}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-[800px] text-lg text-gray-600">
              {description}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item) => (
            <ReviewCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
