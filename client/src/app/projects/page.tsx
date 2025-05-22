import { getProjectsPage } from "@/apis/projects-page";

import BlockRenderer from "@/components/common/BlockRenderer";

const ProjectsPage = async () => {
  const { data } = await getProjectsPage();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <BlockRenderer blocks={data.blocks} />
      </main>
    </div>
  );
};

export default ProjectsPage;
