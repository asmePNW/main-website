import Image from 'next/image';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {Button} from '@/components/ui/buttons/Button';

// Team member type
interface TeamMember {
    name : string;
    role?: string;
    image?: string;
    year?: string;
}

// Team structure type
interface ProjectTeam {
    name : string;
    description?: string;
    members : TeamMember[];
}

// Project team data
const projectTeamsData : Record < string, {id: string;
        title: string;
        heroImage: string;
        presidents: TeamMember[];
        teams: ProjectTeam[];
        advisors: TeamMember[];
        formerPresidents: TeamMember[];} > = {
        'machine-redesign': {
            id: 'machine-redesign',
            title: 'Machine Redesign',
            heroImage: '/square2.jpg',
            presidents: [
                {
                    name: 'Alex Thompson',
                    role: 'President',
                    year: '2025-2026'
                }, {
                    name: 'Maria Garcia',
                    role: 'Vice President',
                    year: '2025-2026'
                }
            ],
            teams: [
                {
                    name: 'Mechanical Engineering Team',
                    description: 'Responsible for CAD design, structural analysis, and prototype development.',
                    members: [
                        {
                            name: 'John Anderson',
                            role: 'Team Lead'
                        }, {
                            name: 'Sarah Martinez',
                            role: 'Design Engineer'
                        }, {
                            name: 'David Kim',
                            role: 'Analysis Specialist'
                        }, {
                            name: 'Emily Chen',
                            role: 'Prototype Engineer'
                        }
                    ]
                }, {
                    name: 'Manufacturing Team',
                    description: 'Handles fabrication, assembly, and quality control.',
                    members: [
                        {
                            name: 'Michael Rodriguez',
                            role: 'Team Lead'
                        }, {
                            name: 'Jennifer Liu',
                            role: 'Fabrication Specialist'
                        }, {
                            name: 'Robert Taylor',
                            role: 'Assembly Coordinator'
                        }
                    ]
                }
            ],
            advisors: [
                {
                    name: 'Dr. Robert Johnson',
                    role: 'Faculty Advisor'
                }, {
                    name: 'Dr. Lisa Wang',
                    role: 'Technical Advisor'
                }
            ],
            formerPresidents: [
                {
                    name: 'James Wilson',
                    year: '2024-2025'
                }, {
                    name: 'Amanda Brown',
                    year: '2023-2024'
                }, {
                    name: 'Carlos Mendez',
                    year: '2022-2023'
                }
            ]
        },
        'solar-car': {
            id: 'solar-car',
            title: 'Solar Car',
            heroImage: '/square1.png',
            presidents: [
                {
                    name: 'Emily Chen',
                    role: 'President',
                    year: '2025-2026'
                }
            ],
            teams: [
                {
                    name: 'Electrical Engineering Team',
                    description: 'Solar panel integration, battery management, and electrical systems.',
                    members: [
                        {
                            name: 'Michael Rodriguez',
                            role: 'Team Lead'
                        }, {
                            name: 'Sarah Chen',
                            role: 'Power Systems Engineer'
                        }, {
                            name: 'David Park',
                            role: 'Electronics Specialist'
                        }, {
                            name: 'Jessica Lee',
                            role: 'Battery Engineer'
                        }
                    ]
                }, {
                    name: 'Mechanical Engineering Team',
                    description: 'Chassis design, aerodynamics, and mechanical systems.',
                    members: [
                        {
                            name: 'John Anderson',
                            role: 'Team Lead'
                        }, {
                            name: 'Amy Wong',
                            role: 'Aerodynamics Engineer'
                        }, {
                            name: 'Tom Harris',
                            role: 'Chassis Designer'
                        }
                    ]
                }, {
                    name: 'Software Team',
                    description: 'Telemetry, data analysis, and control systems.',
                    members: [
                        {
                            name: 'Chris Martin',
                            role: 'Team Lead'
                        }, {
                            name: 'Nina Patel',
                            role: 'Software Developer'
                        }
                    ]
                }, {
                    name: 'Composite Materials Team',
                    description: 'Carbon fiber fabrication and structural composites.',
                    members: [
                        {
                            name: 'Rachel Green',
                            role: 'Team Lead'
                        }, {
                            name: 'Brandon Lee',
                            role: 'Composites Specialist'
                        }, {
                            name: 'Olivia Martinez',
                            role: 'Materials Engineer'
                        }
                    ]
                }
            ],
            advisors: [
                {
                    name: 'Dr. Patricia Moore',
                    role: 'Faculty Advisor'
                }, {
                    name: 'Dr. Kenneth Smith',
                    role: 'Electrical Systems Advisor'
                }
            ],
            formerPresidents: [
                {
                    name: 'Daniel Park',
                    year: '2024-2025'
                }, {
                    name: 'Sophia Johnson',
                    year: '2023-2024'
                }
            ]
        },
        'rover-team': {
            id: 'rover-team',
            title: 'Rover Team',
            heroImage: '/square2.jpg',
            presidents: [
                {
                    name: 'David Kim',
                    role: 'President',
                    year: '2025-2026'
                }, {
                    name: 'Sarah Martinez',
                    role: 'Vice President',
                    year: '2025-2026'
                }
            ],
            teams: [
                {
                    name: 'Mechanical Systems Team',
                    description: 'Suspension, mobility, and robotic arm development.',
                    members: [
                        {
                            name: 'Emily Chen',
                            role: 'Team Lead'
                        }, {
                            name: 'Mark Johnson',
                            role: 'Suspension Engineer'
                        }, {
                            name: 'Lisa Wang',
                            role: 'Robotic Arm Designer'
                        }
                    ]
                }, {
                    name: 'Electrical & Controls Team',
                    description: 'Power systems, motor control, and electronics integration.',
                    members: [
                        {
                            name: 'Alex Thompson',
                            role: 'Team Lead'
                        }, {
                            name: 'Sophie Chen',
                            role: 'Controls Engineer'
                        }, {
                            name: 'Ryan Martinez',
                            role: 'Power Systems Engineer'
                        }
                    ]
                }, {
                    name: 'Software & Autonomy Team',
                    description: 'Computer vision, autonomous navigation, and mission planning.',
                    members: [
                        {
                            name: 'Kevin Zhang',
                            role: 'Team Lead'
                        }, {
                            name: 'Megan Brown',
                            role: 'Computer Vision Engineer'
                        }, {
                            name: 'Tyler Anderson',
                            role: 'Navigation Specialist'
                        }, {
                            name: 'Hannah Kim',
                            role: 'Software Developer'
                        }
                    ]
                }, {
                    name: 'Science & Sample Collection Team',
                    description: 'Soil analysis, sample handling, and science instruments.',
                    members: [
                        {
                            name: 'Nicole Taylor',
                            role: 'Team Lead'
                        }, {
                            name: 'Benjamin Lee',
                            role: 'Science Specialist'
                        }
                    ]
                }, {
                    name: 'Communications Team',
                    description: 'Wireless systems, telemetry, and ground station operations.',
                    members: [
                        {
                            name: 'Andrew Wilson',
                            role: 'Team Lead'
                        }, {
                            name: 'Zoe Martinez',
                            role: 'Telemetry Engineer'
                        }
                    ]
                }
            ],
            advisors: [
                {
                    name: 'Dr. James Foster',
                    role: 'Faculty Advisor'
                }, {
                    name: 'Dr. Angela Chen',
                    role: 'Robotics Advisor'
                }
            ],
            formerPresidents: [
                {
                    name: 'Matthew Rodriguez',
                    year: '2024-2025'
                }, {
                    name: 'Ashley Kim',
                    year: '2023-2024'
                }, {
                    name: 'Justin Lee',
                    year: '2022-2023'
                }
            ]
        },
        'wind-turbine': {
            id: 'wind-turbine',
            title: 'Wind Turbine',
            heroImage: '/square1.png',
            presidents: [
                {
                    name: 'Michael Rodriguez',
                    role: 'President',
                    year: '2024-2025'
                }
            ],
            teams: [
                {
                    name: 'Mechanical Design Team',
                    description: 'Blade design, structural optimization, and tower engineering.',
                    members: [
                        {
                            name: 'John Anderson',
                            role: 'Team Lead'
                        }, {
                            name: 'Laura Martinez',
                            role: 'Blade Designer'
                        }, {
                            name: 'Patrick Lee',
                            role: 'Structural Engineer'
                        }
                    ]
                }, {
                    name: 'Electrical Systems Team',
                    description: 'Generator integration, power electronics, and grid connectivity.',
                    members: [
                        {
                            name: 'David Kim',
                            role: 'Team Lead'
                        }, {
                            name: 'Samantha Brown',
                            role: 'Power Electronics Engineer'
                        }
                    ]
                }
            ],
            advisors: [
                {
                    name: 'Dr. Susan Miller',
                    role: 'Faculty Advisor'
                }
            ],
            formerPresidents: [
                {
                    name: 'Christopher Davis',
                    year: '2023-2024'
                }
            ]
        },
        '3d-printing-hub': {
            id: '3d-printing-hub',
            title: '3D Printing Hub',
            heroImage: '/square4.jpg',
            presidents: [
                {
                    name: 'Sarah Martinez',
                    role: 'Director',
                    year: '2024-2025'
                }
            ],
            teams: [
                {
                    name: 'Operations Team',
                    description: 'Facility management, equipment maintenance, and user training.',
                    members: [
                        {
                            name: 'Emily Chen',
                            role: 'Operations Lead'
                        }, {
                            name: 'Daniel Park',
                            role: 'Training Coordinator'
                        }, {
                            name: 'Melissa Johnson',
                            role: 'Equipment Specialist'
                        }
                    ]
                }, {
                    name: 'Technical Support Team',
                    description: 'Design assistance, troubleshooting, and material selection.',
                    members: [
                        {
                            name: 'Michael Rodriguez',
                            role: 'Technical Lead'
                        }, {
                            name: 'Rachel Kim',
                            role: 'Design Consultant'
                        }, {
                            name: 'Alex Wang',
                            role: 'Materials Specialist'
                        }
                    ]
                }
            ],
            advisors: [
                {
                    name: 'Dr. Jennifer Thompson',
                    role: 'Faculty Advisor'
                }
            ],
            formerPresidents: [
                {
                    name: 'Victoria Chen',
                    year: '2023-2024'
                }, {
                    name: 'Brian Martinez',
                    year: '2022-2023'
                }
            ]
        },
        'biomedical-devices': {
            id: 'biomedical-devices',
            title: 'Biomedical Devices',
            heroImage: '/square2.jpg',
            presidents: [
                {
                    name: 'John Anderson',
                    role: 'President',
                    year: '2023-2024'
                }
            ],
            teams: [
                {
                    name: 'Prosthetics Team',
                    description: 'Design and development of low-cost prosthetic devices.',
                    members: [
                        {
                            name: 'Sarah Martinez',
                            role: 'Team Lead'
                        }, {
                            name: 'Thomas Lee',
                            role: 'Mechanical Designer'
                        }, {
                            name: 'Grace Wong',
                            role: 'Ergonomics Specialist'
                        }
                    ]
                }, {
                    name: 'Mobility Aids Team',
                    description: 'Assistive devices for patient mobility and rehabilitation.',
                    members: [
                        {
                            name: 'David Kim',
                            role: 'Team Lead'
                        }, {
                            name: 'Natalie Brown',
                            role: 'Rehabilitation Engineer'
                        }
                    ]
                }, {
                    name: 'Electronics & Control Team',
                    description: 'Sensor integration, actuator control, and embedded systems.',
                    members: [
                        {
                            name: 'Kevin Chen',
                            role: 'Team Lead'
                        }, {
                            name: 'Amanda Park',
                            role: 'Electronics Engineer'
                        }, {
                            name: 'Joshua Taylor',
                            role: 'Software Developer'
                        }
                    ]
                }, {
                    name: 'Clinical Testing Team',
                    description: 'Patient trials, feedback collection, and iterative improvements.',
                    members: [
                        {
                            name: 'Rebecca Martinez',
                            role: 'Team Lead'
                        }, {
                            name: 'Steven Kim',
                            role: 'Clinical Coordinator'
                        }
                    ]
                }, {
                    name: 'Manufacturing Team',
                    description: '3D printing, fabrication, and assembly of prototypes.',
                    members: [
                        {
                            name: 'Matthew Johnson',
                            role: 'Team Lead'
                        }, {
                            name: 'Isabella Rodriguez',
                            role: 'Fabrication Specialist'
                        }
                    ]
                }, {
                    name: 'Research & Development Team',
                    description: 'Material research, biomechanics analysis, and innovation.',
                    members: [
                        {
                            name: 'Olivia Chen',
                            role: 'Team Lead'
                        }, {
                            name: 'Ethan Lee',
                            role: 'Materials Researcher'
                        }, {
                            name: 'Sophia Wang',
                            role: 'Biomechanics Analyst'
                        }
                    ]
                }, {
                    name: 'Outreach & Partnership Team',
                    description: 'Hospital partnerships, patient recruitment, and community engagement.',
                    members: [
                        {
                            name: 'William Brown',
                            role: 'Team Lead'
                        }, {
                            name: 'Ava Martinez',
                            role: 'Community Liaison'
                        }
                    ]
                }
            ],
            advisors: [
                {
                    name: 'Dr. Michelle Carter',
                    role: 'Faculty Advisor'
                }, {
                    name: 'Dr. Andrew Wilson',
                    role: 'Medical Advisor'
                }
            ],
            formerPresidents: [
                {
                    name: 'Jacob Thompson',
                    year: '2022-2023'
                }, {
                    name: 'Emma Garcia',
                    year: '2021-2022'
                }
            ]
        }
    };

export default async function ProjectTeamPage({params} : {
    params: Promise < {
        id: string
    } >
}) {
    const {id} = await params;
    const teamData = projectTeamsData[id];

    if (!teamData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}


            {/* Presidents Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Leadership
                        </h2>
                        <div className="w-20 h-1 bg-black mx-auto"></div>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamData
                            .presidents
                            .map((president, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-black transition-all duration-300">
                                    <div
                                        className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-gray-400">
                                            {president
                                                .name
                                                .split(' ')
                                                .map(n => n[0])
                                                .join('')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {president.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-1">{president.role}</p>
                                    {president.year && (
                                        <p className="text-xs text-gray-500">{president.year}</p>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Teams Section - Dynamic */}
            {teamData
                .teams
                .map((team, teamIndex) => (
                    <section
                        key={teamIndex}
                        className={`py-20 ${teamIndex % 2 === 0
                        ? 'bg-gray-50'
                        : 'bg-white'}`}>
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="mb-12">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                    {team.name}
                                </h2>
                                {team.description && (
                                    <p className="text-lg text-gray-600 max-w-3xl">
                                        {team.description}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {team
                                    .members
                                    .map((member, memberIndex) => (
                                        <div
                                            key={memberIndex}
                                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                            <div
                                                className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                                <span className="text-xl font-bold text-gray-400">
                                                    {member
                                                        .name
                                                        .split(' ')
                                                        .map(n => n[0])
                                                        .join('')}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                {member.name}
                                            </h3>
                                            {member.role && (
                                                <p className="text-sm text-gray-600">{member.role}</p>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                ))}

            {/* Advisors Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Faculty Advisors
                        </h2>
                        <div className="w-20 h-1 bg-black mx-auto"></div>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamData
                            .advisors
                            .map((advisor, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-black transition-all duration-300">
                                    <div
                                        className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-gray-400">
                                            {advisor
                                                .name
                                                .split(' ')
                                                .map(n => n[0])
                                                .join('')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {advisor.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{advisor.role}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Former Presidents Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Former Presidents
                        </h2>
                        <p className="text-lg text-gray-600">
                            Honoring past leaders who helped build this project
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamData
                                .formerPresidents
                                .map((formerPres, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                                        <div
                                            className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                                            <span className="text-xl font-bold text-gray-400">
                                                {formerPres
                                                    .name
                                                    .split(' ')
                                                    .map(n => n[0])
                                                    .join('')}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {formerPres.name}
                                        </h3>
                                        {formerPres.year && (
                                            <p className="text-sm text-gray-600">{formerPres.year}</p>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Interested in Joining?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        We're always looking for passionate students to join our team.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href={`/projects/${teamData.id}`}>
                            <Button variant="outline" size="lg" className="rounded-2xl">
                                Back to Project
                            </Button>
                        </Link>
                        <Link href="/join">
                            <Button variant="black" size="lg" className="rounded-2xl">
                                Join Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}