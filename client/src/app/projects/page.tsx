import { getProjectsPage } from "@/apis/projects-page";
import BlockRenderer from "@/components/BlockRenderer";

export default async function ProjectsPage() {
  const { data } = await getProjectsPage();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <BlockRenderer blocks={data.blocks} />
      </main>
    </div>
  );
}
