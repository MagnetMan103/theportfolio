import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import About from "~/components/about";
import Footer from "~/components/footer";
import Resume from "~/components/resume";
import Special from "~/components/special";
import AnimatedHeading from "~/components/AnimatedHeading";
import GlassCard from "~/components/GlassCard";
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
            <section className="container mx-auto px-4 py-12">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12">
                    {/* Hexapod CAD Image */}
                    <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
                        <Image
                            src="/hexapod/cad.png"
                            alt="Hexapod CAD Design"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <AnimatedHeading />
                        <p className="text-xl text-gray-700 max-w-2xl">
                            Engineer, Designer, and Developer building things that matter.
                        </p>
                    </div>
                </div>
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
                            <GlassCard gradient={category.gradient}>
                                <category.icon className="h-12 w-12 mb-4 opacity-90 drop-shadow-lg" />
                                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                                    {category.label}
                                </h3>
                                <p className="text-white/80 mb-4 drop-shadow-sm">
                                    {category.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium group-hover:underline drop-shadow-sm">
                                    View Projects →
                                </span>
                            </GlassCard>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}