import Link from 'next/link';
import {notFound} from 'next/navigation';
import SubProjectCard from '@/components/ui/cards/SubProjectCard';

// Sub-projects data for each project
const subProjectsData: Record<string, {
    id: string;
    title: string;
    subProjects: {
        slug: string;
        title: string;
        description: string;
        image: string;
    }[];
}> = {
    'machine-redesign': {
        id: 'machine-redesign',
        title: 'Machine Redesign',
        subProjects: [
            {
                slug: 'component-a',
                title: 'Component A - Drive System',
                description: 'Redesign of the primary drive mechanism with focus on torque optimization and energy efficiency.',
                image: '/square1.png'
            },
            {
                slug: 'component-b',
                title: 'Component B - Control Interface',
                description: 'Modern control system with digital interface and real-time monitoring capabilities.',
                image: '/square2.jpg'
            },
            {
                slug: 'component-c',
                title: 'Component C - Cooling System',
                description: 'Advanced thermal management system to maintain optimal operating temperatures.',
                image: '/square4.jpg'
            }
        ]
    },
    'solar-car': {
        id: 'solar-car',
        title: 'Solar Car',
        subProjects: [
            {
                slug: 'car-1',
                title: 'Car 1 - Prototype Genesis',
                description: 'First generation solar car prototype focused on establishing core design principles and baseline performance.',
                image: '/square1.png'
            },
            {
                slug: 'car-2',
                title: 'Car 2 - Performance Evolution',
                description: 'Second generation with improved aerodynamics, enhanced solar array efficiency, and lightweight materials.',
                image: '/square2.jpg'
            },
            {
                slug: 'car-3',
                title: 'Car 3 - Competition Ready',
                description: 'Competition-optimized vehicle with advanced telemetry, race-proven reliability, and maximum efficiency.',
                image: '/square4.jpg'
            }
        ]
    },
    'rover-team': {
        id: 'rover-team',
        title: 'Rover Team',
        subProjects: [
            {
                slug: 'rover-mk1',
                title: 'Rover MK-1',
                description: 'Initial rover design focusing on basic mobility and terrain navigation capabilities.',
                image: '/square2.jpg'
            },
            {
                slug: 'rover-mk2',
                title: 'Rover MK-2',
                description: 'Enhanced rover with improved suspension, autonomous navigation, and robotic arm integration.',
                image: '/square1.png'
            },
            {
                slug: 'rover-mk3',
                title: 'Rover MK-3',
                description: 'Competition-grade rover with advanced AI, science instruments, and field-tested reliability.',
                image: '/square4.jpg'
            }
        ]
    },
    'wind-turbine': {
        id: 'wind-turbine',
        title: 'Wind Turbine',
        subProjects: [
            {
                slug: 'blade-design',
                title: 'Blade Design & Aerodynamics',
                description: 'Optimized blade profile using CFD analysis for maximum energy capture across wind speeds.',
                image: '/square1.png'
            },
            {
                slug: 'power-electronics',
                title: 'Power Electronics System',
                description: 'Custom power conversion and grid integration system with smart monitoring capabilities.',
                image: '/square2.jpg'
            },
            {
                slug: 'structural-tower',
                title: 'Structural Tower & Mount',
                description: 'Engineered mounting system designed for campus installation with safety and stability focus.',
                image: '/square4.jpg'
            }
        ]
    },
    '3d-printing-hub': {
        id: '3d-printing-hub',
        title: '3D Printing Hub',
        subProjects: [
            {
                slug: 'fdm-station',
                title: 'FDM Printing Station',
                description: 'Fused deposition modeling workstation with multiple printers for rapid prototyping.',
                image: '/square4.jpg'
            },
            {
                slug: 'resin-lab',
                title: 'Resin Printing Lab',
                description: 'High-resolution SLA/DLP printing facility for detailed parts and smooth surface finishes.',
                image: '/square2.jpg'
            },
            {
                slug: 'training-program',
                title: 'Training Program',
                description: 'Comprehensive training curriculum covering design, slicing, printing, and post-processing.',
                image: '/square1.png'
            }
        ]
    },
    'biomedical-devices': {
        id: 'biomedical-devices',
        title: 'Biomedical Devices',
        subProjects: [
            {
                slug: 'prosthetic-hand',
                title: 'Prosthetic Hand',
                description: 'Low-cost, 3D-printed prosthetic hand with customizable grip patterns and adaptive control.',
                image: '/square2.jpg'
            },
            {
                slug: 'mobility-aid',
                title: 'Adaptive Mobility Aid',
                description: 'Adjustable walker with smart sensors and stability features for rehabilitation patients.',
                image: '/square1.png'
            },
            {
                slug: 'therapy-device',
                title: 'Physical Therapy Device',
                description: 'Exercise and rehabilitation tool with progress tracking and adjustable resistance.',
                image: '/square4.jpg'
            }
        ]
    }
};

export default async function SubProjectsPage({params}: {
    params: Promise<{id: string}>
}) {
    const {id} = await params;
    const projectData = subProjectsData[id];

    if (!projectData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {projectData.title} Sub-Projects
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Explore the individual components and iterations that make up the {projectData.title} project. 
                        Each sub-project represents a focused effort on specific aspects of the overall initiative.
                    </p>
                </div>

                {/* Sub-Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.subProjects.map((subProject) => (
                        <SubProjectCard
                            key={subProject.slug}
                            href={`/projects/${projectData.id}/sub-projects/${subProject.slug}`}
                            imageSrc={subProject.image}
                            title={subProject.title}
                            description={subProject.description}
                            imageAlt={subProject.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
