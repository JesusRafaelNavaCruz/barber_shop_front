"use client";

import { PageBlock } from "@/types/pages";
import HeroBlockRenderer from "./HeroBlockRenderer";
import ServicesBlocks from "./ServiceBlocks";

interface PageBlockRendererProps {
  blocks: PageBlock[];
}

export default function PageBlockRenderer({ blocks }: PageBlockRendererProps) {
    
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case "hero-block":
            return <HeroBlockRenderer key={`${block.blockType}-${index}`} block={block} />;

          case "service-block":
            return <ServicesBlocks key={`${block.blockType}-${index}`} block={block} />
          
          // Aquí irán más tipos de bloques en el futuro
          default:
            console.warn(`Block type not implemented`);
            return null;
        }
      })}
    </>
  );
}
