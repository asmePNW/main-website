"use client";

import { useState, useEffect } from "react";
import { TeamCard } from "@/components/ui/cards/TeamCard";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

interface TeamData {
  leadership: TeamMember[];
  mentors: TeamMember[];
  officers: TeamMember[];
  advisors: TeamMember[];
}

interface ApiResponse {
  source: string;
  count: number;
  data: TeamData;
  error?: string;
}

function TeamSection({ title, description, members }: { 
  title: string; 
  description?: string;
  members: TeamMember[];
}) {
  if (members.length === 0) return null;
  
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {description && (
        <p className="text-lg text-gray-600 mb-8">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
        {members.map((member, index) => (
          <TeamCard
            key={index}
            variant="default"
            image={member.image}
            name={member.name}
            role={member.position}
            major=""
            bio=""
          />
        ))}
      </div>
    </div>
  );
}

export default function TestTeamPage() {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await fetch("/api/pnw-team");
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data: ApiResponse = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setTeamData(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch team");
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Loading team...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {teamData ? (
          <>
            <TeamSection 
              title="Leadership" 
              description="Leading ASME towards innovation and excellence."
              members={teamData.leadership} 
            />
            <TeamSection 
              title="Mentors" 
              description="Guiding the next generation of engineers."
              members={teamData.mentors} 
            />
            <TeamSection 
              title="Officers" 
              description="The dedicated team driving our mission forward."
              members={teamData.officers} 
            />
            <TeamSection 
              title="Advisors" 
              description="Providing expertise and strategic guidance."
              members={teamData.advisors} 
            />
          </>
        ) : (
          <p className="text-gray-600">No team members found</p>
        )}
      </div>
    </div>
  );
}
