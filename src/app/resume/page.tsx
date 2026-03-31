import Header from "~/components/header";
import Footer from "~/components/footer";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-blue-900 border-t border-t-blue-500/30 flex flex-col">
            <Header />
            <main className="flex-grow flex flex-col items-center py-10 px-4 container mx-auto">
                <div className="w-full max-w-5xl flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-extrabold text-white">My Resume</h1>
                    <Link 
                        href="/Resume_Portfolio.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-medium transition-colors"
                        download
                    >
                        <FaDownload />
                        <span>Download PDF</span>
                    </Link>
                </div>
                
                <div className="w-full max-w-5xl h-[1000px] bg-white/5 p-1 rounded-xl shadow-2xl border border-blue-500/30 mb-12">
                    <iframe 
                        src="/Resume_Portfolio.pdf#toolbar=0&navpanes=0" 
                        className="w-full h-full rounded-lg bg-white border-none"
                        title="Resume"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
