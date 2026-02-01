import { TeamCard } from "@/components/ui/cards/TeamCard";
import FormerPresidentCard from "@/components/ui/cards/FormerPresidentCard";
import placeholder from "../../../../public/placeholder.jpeg";
import Image from "next/image";

export default function TeamPage() {
  const teamMembers = [
    {
      image: placeholder,
      name: "John Anderson",
      role: "President",
      major: "Mechanical Engineering",
      bio: "Passionate about building innovative solutions and leading ASME towards sustainability and efficiency.",
    },
    {
      image: placeholder,
      name: "Sarah Martinez",
      role: "Vice President",
      major: "Electrical Engineering",
      bio: "Driven by the challenge of designing efficient electrical systems for next-generation vehicles.",
      
    },
    {
      image: placeholder,
      name: "David Kim",
      role: "Mechanical Lead",
      major: "Mechanical Engineering",
      bio: "Focused on innovation in energy-efficient designs and mechanical optimization for competition vehicles.",
      
    },
    {
      image: placeholder,
      name: "Emily Chen",
      role: "Software Lead",
      major: "Computer Engineering",
      bio: "Passionate about integrating software and hardware to achieve cutting-edge vehicle control systems.",
      
    },
    {
      image: placeholder,
      name: "Michael Rodriguez",
      role: "Design Lead",
      major: "Industrial Design",
      bio: "Dedicated to crafting ergonomic and aerodynamic vehicle designs that combine efficiency and aesthetics.",
      
    }
  ];

  const formerPresidents = [
    {
      image: placeholder,
      name: "Robert Johnson",
      tenure: "2023 - 2024",
      role: "Former President"
    },
    {
      image: placeholder,
      name: "Jessica Williams",
      tenure: "2022 - 2023",
      role: "FormerPresident"
    },
    {
      image: placeholder,
      name: "Marcus Thompson",
      tenure: "2021 - 2022",
      role: "Former President"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Leadership.png"
            alt="Team Background"
            fill
            className="object-cover"
          />
        
          {/* Right gradient */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4 drop-shadow-lg">
                ASME AT PURDUE NORTHWEST
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 drop-shadow-2xl">
                Building the{' '}
                <span className="text-yellow-500 drop-shadow-2xl">next generation</span>{' '}
                of engineers
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-lg px-6 py-3 shadow-lg">
                  <p className="text-yellow-500 font-bold text-2xl">50+</p>
                  <p className="text-gray-800 text-sm font-medium">Active Members</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-lg px-6 py-3 shadow-lg">
                  <p className="text-yellow-500 font-bold text-2xl">15+</p>
                  <p className="text-gray-800 text-sm font-medium">Projects Annually</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-lg px-6 py-3 shadow-lg">
                  <p className="text-yellow-500 font-bold text-2xl">10+</p>
                  <p className="text-gray-800 text-sm font-medium">Industry Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16">

      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        Meet the Lead Officers
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        From students to the leading engineers of tomorrow — pushing for an efficient future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            variant="default"
            image={member.image}
            name={member.name}
            role={member.role}
            major={member.major}
            bio={member.bio}
            
          />
        ))}
      </div>

      {/* Former Presidents Section */}
      <div className="mt-20 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Former Presidents
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Honoring the leaders who shaped our organization&apos;s legacy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formerPresidents.map((president, index) => (
            <FormerPresidentCard
              key={index}
              variant="default"
              image={president.image}
              name={president.name}
              tenure={president.tenure}
              role={president.role}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
