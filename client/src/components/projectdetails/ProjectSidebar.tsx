import { Check, Star, User } from "react-feather";

import { FC } from "react";

import initTranslations from "@/app/i18n";

import { IProjectDetail } from "@/apis/dtos/blocks-component.type";
import { getLocale } from "@/apis/getLocale";

import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

// ======================= Component =====================
/**
 * ProjectSidebar component
 * Renders a sidebar with project metadata and links.
 */

type IProjectSidebarProps = {
  project: IProjectDetail;
};

const ProjectSidebar: FC<IProjectSidebarProps> = async (props) => {
  const locale = await getLocale();

  const { t } = await initTranslations(locale, ["common"]);

  const { results, testimonial, tags } = props.project;

  return (
    <div className="space-y-8 w-3/6">
      {/* Results */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {t("projectDetails.resultHeading", { defaultValue: "Key Results" })}
        </h3>
        <ul className="mt-4 space-y-3">
          {results.map((result) => (
            <li key={result.id} className="flex items-start">
              <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600" />
              <span className="text-gray-600">{result.text}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Testimonial */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star className="h-5 w-5 fill-amber-400" key={i} />
          ))}
        </div>
        <blockquote className="mt-4 text-gray-700">
          "{testimonial.text}"
        </blockquote>
        <div className="mt-6 flex items-center">
          <div className="">
            {testimonial.profile ? (
              <BaseStrapiImage
                {...testimonial.profile}
                imageProps={{
                  className: "h-12 w-12 rounded-full object-cover",
                }}
              />
            ) : (
              <User />
            )}
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.company}</p>
          </div>
        </div>
      </div>
      {/* Technologies */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {t("projectDetails.technologyHeading", {
            defaultValue: "Technologies Used",
          })}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
