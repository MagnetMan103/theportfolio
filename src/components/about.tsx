import Image from "next/image";


export default function About() {
    return (
        <div className={"mt-10 lg:ml-10"}>
        <h1 className="text-4xl font-bold ml-10 lg:ml-0">Who am I?</h1>
            <div className="flex flex-col p-4 lg:p-0 lg:flex-row lg:items-center lg:justify-start w-full">
                <div className={"break-words lg:w-1/2 ml-4 mr-4 lg:m-0"}>
                    <p className="text-xl mt-0">I&#39;m an engineer/designer/developer pursuing a B.S. in mechanical
                        engineering at Cornell University.</p>
                    <p className="text-xl mt-3">I used to want to be a lawyer; in high school, I did debate for 4 years.
                        Then, I fell in love with making tangible things - whether it be 3d printed designs or websites.
                        For me, engineering let me finally apply my math and physics classes to the real world.
                    </p>
                    <p className="text-xl mt-3">Here are some fast facts. I&#39;m from Miami.
                        I enjoy playing chess, reading, hiking, and golfing.</p>
                    <p className="text-xl mt-3">I also enjoy making websites and apps every now and then (like this one).</p>
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