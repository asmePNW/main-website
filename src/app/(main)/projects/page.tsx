import {BlogCard} from "@/ui/BlogCard";
export default function ProjectsPage() {
    return (
        <div className="p-50 min-h-screen items-center justify-center bg-gray-100 ">
            <h1
                className="text-4xl font-bold text-center">Projects</h1>
                <p className="text-center mb-10 text-2xl">Pushing ourselves to achieve newer innovation</p>
            <div className=" grid grid-cols-4 gap-5">
                <BlogCard
                    image="/car.webp"
                    date="June 4, 2020"
                    category="ANIMALS"
                    categoryColor="teal"
                    title="Hero dog protected human"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                <BlogCard
                    image="/car.webp"
                    date="June 4, 2020"
                    category="ANIMALS"
                    categoryColor="teal"
                    title="Hero dog protected human"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                <BlogCard
                    image="/car.webp"
                    date="June 4, 2020"
                    category="ANIMALS"
                    categoryColor="teal"
                    title="Hero dog protected human"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                      <BlogCard
                    image="/car.webp"
                    date="June 4, 2020"
                    category="ANIMALS"
                    categoryColor="teal"
                    title="Hero dog protected human"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                      <BlogCard
                    image="/car.webp"
                    date="June 4, 2020"
                    category="ANIMALS"
                    categoryColor="teal"
                    title="Hero dog protected human"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>  <BlogCard
                    image="/car.webp"
                    date="June 4, 2020"
                    category="ANIMALS"
                    categoryColor="teal"
                    title="Hero dog protected human"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>

            </div>
        </div>
    );
}