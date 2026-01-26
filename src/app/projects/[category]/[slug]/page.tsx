import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { Badge } from "~/components/ui/badge";
import engineeringData from "~/lib/engineering.json";
import webdevData from "~/lib/webdev.json";
import classData from "~/lib/classes.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    slug: string;
    category: string;
    summary: string;
    title: string;
    description: string[];
    preview: string;
    imgAlts: string[];
    images: string[];
    links: { name: string; url: string }[];
    wide?: boolean;
    caption?: boolean;
    video?: string;
}

const categoryLabels: Record<string, string> = {
    engineering: "Engineering",
    webdev: "Web Dev",
    class: "Class",
};

const categoryColors: Record<string, string> = {
    engineering: "bg-blue-600",
    webdev: "bg-emerald-600",
    class: "bg-purple-600",
};

const categoryBackLinks: Record<string, string> = {
    engineering: "/projects/engineering",
    webdev: "/projects/webdev",
    class: "/classes",
};

type Props = {
    params: Promise<{
        category: string;
        slug: string;
    }>;
};

// Combine all projects from all data sources
const allProjects = [...(engineeringData as Project[]), ...(webdevData as Project[]), ...(classData as Project[])];

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        category: project.category,
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, slug } = await params;
    const project = allProjects.find(
        (p) => p.category === category && p.slug === slug
    );

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} | Alan Munschy`,
        description: project.summary,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { category, slug } = await params;
    const project = allProjects.find(
        (p) => p.category === category && p.slug === slug
    );

    if (!project) {
        notFound();
    }

    const markdown = project.description.join("\n\n");
    const backLink = categoryBackLinks[category] ?? `/projects/${category}`;

    const deriveAlt = (path: string) => {
        const name = path.split("/").pop() ?? path;
        return name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    };

    return (
        <div className="min-h-screen bg-blue-200">
            <Header />
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-gray-700">
                    <Link href="/" className="hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <span className="text-gray-500">/</span>
                    <Link
                        href={backLink}
                        className="hover:text-blue-600 transition-colors capitalize"
                    >
                        {categoryLabels[category] ?? category}
                    </Link>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-900 font-medium">{project.title}</span>
                </nav>

                {/* Header Section */}
                <header className="mb-6">
                    <Badge className={`${categoryColors[category] ?? "bg-gray-600"} text-white mb-3`}>
                        {categoryLabels[category] ?? category}
                    </Badge>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        {project.title}
                    </h1>
                    {/*<p className="text-lg text-gray-700 mb-4">{project.summary}</p>*/}

                    {/* Links - Prominently displayed under title */}
                    {project.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm ${index === 0
                                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                                        }`}
                                >
                                    {link.name}
                                    <FaExternalLinkAlt className="h-3 w-3" />
                                </a>
                            ))}
                        </div>
                    )}
                </header>

                {/* Preview Image - Smaller size */}
                {/*<div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg max-w-md border-2 border-blue-300">*/}
                {/*    <Image*/}
                {/*        src={project.preview}*/}
                {/*        alt={project.title}*/}
                {/*        width={400}*/}
                {/*        height={300}*/}
                {/*        className="w-full h-auto object-contain bg-gray-50"*/}
                {/*        priority*/}
                {/*    />*/}
                {/*</div>*/}

                {/* Description */}
                <section className="mb-10 bg-white rounded-xl p-6 shadow-md border border-blue-200">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        About This Project
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                a: ({ ...props }) => (
                                    <a
                                        {...props}
                                        className="text-blue-600 hover:text-blue-800"
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                ),
                                p: ({ ...props }) => (
                                    <p {...props} className="text-gray-700 mb-4" />
                                ),
                                h1: ({ ...props }) => (
                                    <h1
                                        {...props}
                                        className="text-2xl font-semibold text-gray-900 mt-6 mb-4"
                                    />
                                ),
                                h2: ({ ...props }) => (
                                    <h2
                                        {...props}
                                        className="text-xl font-semibold text-gray-900 mt-6 mb-4"
                                    />
                                ),
                                h3: ({ ...props }) => (
                                    <h3
                                        {...props}
                                        className="text-lg font-semibold text-gray-900 mt-4 mb-2"
                                    />
                                ),
                                ul: ({ ...props }) => (
                                    <ul {...props} className="list-disc ml-6 mb-4" />
                                ),
                                li: ({ ...props }) => (
                                    <li {...props} className="text-gray-700 mb-1" />
                                ),
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                </section>

                {/* Video */}
                {project.video && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Demo Video
                        </h2>
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border-4 border-blue-500 shadow-lg">
                            <iframe
                                className="absolute inset-0 h-full w-full"
                                src={project.video}
                                title="Project video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </section>
                )}

                {/* Gallery */}
                {project.images.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Gallery
                        </h2>
                        <div
                            className={`grid gap-4 ${project.wide ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
                        >
                            {project.images.map((image, index) => {
                                const altText = project.imgAlts?.[index]
                                    ? project.imgAlts[index]
                                    : deriveAlt(image);
                                return (
                                    <figure
                                        key={index}
                                        className="overflow-hidden rounded-xl bg-white shadow-md border border-blue-200"
                                    >
                                        <Image
                                            src={image}
                                            alt={altText ?? "Project image"}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-contain"
                                        />
                                        {project.caption && altText && (
                                            <figcaption className="p-3 text-center text-sm text-gray-600 bg-gray-50">
                                                {altText}
                                            </figcaption>
                                        )}
                                    </figure>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Back Button */}
                <div className="pt-8 border-t border-blue-300">
                    <Link
                        href={backLink}
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                    >
                        ← Back to {categoryLabels[category] ?? category} Projects
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
