import Link from "next/link";
import { FaRegFile } from "react-icons/fa6";

export default function Resume() {
    return (
        <div className={"mt-10 ml-10"}>
            <h1 className="text-4xl font-bold">Here&#39;s my Resume</h1>
            <div className={"flex"}>
            <Link href={"Resume_Portfolio.pdf"} target={"_blank"}>
                <div className={"flex flex-row gap-1"}>
                    <FaRegFile className={"mt-1"} color={"blue"} size={"20px"}/>
                    <p className={"text-blue-700 text-2xl underline"}>Check it out.</p>
                </div>
            </Link>
            </div>
        </div>
    )
}