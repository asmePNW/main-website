import { BlogCard } from "@/components/ui/cards/BlogCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
        Projects
      </h1>
      <p className="text-center mb-10 text-lg sm:text-2xl text-gray-600">
        Pushing ourselves to achieve newer innovation
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <BlogCard
              key={i}
              image="/car.webp"
              date="June 4, 2020"
              category="Engineering"
              categoryColor="teal"
              title="Hero dog protected human"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          ))}
      </div>
    </div>
  );
}
