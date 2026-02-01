import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Button} from '@/components/ui/buttons/Button';

// Article metadata type
interface Article {
    slug : string;
    title : string;
    description : string;
    author : string;
    date : string;
    readTime : string;
    category : string;
    thumbnail?: string;
}

// Project articles data
const projectArticlesData : Record < string, {id: string;
        title: string;
        heroImage: string;
        articles: Article[];} > = {
        'machine-redesign': {
            id: 'machine-redesign',
            title: 'Machine Redesign',
            heroImage: '/square2.jpg',
            articles: [
                {
                    slug: 'fea-analysis-optimization',
                    title: 'Finite Element Analysis and Structural Optimization',
                    description: 'Comprehensive study on FEA techniques used to optimize component design while ma' +
                            'intaining structural integrity and reducing material usage.',
                    author: 'John Anderson',
                    date: 'January 15, 2026',
                    readTime: '12 min read',
                    category: 'Analysis',
                    thumbnail: '/square1.png'
                }, {
                    slug: 'energy-efficiency-improvements',
                    title: 'Achieving 30% Energy Reduction Through Design',
                    description: 'Technical breakdown of the design modifications that led to significant energy c' +
                            'onsumption improvements in industrial machinery.',
                    author: 'Sarah Martinez',
                    date: 'December 10, 2025',
                    readTime: '8 min read',
                    category: 'Energy Systems'
                }, {
                    slug: 'maintenance-reduction-strategies',
                    title: 'Predictive Maintenance and Design for Reliability',
                    description: 'Analysis of how design choices impact maintenance requirements and operational d' +
                            'owntime in manufacturing equipment.',
                    author: 'David Kim',
                    date: 'November 22, 2025',
                    readTime: '10 min read',
                    category: 'Maintenance'
                }
            ]
        },
        'solar-car': {
            id: 'solar-car',
            title: 'Solar Car',
            heroImage: '/square1.png',
            articles: [
                {
                    slug: 'solar-cell-efficiency',
                    title: 'Maximizing Solar Cell Efficiency in Vehicle Applications',
                    description: 'Research on photovoltaic cell selection, arrangement, and optimization for maxim' +
                            'um energy capture in mobile applications.',
                    author: 'Emily Chen',
                    date: 'January 20, 2026',
                    readTime: '15 min read',
                    category: 'Solar Technology',
                    thumbnail: '/square2.jpg'
                }, {
                    slug: 'aerodynamic-design',
                    title: 'Aerodynamic Optimization for Solar Vehicles',
                    description: 'CFD analysis and wind tunnel testing results that informed our carbon fiber body' +
                            ' design.',
                    author: 'Michael Rodriguez',
                    date: 'December 5, 2025',
                    readTime: '11 min read',
                    category: 'Aerodynamics'
                }, {
                    slug: 'battery-management-system',
                    title: 'Custom Battery Management System Design',
                    description: 'Technical details of our BMS architecture, including cell balancing, thermal man' +
                            'agement, and safety features.',
                    author: 'John Anderson',
                    date: 'November 18, 2025',
                    readTime: '13 min read',
                    category: 'Electrical Systems'
                }, {
                    slug: 'race-strategy-analysis',
                    title: 'Data-Driven Race Strategy for Solar Competitions',
                    description: 'Statistical analysis and optimization algorithms used for route planning and ene' +
                            'rgy management during competition.',
                    author: 'Emily Chen',
                    date: 'October 30, 2025',
                    readTime: '9 min read',
                    category: 'Strategy'
                }
            ]
        },
        'rover-team': {
            id: 'rover-team',
            title: 'Rover Team',
            heroImage: '/square2.jpg',
            articles: [
                {
                    slug: 'suspension-design-mars-terrain',
                    title: 'Six-Wheel Suspension Design for Mars-Like Terrain',
                    description: 'Mechanical analysis of our rocker-bogie inspired suspension system and its perfo' +
                            'rmance on rough terrain.',
                    author: 'David Kim',
                    date: 'January 12, 2026',
                    readTime: '14 min read',
                    category: 'Mechanical Design',
                    thumbnail: '/square4.jpg'
                }, {
                    slug: 'autonomous-navigation',
                    title: 'Computer Vision and Autonomous Navigation',
                    description: 'Deep dive into our computer vision pipeline, SLAM implementation, and path plann' +
                            'ing algorithms.',
                    author: 'Emily Chen',
                    date: 'December 20, 2025',
                    readTime: '16 min read',
                    category: 'Software'
                }, {
                    slug: 'robotic-arm-kinematics',
                    title: 'Inverse Kinematics for Sample Collection',
                    description: 'Mathematical modeling and control system design for our 5-DOF robotic arm.',
                    author: 'Sarah Martinez',
                    date: 'November 25, 2025',
                    readTime: '12 min read',
                    category: 'Robotics'
                }
            ]
        },
        'wind-turbine': {
            id: 'wind-turbine',
            title: 'Wind Turbine',
            heroImage: '/square1.png',
            articles: [
                {
                    slug: 'vawt-blade-optimization',
                    title: 'Vertical-Axis Wind Turbine Blade Optimization',
                    description: 'CFD simulation and experimental validation of blade profile designs for improved' +
                            ' efficiency at low wind speeds.',
                    author: 'Michael Rodriguez',
                    date: 'January 8, 2026',
                    readTime: '10 min read',
                    category: 'Aerodynamics'
                }, {
                    slug: 'grid-integration',
                    title: 'Microgrid Integration and Power Electronics',
                    description: 'Technical overview of our smart grid connectivity system and power conditioning ' +
                            'electronics.',
                    author: 'John Anderson',
                    date: 'December 15, 2025',
                    readTime: '9 min read',
                    category: 'Electrical Systems'
                }
            ]
        },
        '3d-printing-hub': {
            id: '3d-printing-hub',
            title: '3D Printing Hub',
            heroImage: '/square4.jpg',
            articles: [
                {
                    slug: 'fdm-vs-sla-comparison',
                    title: 'Comparing FDM, SLA, and SLS Technologies',
                    description: 'Comprehensive comparison of additive manufacturing technologies available in our' +
                            ' facility.',
                    author: 'Sarah Martinez',
                    date: 'January 5, 2026',
                    readTime: '11 min read',
                    category: 'Manufacturing'
                }, {
                    slug: 'design-for-additive-manufacturing',
                    title: 'Design Guidelines for 3D Printing Success',
                    description: 'Best practices and design considerations for optimizing parts for additive manuf' +
                            'acturing.',
                    author: 'Emily Chen',
                    date: 'December 1, 2025',
                    readTime: '8 min read',
                    category: 'Design'
                }
            ]
        },
        'biomedical-devices': {
            id: 'biomedical-devices',
            title: 'Biomedical Devices',
            heroImage: '/square2.jpg',
            articles: [
                {
                    slug: 'low-cost-prosthetic-design',
                    title: 'Designing Affordable Prosthetic Devices',
                    description: 'Engineering approach to creating functional prosthetics at 10% of commercial cos' +
                            'ts using 3D printing and open-source components.',
                    author: 'John Anderson',
                    date: 'January 18, 2026',
                    readTime: '13 min read',
                    category: 'Prosthetics',
                    thumbnail: '/square1.png'
                }, {
                    slug: 'biomechanics-analysis',
                    title: 'Biomechanics of Human Gait and Prosthetic Design',
                    description: 'Analysis of human movement patterns and their implications for assistive device ' +
                            'design.',
                    author: 'Sarah Martinez',
                    date: 'December 12, 2025',
                    readTime: '15 min read',
                    category: 'Biomechanics'
                }, {
                    slug: 'clinical-trial-results',
                    title: 'Clinical Testing Results and User Feedback',
                    description: 'Summary of patient trials, collected feedback, and iterative improvements made t' +
                            'o our devices.',
                    author: 'David Kim',
                    date: 'November 28, 2025',
                    readTime: '10 min read',
                    category: 'Clinical Research'
                }
            ]
        }
    };

export default async function ProjectArticlesPage({params} : {
    params: Promise < {
        id: string
    } >
}) {
    const {id} = await params;
    const projectData = projectArticlesData[id];

    if (!projectData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl ">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Technical Articles
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Meet the talented individuals behind this project. Our team combines diverse
                            expertise in mechanical engineering, electrical systems, software development,
                            and project management to deliver exceptional results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid Section */}
            <section className="bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="space-y-8">
                        {projectData
                            .articles
                            .map((article, index) => (
                                <Link
                                    key={article.slug}
                                    href={`/projects/${projectData.id}/articles/${article.slug}`}
                                    className="group block">
                                    <div
                                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 bg-white">
                                        {/* Image Section */}
                                        {article.thumbnail
                                            ? (
                                                <div className="relative h-64 lg:h-auto">
                                                    <Image
                                                        src={article.thumbnail}
                                                        alt={article.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                                                </div>
                                            )
                                            : (
                                                <div
                                                    className="relative h-64 lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                                    <span className="text-6xl font-bold text-gray-300">
                                                        {article
                                                            .title
                                                            .charAt(0)}
                                                    </span>
                                                </div>
                                            )}

                                        {/* Content Section */}
                                        <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span
                                                    className="text-xs font-semibold text-white bg-black px-3 py-1 rounded-full">
                                                    {article.category}
                                                </span>
                                                <span className="text-sm text-gray-500">{article.date}</span>
                                                <span className="text-sm text-gray-500">•</span>
                                                <span className="text-sm text-gray-500">{article.readTime}</span>
                                            </div>

                                            <h2
                                                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                                                {article.title}
                                            </h2>

                                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                                {article.description}
                                            </p>

                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                    <span className="text-sm font-bold text-gray-500">
                                                        {article
                                                            .author
                                                            .split(' ')
                                                            .map(n => n[0])
                                                            .join('')}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                                                    <p className="text-xs text-gray-500">Author</p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <span
                                                    className="text-sm font-semibold text-black group-hover:underline inline-flex items-center gap-2">
                                                    Read Article
                                                    <svg
                                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Want to Learn More?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore the project overview and meet our team.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={`/projects/${projectData.id}`}>
                            <Button variant="outline" size="lg" className="rounded-2xl">
                                Back to Project
                            </Button>
                        </Link>
                        <Link href={`/projects/${projectData.id}/team`}>
                            <Button variant="black" size="lg" className="rounded-2xl">
                                Meet the Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
