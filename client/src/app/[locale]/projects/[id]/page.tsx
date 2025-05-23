import { FC } from "react";

import { getProjectDetails } from "@/apis/projects-details";

import ErrorState from "@/components/common/ErrorState";
import NotAvailablePage from "@/components/projectdetails/NotAvailablePage";
import ProjectDetailsSection from "@/components/projectdetails/ProjectDetailsSection";
import ProjectHeader from "@/components/projectdetails/ProjectHeader";
import ProjectSidebar from "@/components/projectdetails/ProjectSidebar";

type IProjectDetailsProps = {
  params: Promise<{ id: number }>;
};

const ProjectDetailsPage: FC<IProjectDetailsProps> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const res = await getProjectDetails(id);

  if (!res)
    return <ErrorState message="Some Error Occured While Fetching Data" />;

  const project = res.data[0];

  if (!project) return <NotAvailablePage />;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <ProjectHeader project={project} />
        <section className="w-full bg-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex gap-10">
              <ProjectDetailsSection project={project} />
              <ProjectSidebar project={project} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
