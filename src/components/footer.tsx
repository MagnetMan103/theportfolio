import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";



export default function Footer() {
    return (
        <>
            <div className={'mt-40'}>
                <p className={'ml-5 text-gray-600'}>Last updated: 1/26/2026</p>
            </div>
        <div className={"flex flex-row justify-evenly p-5 bg-blue-300 border-t"}>
            <Link href={"mailto:alanmunschy@gmail.com"} target={"_blank"}>
            <MdEmail size={30} color={"blue"} className={"hover:opacity-70"}/>
            </Link>

            <Link href={"https://www.linkedin.com/in/alan-munschy-06919b209/"} target={"_blank"}>
            <RiLinkedinFill size={30} color={"#0077B5"} className={"hover:opacity-70"}/>
            </Link>

            <Link href={"https://github.com/MagnetMan103"} target={"_blank"}>
            <FaGithub size={30} color={"black"} className={"hover:opacity-70"}/>
            </Link>

            <Link href={"https://www.youtube.com/@alanmunschy7728"} target={"_blank"}>
            <FaYoutube size={30} color={"red"} className={"hover:opacity-70"}/>
            </Link>

        </div>
        </>
    );
}