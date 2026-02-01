import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import TiptapRenderer from '@/components/blog/TiptapRenderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Sub-project detailed data
const subProjectDetailsData : Record < string,
    Record < string, {
        slug: string;
        title: string;
        subtitle: string;
        heroImage: string;
        publishedDate: string;
        author: string;
        content: any; // Tiptap JSON content
    } >> = {
        'machine-redesign': {
            'component-a': {
                slug: 'component-a',
                title: 'Component A - Drive System Redesign',
                subtitle: 'Revolutionary approach to industrial drive mechanisms',
                heroImage: '/square1.png',
                publishedDate: 'January 15, 2026',
                author: 'John Anderson',
                content: {
                    type: 'doc',
                    content: [
                        {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Project Overview'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The drive system redesign represents a fundamental shift in how we approach indu' +
                                        'strial machinery power transmission. Through extensive finite element analysis a' +
                                        'nd iterative prototyping, we achieved a 30% reduction in energy consumption whil' +
                                        'e maintaining peak torque output.'
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Technical Approach'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Our methodology combined advanced CAD modeling with real-world testing protocols' +
                                        ':'
                                }
                            ]
                        }, {
                            type: 'bulletList',
                            content: [
                                {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Material optimization using topology analysis'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Bearing friction reduction through advanced lubrication systems'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Gear profile optimization for noise reduction'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Performance Results'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Comprehensive testing demonstrated significant improvements across all measured ' +
                                        'parameters:'
                                }
                            ]
                        }, {
                            type: 'table',
                            content: [
                                {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Metric'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Original'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Redesigned'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Improvement'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Power Consumption'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '45 kW'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '31.5 kW'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '30%'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Operating Noise'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '78 dB'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '65 dB'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '17%'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Maintenance Interval'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '500 hrs'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '750 hrs'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '50%'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Future Development'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Building on these results, future iterations will focus on implementing smart se' +
                                        'nsors for predictive maintenance and exploring alternative materials for further' +
                                        ' weight reduction.'
                                }
                            ]
                        }
                    ]
                }
            },
            'component-b': {
                slug: 'component-b',
                title: 'Component B - Control Interface',
                subtitle: 'Modern digital control system with real-time monitoring',
                heroImage: '/square2.jpg',
                publishedDate: 'January 18, 2026',
                author: 'Sarah Martinez',
                content: {
                    type: 'doc',
                    content: [
                        {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Interface Design Philosophy'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'The control interface redesign prioritizes operator efficiency and system transp' +
                                        'arency. By implementing a touchscreen-based control system with intuitive visual' +
                                        ' feedback, we reduced operator training time by 60%.'
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Key Features'
                                }
                            ]
                        }, {
                            type: 'bulletList',
                            content: [
                                {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Real-time performance monitoring with customizable dashboards'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Predictive maintenance alerts based on usage patterns'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Remote access capabilities for diagnostics and troubleshooting'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            'component-c': {
                slug: 'component-c',
                title: 'Component C - Cooling System',
                subtitle: 'Advanced thermal management for optimal performance',
                heroImage: '/square4.jpg',
                publishedDate: 'January 20, 2026',
                author: 'David Kim',
                content: {
                    type: 'doc',
                    content: [
                        {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Thermal Challenges'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Excessive heat generation was limiting system performance and component lifespan' +
                                        '. Our redesigned cooling system maintains optimal operating temperatures while r' +
                                        'educing energy consumption.'
                                }
                            ]
                        }
                    ]
                }
            }
        },
        'solar-car': {
            'car-1': {
                slug: 'car-1',
                title: 'Car 1 - Prototype Genesis',
                subtitle: 'First generation solar vehicle establishing design foundations',
                heroImage: '/square1.png',
                publishedDate: 'December 5, 2025',
                author: 'Emily Chen',
                content: {
                    type: 'doc',
                    content: [
                        {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Genesis of Innovation'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Car 1 represents our first venture into solar-powered transportation. This proto' +
                                        'type focused on validating core concepts and establishing baseline performance m' +
                                        'etrics that would guide future iterations.'
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Design Specifications'
                                }
                            ]
                        }, {
                            type: 'table',
                            content: [
                                {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Component'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Specification'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Solar Array'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '4.5 m² monocrystalline cells'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Battery Capacity'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '5 kWh lithium-ion'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Top Speed'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '65 km/h'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Weight'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '285 kg'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Lessons Learned'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Testing revealed several critical insights that shaped subsequent designs:'
                                }
                            ]
                        }, {
                            type: 'bulletList',
                            content: [
                                {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Aerodynamic drag had greater impact than initially calculated'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Battery thermal management required dedicated cooling system'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Suspension geometry needed optimization for various road conditions'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            'car-2': {
                slug: 'car-2',
                title: 'Car 2 - Performance Evolution',
                subtitle: 'Enhanced efficiency and competitive capabilities',
                heroImage: '/square2.jpg',
                publishedDate: 'December 12, 2025',
                author: 'Michael Rodriguez',
                content: {
                    type: 'doc',
                    content: [
                        {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Evolutionary Improvements'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Building on Car 1\'s foundation, the second generation incorporated advanced mat' +
                                        'erials and refined aerodynamics to achieve a 25% increase in range and 15% impro' +
                                        'vement in top speed.'
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Performance Metrics'
                                }
                            ]
                        }, {
                            type: 'table',
                            content: [
                                {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Metric'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Car 1'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Car 2'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableHeader',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Change'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Range (full charge)'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '180 km'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '225 km'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '+25%'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Top Speed'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '65 km/h'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '75 km/h'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '+15%'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'tableRow',
                                    content: [
                                        {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: 'Weight'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '285 kg'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '245 kg'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, {
                                            type: 'tableCell',
                                            content: [
                                                {
                                                    type: 'paragraph',
                                                    content: [
                                                        {
                                                            type: 'text',
                                                            text: '-14%'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            'car-3': {
                slug: 'car-3',
                title: 'Car 3 - Competition Ready',
                subtitle: 'Race-proven engineering for the American Solar Challenge',
                heroImage: '/square4.jpg',
                publishedDate: 'December 20, 2025',
                author: 'John Anderson',
                content: {
                    type: 'doc',
                    content: [
                        {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Competition Excellence'
                                }
                            ]
                        }, {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Car 3 represents the culmination of three years of development and testing. This' +
                                        ' competition-optimized vehicle secured 3rd place in the American Solar Challenge' +
                                        ', validating our engineering approach and demonstrating exceptional reliability ' +
                                        'over 1,200 miles of racing.'
                                }
                            ]
                        }, {
                            type: 'heading',
                            attrs: {
                                level: 2
                            },
                            content: [
                                {
                                    type: 'text',
                                    text: 'Race Statistics'
                                }
                            ]
                        }, {
                            type: 'bulletList',
                            content: [
                                {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Total Distance: 1,247 km completed'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Average Speed: 45 km/h over full course'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Solar Efficiency: 94% energy capture rate'
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    type: 'listItem',
                                    content: [
                                        {
                                            type: 'paragraph',
                                            content: [
                                                {
                                                    type: 'text',
                                                    text: 'Zero mechanical failures during competition'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    };

export default async function SubProjectDetailPage({params} : {
    params: Promise < {
        id: string;
        slug: string
    } >
}) {
    const {id, slug} = await params;

    const projectData = subProjectDetailsData[id];
    if (!projectData) {
        notFound();
    }

    const subProject = projectData[slug];
    if (!subProject) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Back Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 lg:px-12 py-4">
                    <Link
                        href={`/projects/${id}/sub-projects`}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        <span className="font-medium">Back to Sub-Projects</span>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={subProject.heroImage}
                        alt={subProject.title}
                        fill
                        className="opacity-40 object-cover"/>
                </div>

                <div className="relative z-10 py-20">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                {subProject.title}
                            </h1>
                            <p className="text-xl text-white/90 mb-6">
                                {subProject.subtitle}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-white/70">
                                <span>{subProject.author}</span>
                                <span>•</span>
                                <span>{subProject.publishedDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <TiptapRenderer content={subProject.content}/>
                    </div>
                </div>
            </section>
        </div>
    );
}
