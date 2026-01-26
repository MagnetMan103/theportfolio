import Image from "next/image";


export default function About() {
    return (
        <div className={"mt-10 lg:ml-10"}>
        <h1 className="text-4xl font-bold ml-10 lg:ml-0">Who am I?</h1>
            <div className="flex flex-col p-4 lg:p-0 lg:flex-row lg:items-center lg:justify-start w-full">
                <div className={"break-words lg:w-1/2 ml-4 mr-4 lg:m-0"}>
                    <p className="text-xl mt-0">I&#39;m a 3rd year student pursuing a B.S. in mechanical
                        engineering at Cornell University.</p>
                    <p className="text-xl mt-3">
                    At Cornell, I&#39;m working in the biorobotics lab to make a trash collecting hexapod (a 6-legged robot).
                        I&#39;m also a team lead for Cornell University&#39;s Physical Intelligence club where we are making a hexapod
                        to coordinate with a drone for navigation and sampling tasks.
                    </p>
                    <p className="text-xl mt-3">Here are some fun facts. I&#39;m from Miami.
                        I enjoy playing chess, reading, hiking, and golfing.</p>
                </div>
                <div
                    className={"flex w-full lg:w-1/2 mt-3 lg:m-0 items-center justify-center"}>
                    <div className="p-1 rounded-lg bg-gradient-to-r from-purple-400 via-blue-600 to-blue-400">
                        <Image
                            src="/profile.jpg"
                            alt="profile photo"
                            width={300}
                            height={384.38}
                            className="rounded-lg bg-white h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}