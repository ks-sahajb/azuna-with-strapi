import { IBlocks } from "@/apis/dtos/blocks-renderer.type";
import BaseHeroSection from "./BaseHeroSection";
import CtaSection from "./home/CtaSection";
import ServiceSection from "./home/ServiceSection";
import Testimonials from "./home/Testimonials";
import ProjectsGrid from "./projects/ProjectsGrid";

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
