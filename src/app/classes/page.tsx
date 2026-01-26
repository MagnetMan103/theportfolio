import { type Metadata } from "next";
import Header from "~/components/header";
import Footer from "~/components/footer";
import ProjectCard from "~/components/projects/ProjectCard";
import data from "~/lib/classes.json";

export const metadata: Metadata = {
    title: "Class Projects | Alan Munschy",
    description: "Academic coursework and university projects from my mechanical engineering studies at Cornell.",
};

interface ClassProject {
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

export default function ClassesPage() {
    const projects = data as ClassProject[];

    return (
        <div className="min-h-screen bg-blue-200">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Class Projects
                    </h1>
                    <p className="text-lg text-gray-700">
                        Academic coursework and university projects from my mechanical engineering studies at Cornell.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            category={project.category}
                            title={project.title}
                            summary={project.summary}
                            preview={project.preview}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
