import { getHomePage } from "@/apis/home-page";
import BlockRenderer from "@/components/BlockRenderer";

export default async function LandingPage() {
  const { data } = await getHomePage();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <BlockRenderer blocks={data.blocks} />
      </main>
    </div>
  );
}
