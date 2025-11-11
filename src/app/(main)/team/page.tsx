import { TeamCard } from "@/components/ui/cards/TeamCard";
import placeholder from "../../../../public/placeholder.jpeg";

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Meet the Lead Engineers
      </h1>
      <p className="text-center text-lg md:text-2xl text-gray-600 max-w-3xl">
        From students to the leading engineers of tomorrow — pushing for an efficient future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 items-stretch">
        <TeamCard
          image={placeholder}
          name="John Anderson"
          role="President"
          major="Mechanical Engineering"
          bio="Passionate about building innovative solutions and leading ASME towards sustainability and efficiency."
          socialLinks={{
            linkedIn: "https://linkedin.com/in/john",
            handshake: "https://joinhandshake.com/john",
            gitHub: "https://github.com/john",
            email: "john@example.com",
          }}
        />

        <TeamCard
          image={placeholder}
          name="Sarah Martinez"
          role="Vice President"
          major="Electrical Engineering"
          bio="Driven by the challenge of designing efficient electrical systems for next-generation vehicles."
          socialLinks={{
            linkedIn: "https://linkedin.com/in/sarah",
            handshake: "https://joinhandshake.com/sarah",
            gitHub: "https://github.com/sarah",
            email: "sarah@example.com",
          }}
        />

        <TeamCard
          image={placeholder}
          name="David Kim"
          role="Mechanical Lead"
          major="Mechanical Engineering"
          bio="Focused on innovation in energy-efficient designs and mechanical optimization for competition vehicles."
          socialLinks={{
            linkedIn: "https://linkedin.com/in/david",
            handshake: "https://joinhandshake.com/david",
            gitHub: "https://github.com/david",
            email: "david@example.com",
          }}
        />

        <TeamCard
          image={placeholder}
          name="Emily Chen"
          role="Software Lead"
          major="Computer Engineering"
          bio="Passionate about integrating software and hardware to achieve cutting-edge vehicle control systems."
          socialLinks={{
            linkedIn: "https://linkedin.com/in/emily",
            handshake: "https://joinhandshake.com/emily",
            gitHub: "https://github.com/emily",
            email: "emily@example.com",
          }}
        />

        <TeamCard
          image={placeholder}
          name="Michael Rodriguez"
          role="Design Lead"
          major="Industrial Design"
          bio="Dedicated to crafting ergonomic and aerodynamic vehicle designs that combine efficiency and aesthetics."
          socialLinks={{
            linkedIn: "https://linkedin.com/in/michael",
            handshake: "https://joinhandshake.com/michael",
            gitHub: "https://github.com/michael",
            email: "michael@example.com",
          }}
        />
      </div>
    </div>
  );
}
