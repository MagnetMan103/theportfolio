import Link from "next/link";
import Header from "../components/header";
import About from "~/components/about";
import Footer from "~/components/footer";
import Resume from "~/components/resume";
import Special from "~/components/special";
import AnimatedHeading from "~/components/AnimatedHeading";
import { FaCog, FaCode, FaGraduationCap } from "react-icons/fa";

export default function HomePage() {
    const projectCategories = [
        {
            href: "/projects/engineering",
            label: "Engineering Projects",
            description: "CAD designs, simulations, and mechanical systems",
            icon: FaCog,
            gradient: "from-blue-500 to-blue-700",
        },
        {
            href: "/projects/webdev",
            label: "Web Dev Projects",
            description: "React apps, extensions, and hackathon winners",
            icon: FaCode,
            gradient: "from-emerald-500 to-emerald-700",
        },
        {
            href: "/classes",
            label: "Class Projects",
            description: "Important projects and assignments from my classes",
            icon: FaGraduationCap,
            gradient: "from-purple-500 to-purple-700",
        },
    ];

    return (
        <div className="min-h-screen bg-blue-200">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-12 text-center">
                <AnimatedHeading />
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Engineer, Designer, and Developer building things that matter.
                </p>
            </section>

            <About />
            <Resume />
            {/*<Special />*/}

            {/* Project Categories Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                    Explore My Work
                </h2>
                <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
                    Take a look at some of my projects.
                </p>

                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                    {projectCategories.map((category) => (
                        <Link
                            key={category.href}
                            href={category.href}
                            className="group block"
                        >
                            <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${category.gradient} p-8 text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                                <category.icon className="h-12 w-12 mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-2">
                                    {category.label}
                                </h3>
                                <p className="text-white/80 mb-4">
                                    {category.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                                    View Projects →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}