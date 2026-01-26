import { type Metadata } from "next";
import Header from "~/components/header";
import Footer from "~/components/footer";
import ProjectGrid from "~/components/projects/ProjectGrid";
import engineeringData from "~/lib/engineering.json";
import { type Project } from "~/components/projects/ProjectGrid";

export const metadata: Metadata = {
    title: "Engineering Projects | Alan Munschy",
    description: "Explore my engineering projects including CAD designs, simulations, and mechanical systems.",
};

export default function EngineeringProjectsPage() {
    return (
        <div className="min-h-screen bg-blue-200">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Engineering Projects
                    </h1>
                    <p className="text-lg text-gray-700">
                        CAD designs, simulations, and mechanical systems I&apos;ve built.
                    </p>
                </div>
                <ProjectGrid projects={engineeringData as Project[]} />
            </main>
            <Footer />
        </div>
    );
}
