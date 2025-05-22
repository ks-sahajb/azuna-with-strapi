import { IBlocks } from "@/apis/dtos/blocks-renderer.type";

import BaseHeroSection from "@/components/BaseHeroSection";
import CtaSection from "@/components/home/CtaSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/home/Testimonials";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

function blockRenderer(block: IBlocks, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <BaseHeroSection data={block} key={index} />;
    case "blocks.services":
      return <ServiceSection data={block} key={index} />;
    case "blocks.testimonials":
      return <Testimonials data={block} key={index} />;
    case "blocks.cta":
      return <CtaSection data={block} key={index} />;
    case "blocks.project-section":
      return <ProjectsGrid data={block} key={index} />;
    default:
      return null;
  }
}

const BlockRenderer = ({ blocks }: { blocks: IBlocks[] }) => {
  return blocks.map((block, index) => blockRenderer(block, index));
};

export default BlockRenderer;
