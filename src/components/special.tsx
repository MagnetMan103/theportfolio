import React from "react";
import Image from "next/image";

export default function Special() {
    return (
        <div className={"mt-10 flex flex-col justify-center items-center"}>
            <h1 className="text-6xl font-bold text-blue-900 text-center">Hexapod Adventures Ep 1 Out Now!</h1>
            <div className={"flex flex-col lg:flex-row items-center justify-center gap-10 mt-10 w-full lg:flex-nowrap"}>
                {/* Left image */}
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 max-w-[320px] flex items-center justify-center">
                    <Image
                        src={"/hexapod/Assembly.png"}
                        alt={"hexapod assembly"}
                        className={"rounded-lg"}
                        width={350}
                        height={350}
                        style={{ width: '100%', height: 'auto', maxWidth: '250px', maxHeight: '300px' }}
                    />
                </div>

                {/* Responsive iframe */}
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 max-w-[560px] p-6">
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                        <iframe
                            className="absolute inset-0 w-full h-full border-4 border-blue-500 rounded-lg"
                            src="https://www.youtube.com/embed/SnpT5WlmWz0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right image */}
                <div className="flex-none w-full sm:w-1/2 lg:w-1/3 max-w-[320px] flex items-center justify-center">
                    <Image
                        src={"/hexapod/Hexapod.png"}
                        alt={"hexapod"}
                        className={"rounded-lg"}
                        width={400}
                        height={400}
                        style={{ width: '100%', height: 'auto', maxWidth: '400px', maxHeight: '400px' }}
                    />
                </div>
            </div>
        </div>
    );
}
