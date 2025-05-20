import { IProject } from "@/apis/dtos/projects-page.type";
import React from "react";
import ProjectCard from "./ProjectCard";

export type IProjectsGridProps = { data?: IProject };

const ProjectsGrid: React.FC<IProjectsGridProps> = ({ data }) => (
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

export default ProjectsGrid;
