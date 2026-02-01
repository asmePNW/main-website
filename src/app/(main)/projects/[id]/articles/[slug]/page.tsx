import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TiptapRenderer from '@/components/blog/TiptapRenderer';
import { Button } from '@/components/ui/buttons/Button';

// Article type with Tiptap JSON content
interface ArticleData {
    slug: string;
    title: string;
    description: string;
    author: string;
    authorBio?: string;
    date: string;
    readTime: string;
    category: string;
    thumbnail?: string;
    content: any; // Tiptap JSON content
}

// Sample articles with Tiptap JSON content
const articlesData: Record<string, Record<string, ArticleData>> = {
    'machine-redesign': {
        'fea-analysis-optimization': {
            slug: 'fea-analysis-optimization',
            title: 'Finite Element Analysis and Structural Optimization',
            description: 'Comprehensive study on FEA techniques used to optimize component design while maintaining structural integrity and reducing material usage.',
            author: 'John Anderson',
            authorBio: 'Mechanical Engineering Lead, specializing in structural analysis and optimization',
            date: 'January 15, 2026',
            readTime: '12 min read',
            category: 'Analysis',
            thumbnail: '/square1.png',
            content: {
                type: 'doc',
                content: [
                    {
                        type: 'heading',
                        attrs: { level: 2 },
                        content: [{ type: 'text', text: 'Introduction' }]
                    },
                    {
                        type: 'paragraph',
                        content: [
                            { 
                                type: 'text', 
                                text: 'Finite Element Analysis (FEA) has become an indispensable tool in modern mechanical engineering, allowing us to predict structural behavior under various loading conditions before physical prototypes are built. In this study, we applied advanced FEA techniques to optimize industrial machinery components, achieving significant improvements in performance while reducing material usage by 15%.' 
                            }
                        ]
                    },
                    {
                        type: 'heading',
                        attrs: { level: 2 },
                        content: [{ type: 'text', text: 'Methodology' }]
                    },
                    {
                        type: 'paragraph',
                        content: [
                            { 
                                type: 'text', 
                                text: 'Our approach involved several key steps:' 
                            }
                        ]
                    },
                    {
                        type: 'bulletList',
                        content: [
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'CAD Model Development: ' }, { type: 'text', text: 'Created detailed 3D models of existing machinery components using SolidWorks' }]
                                }]
                            },
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Material Property Definition: ' }, { type: 'text', text: 'Defined accurate material properties including yield strength, elastic modulus, and Poisson\'s ratio' }]
                                }]
                            },
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Mesh Generation: ' }, { type: 'text', text: 'Applied adaptive meshing with refinement in high-stress regions' }]
                                }]
                            },
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', marks: [{ type: 'bold' }], text: 'Load Application: ' }, { type: 'text', text: 'Applied realistic loading conditions based on operational data' }]
                                }]
                            }
                        ]
                    },
                    {
                        type: 'heading',
                        attrs: { level: 2 },
                        content: [{ type: 'text', text: 'Results and Analysis' }]
                    },
                    {
                        type: 'paragraph',
                        content: [
                            { 
                                type: 'text', 
                                text: 'The FEA simulations revealed several critical insights. Peak stress concentrations were identified at the mounting bracket interfaces, where stress values reached 185 MPa under maximum loading conditions. This was significantly below the material yield strength of 250 MPa, indicating a potential for material reduction in other areas.' 
                            }
                        ]
                    },
                    {
                        type: 'heading',
                        attrs: { level: 3 },
                        content: [{ type: 'text', text: 'Stress Analysis Data' }]
                    },
                    {
                        type: 'table',
                        content: {
                            headers: ['Component', 'Original Stress (MPa)', 'Optimized Stress (MPa)', 'Safety Factor'],
                            rows: [
                                ['Mounting Bracket', '185', '168', '1.49'],
                                ['Support Beam', '142', '151', '1.66'],
                                ['Housing Shell', '98', '112', '2.23'],
                                ['Connection Point', '167', '154', '1.62'],
                                ['Base Plate', '112', '105', '2.38']
                            ]
                        }
                    },
                    {
                        type: 'paragraph',
                        content: [
                            { 
                                type: 'text', 
                                text: 'Through iterative optimization, we identified opportunities to reduce wall thickness in low-stress regions while maintaining safety factors above 1.5. The optimized design achieved:' 
                            }
                        ]
                    },
                    {
                        type: 'bulletList',
                        content: [
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', text: '15% reduction in total mass' }]
                                }]
                            },
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', text: '8% improvement in maximum stress distribution' }]
                                }]
                            },
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', text: '12% reduction in manufacturing costs' }]
                                }]
                            }
                        ]
                    },
                    {
                        type: 'heading',
                        attrs: { level: 3 },
                        content: [{ type: 'text', text: 'Performance Comparison Chart' }]
                    },
                    {
                        type: 'chart',
                        content: {
                            type: 'bar',
                            title: 'Original vs Optimized Performance Metrics',
                            data: [
                                { label: 'Mass (kg)', original: 125, optimized: 106 },
                                { label: 'Max Stress (MPa)', original: 185, optimized: 168 },
                                { label: 'Cost ($)', original: 2400, optimized: 2112 },
                                { label: 'Production Time (hrs)', original: 48, optimized: 42 }
                            ]
                        }
                    },
                    {
                        type: 'heading',
                        attrs: { level: 3 },
                        content: [{ type: 'text', text: 'Stress Distribution Breakdown' }]
                    },
                    {
                        type: 'chart',
                        content: {
                            type: 'pie',
                            title: 'Component Stress Distribution',
                            data: [
                                { label: 'Mounting Bracket', value: 32, color: '#3b82f6' },
                                { label: 'Support Beam', value: 25, color: '#8b5cf6' },
                                { label: 'Housing Shell', value: 18, color: '#ec4899' },
                                { label: 'Connection Point', value: 15, color: '#f59e0b' },
                                { label: 'Base Plate', value: 10, color: '#10b981' }
                            ]
                        }
                    },
                    {
                        type: 'heading',
                        attrs: { level: 3 },
                        content: [{ type: 'text', text: 'Material Properties Used' }]
                    },
                    {
                        type: 'table',
                        content: {
                            headers: ['Property', 'Value', 'Unit'],
                            rows: [
                                ['Yield Strength', '250', 'MPa'],
                                ['Elastic Modulus', '200', 'GPa'],
                                ["Poisson's Ratio", '0.30', '-'],
                                ['Density', '7850', 'kg/m³'],
                                ['Ultimate Tensile Strength', '400', 'MPa']
                            ]
                        }
                    },
                    {
                        type: 'heading',
                        attrs: { level: 2 },
                        content: [{ type: 'text', text: 'Conclusions' }]
                    },
                    {
                        type: 'paragraph',
                        content: [
                            { 
                                type: 'text', 
                                text: 'This study demonstrates the power of FEA in driving design optimization. By leveraging computational analysis early in the design process, we achieved significant improvements in both performance and cost-effectiveness. The methodology presented here can be applied to a wide range of mechanical systems and represents best practices in modern engineering design.' 
                            }
                        ]
                    },
                    {
                        type: 'heading',
                        attrs: { level: 2 },
                        content: [{ type: 'text', text: 'References' }]
                    },
                    {
                        type: 'orderedList',
                        content: [
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', text: 'Zienkiewicz, O. C., & Taylor, R. L. (2000). The Finite Element Method.' }]
                                }]
                            },
                            {
                                type: 'listItem',
                                content: [{
                                    type: 'paragraph',
                                    content: [{ type: 'text', text: 'ASME Standards for Mechanical Design (2024)' }]
                                }]
                            }
                        ]
                    }
                ]
            }
        }
    }
};

export default async function ArticlePage({ params }: { params: Promise<{ id: string; slug: string }> }) {
    const { id, slug } = await params;
    
    const article = articlesData[id]?.[slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-black overflow-hidden">
                {article.thumbnail && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={article.thumbnail}
                            alt={article.title}
                            fill
                            className="opacity-30 object-cover"
                        />
                    </div>
                )}

                <div className="relative z-10 py-20">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto">
                            <Link href={`/projects/${id}/articles`} className="text-white/70 hover:text-white mb-4 inline-block">
                                ← Back to Articles
                            </Link>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-xs font-semibold text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                    {article.category}
                                </span>
                                <span className="text-sm text-white/70">{article.date}</span>
                                <span className="text-sm text-white/70">•</span>
                                <span className="text-sm text-white/70">{article.readTime}</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {article.title}
                            </h1>
                            
                            <p className="text-white/90 text-lg leading-relaxed mb-8">
                                {article.description}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <span className="text-lg font-bold text-white">
                                        {article.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-white">{article.author}</p>
                                    {article.authorBio && (
                                        <p className="text-sm text-white/70">{article.authorBio}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        <article className="prose prose-lg max-w-none">
                            <TiptapRenderer content={article.content} />
                        </article>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto flex flex-wrap justify-between gap-4">
                        <Link href={`/projects/${id}/articles`}>
                            <Button variant="outline" size="lg" className="rounded-2xl">
                                ← All Articles
                            </Button>
                        </Link>
                        <Link href={`/projects/${id}`}>
                            <Button variant="black" size="lg" className="rounded-2xl">
                                Back to Project
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
