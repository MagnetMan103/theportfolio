'use client'

import Image from "next/image";
import { Button } from "~/components/ui/button"

export interface ProjectProps {
    title: string;
    description: string;
    thumbnail: string;
    flipped: boolean;
    writeupLink?: string;
}

export default function Project(props: ProjectProps) {
    if (props.flipped) {
        return (
            <div className="w-full md:w-full lg:w-3/4 p-4">
                <div className="flex flex-col-reverse md:flex-row items-center md:items-stretch bg-white rounded-lg shadow-md overflow-hidden">
                    <div className={"flex flex-col flex-grow"}>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{props.title}</h3>
                        <p className="text-gray-700">{props.description}</p>
                    </div>
                        {props.writeupLink &&
                        <div className={"flex items-center justify-center p-2 gap-2"}>
                        <Button variant="outline"
                                onClick={() => window.open(props.writeupLink, "_blank")}>
                        View Writeup</Button>
                        </div>
                        }
                    </div>
                    <Image
                        src={props.thumbnail}
                        alt={props.title}
                        width={250}
                        height={250}
                        className="rounded-t-md object-contain bg-black px-1 pt-1"
                        style={{minWidth: '245px', minHeight: '245px', maxWidth: '245px', maxHeight: '245px'}}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full md:w-full lg:w-3/4 p-4">
                <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-lg shadow-md overflow-hidden">
                    <Image
                        src={props.thumbnail}
                        alt={props.title}
                        width={250}
                        height={250}
                        className="rounded-t-md object-contain bg-black px-1 pt-1"
                        style={{minWidth: '245px', minHeight: '245px', maxWidth: '245px', maxHeight: '245px'}}
                    />
                    <div className={"flex flex-col flex-grow"}>
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{props.title}</h3>
                            <p className="text-gray-700">{props.description}</p>
                        </div>
                        {props.writeupLink &&
                            <div className={"flex items-center justify-center p-2 gap-2"}>
                                <Button variant="outline"
                                        onClick={() => window.open(props.writeupLink, "_blank")}>
                                    View Writeup</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}