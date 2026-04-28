import ProjectCard from "~/components/projects/ProjectCard";
import webdevProjects from "~/lib/webdev.json";
import engineeringProjects from "~/lib/engineering.json";
import Header from "~/components/header";
import Footer from "~/components/footer";

export default function ArchivedPage() {
    return (
        <div className="min-h-screen bg-blue-900 border-t border-t-blue-500/30 flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Header section */}
                <header className="pt-20 pb-16 bg-blue-900">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h1 className="text-5xl font-extrabold text-blue-100 mb-4
                        ">
                        Past Projects
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
                        These are older projects that were important for my learning journey.
                        They include earlier experiences in engineering, and a long programming journey where I was teaching
                         myself web development (including multiple hackathon top finishes!).
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-6 max-w-6xl py-12">
                
                {/* Engineering Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-blue-500/50 flex-grow rounded"></div>
                        <h2 className="text-3xl font-bold text-white tracking-wide">
                            Engineering
                        </h2>
                        <div className="h-px bg-blue-500/50 flex-grow rounded"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {engineeringProjects.map((project) => (
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
                </section>

                {/* Web Dev Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-blue-500/50 flex-grow rounded"></div>
                        <h2 className="text-3xl font-bold text-white tracking-wide">
                            Web Development
                        </h2>
                        <div className="h-px bg-blue-500/50 flex-grow rounded"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {webdevProjects.map((project) => (
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
                </section>

            </div>
            </main>
            <Footer />
        </div>
    );
}
