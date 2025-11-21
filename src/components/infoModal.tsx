import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { ClipLoader } from 'react-spinners';

interface Props {
    title: string;
    description: string[];
    images: string[];
    imgAlts: string[];
    links: { name: string, url: string }[];
    onClose: () => void;
    wide?: boolean;
}

export default function InfoModal(props: Props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    useEffect(() => {
        const imagePromises = props.images.map((src) => {
            return new Promise<void>((resolve, reject) => {
                const img: HTMLImageElement = new window.Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            });
        });

        Promise.all(imagePromises)
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    }, [props.images]);

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75" aria-hidden="true"></div>
            <div className="bg-white rounded-lg pl-6 pr-6 pb-6 shadow-lg z-10 w-3/4 lg:w-1/2 h-3/4 overflow-y-auto relative">
                <div className="flex flex-row items-center justify-between sticky top-0 bg-white z-10 pt-6 pb-2">
                    <h3 className="text-2xl leading-6 font-medium">
                        {props.title}
                    </h3>
                    <button type="button"
                            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
                            onClick={props.onClose}>
                        Go back
                    </button>
                </div>
                <div className="mt-2">
                    <div className="flex flex-col gap-2">
                        {props.description.map((desc, index) => (
                            <p key={index} className="text-md text-gray-800">{desc}</p>
                        ))}
                    </div>
                </div>
                {props.links.length > 0 && (
                    <>
                        <h1 className="text-2xl mt-3 mb-2 font-semibold">Links</h1>
                        <div className="grid grid-cols-2 gap-4 justify-evenly">
                            {props.links.map((link, index) => (
                                <a key={index} href={link.url} target="_blank"
                                   className="text-blue-600 hover:text-blue-800">{link.name}</a>
                            ))}
                        </div>
                    </>
                )}
                <h1 className="text-2xl mt-3 font-semibold">Images</h1>
                <div className="mt-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <ClipLoader size={50} color={"#123abc"} loading={loading} />
                        </div>
                    ) : (
                        <div className={`grid gap-4 justify-items-center ${props.wide ? 'grid-cols-1' : 'grid-cols-2'}`}>
                            {props.images.map((image, index) => (
                                <Image key={index} src={image} alt={props.imgAlts[index] ?? "No alt text"}
                                       className="rounded-lg"
                                       width={600} height={400} priority/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}