import ProjectCard from "./ProjectCard";
import data from "~/lib/data.json";

export interface Project {
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

interface ProjectGridProps {
    category?: string;
    limit?: number;
}

export default function ProjectGrid({ category, limit }: ProjectGridProps) {
    let projects = data as Project[];

    if (category) {
        projects = projects.filter((p) => p.category === category);
    }

    if (limit) {
        projects = projects.slice(0, limit);
    }

    return (
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
    );
}
