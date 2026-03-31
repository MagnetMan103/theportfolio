import Card from "~/components/card";
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
                        Archived Projects
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
                    
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        {engineeringProjects.map((project, index) => (
                            <Card 
                                key={`eng-${index}`}
                                title={project.title}
                                description={project.description}
                                imgSrc={project.preview || project.images[0] || ""}
                                imgAlt={project.imgAlts?.[0] || project.title}
                                images={project.images || []}
                                imgAlts={project.imgAlts || []}
                                links={project.links || []}
                                wide={project.wide}
                                video={project.video}
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
                    
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        {webdevProjects.map((project, index) => (
                            <Card 
                                key={`web-${index}`}
                                title={project.title}
                                description={project.description}
                                imgSrc={project.preview || project.images[0] || ""}
                                imgAlt={project.imgAlts?.[0] || project.title}
                                images={project.images || []}
                                imgAlts={project.imgAlts || []}
                                links={project.links || []}
                                wide={project.wide}
                                video={project.video}
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
