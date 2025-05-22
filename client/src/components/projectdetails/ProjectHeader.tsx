import { ArrowLeft } from "react-feather";

import { FC } from "react";

import { IProjectDetail } from "@/apis/dtos/blocks-component.type";

import BaseLink from "@/components/ui/BaseLink";
import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

type IProjectHeaderProps = { project: IProjectDetail };

/**
 * ProjectHeader component
 * Renders the header section for a project details page.
 */

// ======================= Component =====================

const ProjectHeader: FC<IProjectHeaderProps> = (props) => {
  const { badge, title, tags, hero_image, client, year, description } =
    props.project;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-white py-12 md:py-16">
      <div className="container relative mx-auto px-4">
        <BaseLink
          href="/projects"
          className="group mb-8 flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-cyan-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </BaseLink>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <span className="w-fit rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-medium text-cyan-800 shadow-sm">
              {badge.text}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {tag.text}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Client</p>
                <p className="text-gray-900">{client}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Year</p>
                <p className="text-gray-900">{year}</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-cyan-200 to-cyan-50 opacity-75 blur-xl"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
              {hero_image && (
                <BaseStrapiImage
                  {...hero_image}
                  imageProps={{
                    className: "relative aspect-[4/3] w-full object-cover",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHeader;
