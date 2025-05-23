"use client";

import { FC, useState } from "react";

import { IAboutBlocks, IAboutPage } from "@/apis/dtos/blocks-component.type";

import HistoryTab from "@/components/aboutus/HistoryTab";
import MissionTab from "@/components/aboutus/MissionTab";
import TeamTab from "@/components/aboutus/TeamTab";

export type ITabSection = { data: IAboutPage };

/**
 * Renders the correct tab component based on the block type.
 */
const renderTabComponent = (block: IAboutBlocks) => {
  switch (block.__component) {
    case "blocks.misson-tab":
      return <MissionTab data={block} key={block.id} />;
    case "blocks.team-tab":
      return <TeamTab data={block} key={block.id} />;
    case "blocks.history-tab":
      return <HistoryTab data={block} key={block.id} />;
    default:
      return null;
  }
};

// ======================= Main Component =======================
/**
 * TabSection component
 * Renders a tabbed interface for the About Us page, allowing users to switch between Mission, Team, and History tabs.
 */
const TabSection: FC<ITabSection> = (props) => {
  const { data } = props;

  // State for the currently active tab
  const [activeTab, setActiveTab] = useState<string>(
    data.blocks[1].__component || "blocks.misson-tab",
  );

  return (
    <>
      {/* Tab navigation bar */}
      <div className="sticky top-20 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {data.blocks.map(
              (block, index) =>
                (block.__component === "blocks.misson-tab" ||
                  block.__component === "blocks.team-tab" ||
                  block.__component === "blocks.history-tab") && (
                  <button
                    key={index}
                    onClick={() => setActiveTab(block.__component)}
                    className={`py-4 text-sm font-medium transition-colors ${
                      activeTab === block.__component
                        ? "text-cyan-600 border-b-2 border-cyan-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {block.Tab?.heading || "Heading"}
                  </button>
                )
            )}
          </div>
        </div>
      </div>

      {/* Tab content area */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {data.blocks
          .filter((block) => block.__component === activeTab)
          .map(renderTabComponent)}
      </div>
    </>
  );
};

export default TabSection;
