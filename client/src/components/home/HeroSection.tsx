import { IHeroSection } from "@/apis/dtos/home-page.type";
import { FC } from "react";
import { ArrowRight } from "react-feather";
import BaseLink from "../ui/BaseLink";
import BaseStrapiImage from "../ui/BaseStrapiImage";

export type IHeroSectionProps = { data: IHeroSection };

const HeroSection: FC<IHeroSectionProps> = async (props) => {
  const { badge, button, title, description, image } = props.data;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 place-items-center lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-800 shadow-sm">
                {badge.text}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mt-4 max-w-[600px] text-lg text-gray-600 md:text-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <BaseLink
                href={button[0].href}
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:from-cyan-700 hover:to-blue-600 hover:shadow-lg"
              >
                {button[0].text}
                <ArrowRight
                  size={18}
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </BaseLink>
              <BaseLink href={button[1].href} intent="btnlink">
                {button[1].text}
              </BaseLink>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 w-fit">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-cyan-200 to-cyan-50 opacity-75 blur-xl"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
              <BaseStrapiImage {...image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
