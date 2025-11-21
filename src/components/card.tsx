"use client"

import Image from 'next/image';
import {useState} from 'react';
import InfoModal from "~/components/infoModal";

interface CardProps {
    title: string;
    description: string[];
    imgSrc: string;
    imgAlt: string;
    images: string[];
    imgAlts: string[];
    links: { name: string, url: string }[];
    wide?: boolean;
}

export default function Card(props: CardProps) {
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <div>
            <div className={"w-[calc(250px)] bg-black border-2 border-transparent hover:border-blue-600 rounded-lg mb-3"}>
        <div onClick={openModal}
            className="rounded-lg shadow-lg dark:bg-gray-800 hover:opacity-70
            hover:cursor-pointer h-fit">
            <Image
                src={props.imgSrc}
                alt={props.imgAlt}
                width={250}
                height={250}
                className="rounded-t-md object-contain bg-black px-1 pt-1"
                style={{ minWidth: '245px', minHeight: '245px', maxWidth: '245px', maxHeight: '245px' }}
            />
            <div className="flex items-center justify-center p-3 h-20 break-words overflow-clip bg-white rounded-b-md
            border-t-4 border-t-black">
                <h2 className="text-center text-xl font-bold text-gray-800 dark:text-white">
                    {props.title}
                </h2>
            </div>
        </div>
            </div>
            {isOpen && (
                <InfoModal title={props.title} description={props.description} images={props.images} imgAlts={props.imgAlts}
                           links={props.links} wide={props.wide}
                           onClose={closeModal}/>
            )}
        </div>
    );

}