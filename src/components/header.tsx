import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { RiSendPlaneFill } from "react-icons/ri";

export default function Header() {
    return (
        <nav className="flex w-full items-center justify-between bg-blue-700 text-white p-4 text-2xl font-semibold
        border-b">
            <div>
                <a href="/" className={"flex flex-row space-x-3 justify-center items-center"}>
                    <Avatar className={""}>
                        <AvatarImage src="mylogo.jpg"/>
                        <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <p>Alan Munschy</p></a>
            </div>

                <a href="mailto:alanmunschy@gmail.com">
                    <div className={"flex gap-2 mr-4"}>
                        <p>Email</p>
                        <RiSendPlaneFill size={30} color={"white"}/>
                    </div>
                </a>
        </nav>
    );
}