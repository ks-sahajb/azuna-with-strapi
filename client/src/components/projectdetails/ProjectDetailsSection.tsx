import { FC } from "react";

import initTranslations from "@/app/i18n";

import { IProjectDetail } from "@/apis/dtos/blocks-component.type";
import { getLocale } from "@/apis/getLocale";

import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

// ======================= Component =====================
/**
 * ProjectDetailsSection component
 * Renders the main details section for a project, including description and images.
 */

type IProjectDetailsSectionProps = {
  project: IProjectDetail;
};

const ProjectDetailsSection: FC<IProjectDetailsSectionProps> = async (
  porps,
) => {
  const locale = await getLocale();

  const { t } = await initTranslations(locale, ["common"]);

  const { challenge, solution, gallary } = porps.project;

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Challenge & Solution */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {t("projectDetails.challangeHeading", {
                    defaultValue: "The Challenge",
                  })}
                </h2>
                <p className="text-gray-600">{challenge}</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {t("projectDetails.solutionHeading", {
                    defaultValue: "Our Solution",
                  })}
                </h2>
                <p className="text-gray-600">{solution}</p>
              </div>
            </div>
            {/* Gallery */}
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {t("projectDetails.galleryHeading", {
                  defaultValue: "Project Gallery",
                })}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {gallary.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-xl shadow-sm"
                  >
                    <BaseStrapiImage
                      {...image}
                      imageProps={{
                        className:
                          "aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectDetailsSection;
