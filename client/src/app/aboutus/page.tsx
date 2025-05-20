import { getAboutPage } from "@/apis/about-page";
import TabSection from "@/components/aboutus/TabSection";
import BaseHeroSection from "@/components/BaseHeroSection";

export default async function AboutPage() {
  const { data } = await getAboutPage();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        {data.blocks[0].__component === "blocks.hero-section" && (
          <BaseHeroSection data={data.blocks[0]} />
        )}
        <TabSection data={data} />
      </main>
    </div>
  );
}
