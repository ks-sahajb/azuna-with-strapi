import { ArrowRight } from "react-feather";

import { FC } from "react";

import { IProjectCard } from "@/apis/dtos/blocks-component.type";

import BaseLink from "@/components/ui/BaseLink";
import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

export type IProjectCardProps = IProjectCard;

const ProjectCard: FC<IProjectCardProps> = (props) => {
  const { image, badge, button, description, title, tags } = props;
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        {image && (
          <BaseStrapiImage
            {...image}
            imageProps={{
              className:
                "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
              width: 600,
              height: 400,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm"
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="mb-2 inline-block text-sm font-medium text-cyan-600">
          {badge.text}
        </span>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <BaseLink
          href={button.href}
          className="inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-700"
          aria-label={`View project: ${title}`}
        >
          {button.text}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </BaseLink>
      </div>
    </div>
  );
};

export default ProjectCard;
