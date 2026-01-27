import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24">
            {/* Last updated - above the blue bar */}
            <div className="container mx-auto px-4">
                <p className="text-gray-600 text-sm mb-4">Last updated: 1/26/2026</p>
            </div>

            {/* Social icons bar */}
            <div className="bg-blue-300 border-t border-blue-400">
                <div className="container mx-auto px-4">
                    <div className="py-5 flex flex-row items-center justify-evenly">
                        <Link href={"mailto:alanmunschy@gmail.com"} target={"_blank"}>
                            <MdEmail size={30} color={"blue"} className="hover:opacity-70 transition-opacity" />
                        </Link>

                        <Link href={"https://www.linkedin.com/in/alan-munschy-06919b209/"} target={"_blank"}>
                            <RiLinkedinFill size={30} color={"#0077B5"} className="hover:opacity-70 transition-opacity" />
                        </Link>

                        <Link href={"https://github.com/MagnetMan103"} target={"_blank"}>
                            <FaGithub size={30} color={"black"} className="hover:opacity-70 transition-opacity" />
                        </Link>

                        <Link href={"https://www.youtube.com/@alanmunschy7728"} target={"_blank"}>
                            <FaYoutube size={30} color={"red"} className="hover:opacity-70 transition-opacity" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}