import { type Metadata } from "next";
import Header from "~/components/header";
import Footer from "~/components/footer";
import ProjectGrid from "~/components/projects/ProjectGrid";
import webdevData from "~/lib/webdev.json";
import { type Project } from "~/components/projects/ProjectGrid";

export const metadata: Metadata = {
    title: "Web Development Projects | Alan Munschy",
    description: "Explore my web development projects including React apps, Chrome extensions, and hackathon winners.",
};

export default function WebDevProjectsPage() {
    return (
        <div className="min-h-screen bg-blue-200">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Web Development Projects
                    </h1>
                    <p className="text-lg text-gray-700">
                        React apps, Chrome extensions, and hackathon winners.
                    </p>
                </div>
                <ProjectGrid projects={webdevData as Project[]} />
            </main>
            <Footer />
        </div>
    );
}
