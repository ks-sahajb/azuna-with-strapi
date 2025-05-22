import React from "react";

import { IProject } from "@/apis/dtos/projects-page.type";

import ProjectCard from "@/components/projects/ProjectCard";

export type IProjectsGridProps = { data?: IProject };

const ProjectsGrid: React.FC<IProjectsGridProps> = (props) => {
  const { data } = props;

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.Projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
