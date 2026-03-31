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
import Main from "~/components/mk2page/Main";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-blue-200">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}