import { IBlocks } from "@/apis/dtos/blocks-renderer.type";
import HeroSection from "./home/HeroSection";

function blockRenderer(block: IBlocks, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection data={block} key={index} />;

    default:
      return null;
  }
}

const BlockRenderer = ({ blocks }: { blocks: IBlocks[] }) => {
  return blocks.map((block, index) => blockRenderer(block, index));
};

export default BlockRenderer;
