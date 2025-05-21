import React, { FC } from "react";
import { ITeamTab } from "@/apis/dtos/about-page.type";
import TeamMember from "@/components/aboutus/TeamMember";

export type ITeamTabProps = { data: ITeamTab };

const TeamTab: FC<ITeamTabProps> = ({ data }) => {
  const {
    Tab: { title, description },
    Members,
  } = data;

  return (
    <section className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Members.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamTab;
