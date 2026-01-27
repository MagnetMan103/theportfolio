import Link from "next/link";
import { FaRegFile } from "react-icons/fa6";

export default function Resume() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Here&#39;s my Resume</h1>
                <Link href={"Resume_Portfolio.pdf"} target={"_blank"}>
                    <div className="flex flex-row gap-2 items-center group">
                        <FaRegFile className="text-blue-600" size={20} />
                        <p className="text-blue-700 text-xl underline group-hover:text-blue-500 transition-colors">
                            Check it out.
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    );
}