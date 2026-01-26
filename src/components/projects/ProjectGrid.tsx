import ProjectCard from "./ProjectCard";

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
    projects: Project[];
    limit?: number;
}

export default function ProjectGrid({ projects, limit }: ProjectGridProps) {
    let displayProjects = projects;

    if (limit) {
        displayProjects = displayProjects.slice(0, limit);
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project) => (
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
