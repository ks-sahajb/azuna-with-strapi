import { getHomePage } from "@/apis/home-page";

import BlockRenderer from "@/components/common/BlockRenderer";

const LandingPage = async () => {
  const { data } = await getHomePage();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <BlockRenderer blocks={data.blocks} />
      </main>
    </div>
  );
};

export default LandingPage;
