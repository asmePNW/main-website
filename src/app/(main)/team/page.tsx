import {TeamCard} from "@/components/ui/cards/TeamCard";
export default function TeamPage() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800">Meet the lead engineers</h1>
             <p className="text-center text-2xl">from student to leading engineers of tomorrow, pushing for an efficient future</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                <TeamCard
                    image="/placeholder.jpeg"
                    name="John Anderson"
                    role="CEO & Founder"
                    bio="Passionate about building innovative solutions..."
                    socialLinks={{
                    linkedin: "https://linkedin.com/in/john",
                    twitter: "https://twitter.com/john",
                    github: "https://github.com/john",
                    email: "john@example.com"
                }}/>
                <TeamCard
                    image="/placeholder.jpeg"
                    name="John Anderson"
                    role="CEO & Founder"
                    bio="Passionate about building innovative solutions..."
                    socialLinks={{
                    linkedin: "https://linkedin.com/in/john",
                    twitter: "https://twitter.com/john",
                    github: "https://github.com/john",
                    email: "john@example.com"
                }}/>
                <TeamCard
                    image="/placeholder.jpeg"
                    name="John Anderson"
                    role="CEO & Founder"
                    bio="Passionate about building innovative solutions..."
                    socialLinks={{
                    linkedin: "https://linkedin.com/in/john",
                    twitter: "https://twitter.com/john",
                    github: "https://github.com/john",
                    email: "john@example.com"
                }}/>
                <TeamCard
                    image="/placeholder.jpeg"
                    name="John Anderson"
                    role="CEO & Founder"
                    bio="Passionate about building innovative solutions..."
                    socialLinks={{
                    linkedin: "https://linkedin.com/in/john",
                    twitter: "https://twitter.com/john",
                    github: "https://github.com/john",
                    email: "john@example.com"
                }}/>
                <TeamCard
                    image="/placeholder.jpeg"
                    name="John Anderson"
                    role="CEO & Founder"
                    bio="Passionate about building innovative solutions..."
                    socialLinks={{
                    linkedin: "https://linkedin.com/in/john",
                    twitter: "https://twitter.com/john",
                    github: "https://github.com/john",
                    email: "john@example.com"
                }}/>

            </div>
        </div>
    );
}
