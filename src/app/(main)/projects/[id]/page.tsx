import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import SubProjectCard from '@/components/ui/cards/SubProjectCard';
import {Button} from '@/components/ui/buttons/Button';

// Project data
const projectsData : Record < string, {
        id: string;
        title: string;
        category: string;
        year: number;
        heroImage: string;
        description: string;
        challenge: string;
        solution: string;
        impact: string;
        detailImage: string;
        stats: {
            label: string;
            value: string
        }[];
        team: string[];
    } > = {
        'machine-redesign': {
            id: 'machine-redesign',
            title: 'Machine Redesign',
            category: 'MECHANICAL DESIGN',
            year: 2026,
            heroImage: '/square2.jpg',
            description: 'Innovative redesign of industrial machinery to improve efficiency and reduce ene' +
                    'rgy consumption while maintaining production output.',
            challenge: 'Industrial manufacturing equipment was consuming excessive energy and required f' +
                    'requent maintenance, leading to increased operational costs and downtime.',
            solution: 'Our team redesigned critical components using advanced CAD modeling and finite e' +
                    'lement analysis (FEA) to optimize material distribution and reduce weight while ' +
                    'maintaining structural integrity.',
            impact: 'Achieved 30% reduction in energy consumption, 25% decrease in maintenance requir' +
                    'ements, and improved production throughput by 15%.',
            detailImage: '/square4.jpg',
            stats: [
                {
                    label: 'Energy Reduction',
                    value: '30%'
                }, {
                    label: 'Less Maintenance',
                    value: '25%'
                }, {
                    label: 'Increased Output',
                    value: '15%'
                }
            ],
            team: ['John Anderson', 'Sarah Martinez', 'David Kim']
        },
        'solar-car': {
            id: 'solar-car',
            title: 'Solar Car',
            category: 'SUSTAINABLE ENERGY',
            year: 2025,
            heroImage: '/square1.png',
            description: 'Development of a high-efficiency solar-powered vehicle for the American Solar Ch' +
                    'allenge competition.',
            challenge: 'Design and build a solar-powered vehicle capable of traveling 1,000+ miles using' +
                    ' only solar energy while meeting strict safety and performance requirements.',
            solution: 'Our team integrated advanced photovoltaic cells, aerodynamic carbon fiber body d' +
                    'esign, and custom battery management systems to maximize energy capture and mini' +
                    'mize drag.',
            impact: 'Successfully competed in the American Solar Challenge, achieving 3rd place overa' +
                    'll with an average speed of 45 mph over the 1,200-mile course.',
            detailImage: '/square2.jpg',
            stats: [
                {
                    label: 'Miles Traveled',
                    value: '1,200'
                }, {
                    label: 'Average Speed',
                    value: '45 mph'
                }, {
                    label: 'Solar Efficiency',
                    value: '94%'
                }
            ],
            team: ['Emily Chen', 'Michael Rodriguez', 'John Anderson']
        },
        'rover-team': {
            id: 'rover-team',
            title: 'Rover Team',
            category: 'ROBOTICS',
            year: 2025,
            heroImage: '/square2.jpg',
            description: 'Design and construction of an autonomous rover for the University Rover Challeng' +
                    'e.',
            challenge: 'Create a Mars rover capable of navigating rough terrain, collecting soil samples' +
                    ', and performing autonomous science tasks in a simulated Martian environment.',
            solution: 'Developed a six-wheeled suspension system with independent motor control, integr' +
                    'ated computer vision for autonomous navigation, and custom robotic arm for sampl' +
                    'e collection.',
            impact: 'Placed 5th internationally in the University Rover Challenge, successfully compl' +
                    'eting all science tasks and demonstrating advanced autonomous capabilities.',
            detailImage: '/square1.png',
            stats: [
                {
                    label: 'Competition Rank',
                    value: '5th'
                }, {
                    label: 'Autonomous Tasks',
                    value: '100%'
                }, {
                    label: 'Terrain Coverage',
                    value: '2.5 km'
                }
            ],
            team: ['David Kim', 'Emily Chen', 'Sarah Martinez']
        },
        'wind-turbine': {
            id: 'wind-turbine',
            title: 'Wind Turbine',
            category: 'RENEWABLE ENERGY',
            year: 2024,
            heroImage: '/square1.png',
            description: 'Small-scale wind turbine design for sustainable campus energy generation.',
            challenge: 'Design a compact, efficient wind turbine suitable for campus installation that c' +
                    'ould generate meaningful power while meeting safety and noise requirements.',
            solution: 'Engineered a vertical-axis wind turbine (VAWT) with optimized blade profile, int' +
                    'egrated power electronics, and smart grid connectivity for campus microgrid inte' +
                    'gration.',
            impact: 'Installed turbine generates 2.5 kW at peak capacity, providing power to campus l' +
                    'ighting systems and serving as a hands-on learning platform for students.',
            detailImage: '/square4.jpg',
            stats: [
                {
                    label: 'Peak Power',
                    value: '2.5 kW'
                }, {
                    label: 'Annual Output',
                    value: '8,500 kWh'
                }, {
                    label: 'CO₂ Offset',
                    value: '4.2 tons'
                }
            ],
            team: ['Michael Rodriguez', 'John Anderson', 'David Kim']
        },
        '3d-printing-hub': {
            id: '3d-printing-hub',
            title: '3D Printing Hub',
            category: 'MANUFACTURING',
            year: 2024,
            heroImage: '/square4.jpg',
            description: 'Establishment of a comprehensive 3D printing facility for student projects and r' +
                    'esearch.',
            challenge: 'Students lacked access to modern additive manufacturing equipment for rapid prot' +
                    'otyping and research applications.',
            solution: 'Established a maker space with FDM, SLA, and SLS 3D printers, providing training' +
                    ' workshops and open access to students across all engineering disciplines.',
            impact: 'Over 500 students trained, 200+ projects completed, and significant reduction in' +
                    ' prototyping time and costs for student projects.',
            detailImage: '/square2.jpg',
            stats: [
                {
                    label: 'Students Trained',
                    value: '500+'
                }, {
                    label: 'Projects Completed',
                    value: '200+'
                }, {
                    label: 'Print Hours',
                    value: '3,000+'
                }
            ],
            team: ['Sarah Martinez', 'Emily Chen', 'Michael Rodriguez']
        },
        'biomedical-devices': {
            id: 'biomedical-devices',
            title: 'Biomedical Devices',
            category: 'BIOENGINEERING',
            year: 2023,
            heroImage: '/square2.jpg',
            description: 'Development of assistive medical devices for improved patient care and rehabilit' +
                    'ation.',
            challenge: 'Many assistive medical devices are prohibitively expensive, limiting access for ' +
                    'patients who need them most.',
            solution: 'Designed and prototyped low-cost assistive devices including a custom prosthetic' +
                    ' hand and adjustable mobility aid using 3D printing and open-source electronics.',
            impact: 'Developed devices at 1/10th the cost of commercial alternatives, with prototypes' +
                    ' currently being tested in partnership with local rehabilitation centers.',
            detailImage: '/square1.png',
            stats: [
                {
                    label: 'Cost Reduction',
                    value: '90%'
                }, {
                    label: 'Prototypes Built',
                    value: '12'
                }, {
                    label: 'Patient Tests',
                    value: '25'
                }
            ],
            team: ['John Anderson', 'Sarah Martinez', 'David Kim']
        }
    };

export default async function ProjectDetail({params} : {
    params: Promise < {
        id: string
    } >
}) {
    const {id} = await params;
    const project = projectsData[id];

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-black overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 ">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="opacity-40 object-cover "/>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 py-20">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-white/90 text-base lg:text-lg mb-8 leading-relaxed">
                                {project.description}
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution Section - Autodesk Style */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content - Left Side */}
                        <div className="max-w-xl">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Project Description
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                {project.challenge}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed mb-8">
                                {project.solution}
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                This project is a collaborative effort by ASME students at Purdue Northwest,
                                combining theoretical knowledge with practical engineering skills to address
                                real-world challenges.
                            </p>
                        </div>

                        {/* Image - Right Side */}
                        <div className="relative h-[400px] lg:h-[500px] w-full ">
                            <Image
                                src={project.detailImage}
                                alt={`${project.title} detail`}
                                fill
                                className="object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Stats Section - First Content Block */}
            <section className="py-20 ">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image - Left Side */}
                        <div className="relative h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
                            <Image
                                src={project.heroImage}
                                alt={`${project.title} impact`}
                                fill
                                className="object-cover rounded-2xl"/>
                        </div>

                        {/* Text Content - Right Side */}
                        <div className="max-w-xl order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Collaborative Engineering
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                This project represents the dedication and expertise of our talented ASME
                                student team. Through countless hours of design iterations, testing, and
                                refinement, our team has demonstrated the power of collaborative engineering and
                                innovative problem-solving.
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed mb-8">
                                Each team member brings unique skills and perspectives, contributing to a
                                comprehensive approach that spans from initial concept development through final
                                implementation and testing.
                            </p>

                            {/* Team Members */}
                            <div className="space-y-3">
                                <h3 className="font-semibold text-gray-900 text-lg mb-3">Project Team</h3>
                                {project
                                    .team
                                    .map((member, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                            <span className="text-gray-700">{member}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Projects Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Sub-Projects & Components
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore the individual sub-projects and technical components that make up this
                            larger initiative.
                        </p>
                    </div>

                    {/* Sub-Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <SubProjectCard
                            href={`/projects/${project.id}/sub-projects/mechanical-design`}
                            imageSrc="/square1.png"
                            title="Mechanical Design"
                            description="CAD modeling, structural analysis, and component optimization."
                            imageAlt="Mechanical Design"/>
                        <SubProjectCard
                            href={`/projects/${project.id}/sub-projects/electronics`}
                            imageSrc="/square2.jpg"
                            title="Electronics & Controls"
                            description="Circuit design, embedded systems, and control algorithms."
                            imageAlt="Electronics & Controls"/>
                        <SubProjectCard
                            href={`/projects/${project.id}/sub-projects/testing`}
                            imageSrc="/square4.jpg"
                            title="Testing & Validation"
                            description="Performance testing, data analysis, and system validation."
                            imageAlt="Testing & Validation"/>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Learn More About This Project
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore detailed technical documentation and meet the team behind the project.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={`/projects/${project.id}/articles`}>
                            <Button variant="black" size="lg" className="rounded-2xl">
                                Technical Articles
                            </Button>
                        </Link>
                        <Link href={`/projects/${project.id}/team`}>
                            <Button variant="outline" size="lg" className="rounded-2xl">
                                Meet the Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
