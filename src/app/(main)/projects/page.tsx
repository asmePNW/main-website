import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ui/cards/ProjectCard';
import DetailedProjectCard from '@/components/ui/cards/DetailedProjectCard';

export default function ProjectsPage() {
    const projectCategories = [
        {
            title: 'Project 1',
            image: '/square1.png',
            link: '/projects/machine-redesign'
        }, {
            title: 'Project 2',
            image: '/square2.jpg',
            link: '/projects/solar-car'
        }, {
            title: 'Project 3',
            image: '/square4.jpg',
            link: '/projects/rover-team'
        }, {
            title: 'Project 4',
            image: '/square1.png',
            link: '/projects/wind-turbine'
        }, {
            title: 'Project 5',
            image: '/square2.jpg',
            link: '/projects/3d-printing-hub'
        }, {
            title: 'Project 6',
            image: '/square4.jpg',
            link: '/projects/biomedical-devices'
        }
    ];


    const allProjects = [
        {
            id: 'machine-redesign',
            title: 'Machine Redesign',
            category: 'MECHANICAL DESIGN',
            description: 'Innovative redesign of industrial machinery to improve efficiency and reduce energy consumption.',
            image: '/square2.jpg',
            link: '/projects/machine-redesign'
        },
        {
            id: 'solar-car',
            title: 'Solar Car',
            category: 'SUSTAINABLE ENERGY',
            description: 'Development of a high-efficiency solar-powered vehicle for the American Solar Challenge competition.',
            image: '/square1.png',
            link: '/projects/solar-car'
        },
        {
            id: 'rover-team',
            title: 'Rover Team',
            category: 'ROBOTICS',
            description: 'Design and construction of an autonomous rover for the University Rover Challenge.',
            image: '/square2.jpg',
            link: '/projects/rover-team'
        },
        {
            id: 'wind-turbine',
            title: 'Wind Turbine',
            category: 'RENEWABLE ENERGY',
            description: 'Small-scale wind turbine design for sustainable campus energy generation.',
            image: '/square1.png',
            link: '/projects/wind-turbine'
        },
        {
            id: '3d-printing-hub',
            title: '3D Printing Hub',
            category: 'MANUFACTURING',
            description: 'Hands-on training with professional-grade additive manufacturing tools.',
            image: '/square4.jpg',
            link: '/projects/3d-printing-hub'
        },
        {
            id: 'biomedical-devices',
            title: 'Biomedical Devices',
            category: 'BIOENGINEERING',
            description: 'Development of assistive medical devices for improved patient care and rehabilitation.',
            image: '/square2.jpg',
            link: '/projects/biomedical-devices'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Combined Hero and Category Section with Extended Background */}
            <section className="relative overflow-hidden">
                {/* Background Image - extends to category section */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/project-cover.jpg"
                        alt="Hero Background"
                        fill
                        className="opacity-30 object-cover"/>
                    {/* Left side gradient - small */}
                 
                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-100 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 pt-20 pb-12">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl">
                            <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 drop-shadow-lg">
                                STUDENT INNOVATIONS
                            </p>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                                Innovation is{' '}
                                <span className="text-yellow-400 drop-shadow-2xl">designed and built</span>
                            </h1>
                            <p className="text-white text-lg mb-8 max-w-2xl drop-shadow-lg">
                                Discover cutting-edge student projects pushing boundaries and creating solutions
                                for tomorrow's challenges.
                            </p>
                            <Link
                                href="#featured"
                                className="inline-block bg-white text-purdue-black px-8 py-3 rounded font-semibold hover:bg-purdue-gold hover:text-white transition-colors duration-300 shadow-xl">
                                Explore Projects
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Explore Projects by Category - inside the same section */}
                <div className="relative z-10 py-16 px-6 lg:px-12">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-white">
                                Featured Projects
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                            {projectCategories.map((category, index) => (
                                <ProjectCard
                                    key={index}
                                    variant="default"
                                    title={category.title}
                                    image={category.image}
                                    link={category.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="featured" className="py-16 px-6 lg:px-12 bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-purdue-black">
                            All Projects
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allProjects.map((project) => (
                            <DetailedProjectCard
                                key={project.id}
                                variant="default"
                                id={project.id}
                                title={project.title}
                                category={project.category}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
