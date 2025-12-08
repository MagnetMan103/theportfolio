// File: `theportfolio/src/components/infoModal.tsx`
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { ClipLoader } from 'react-spinners';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface Props {
    title: string;
    description: string[];
    images: string[];
    imgAlts: string[];
    links: { name: string, url: string }[];
    onClose: () => void;
    wide?: boolean;
    caption?: boolean;
    video?: string;
}

export default function InfoModal(props: Props) {
    const [loading, setLoading] = useState(true);

    // safe defaults
    const captionEnabled = props.caption ?? false;

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

    const markdown = props.description.join('\n\n');

    const deriveAlt = (path: string) => {
        const name = path.split('/').pop() ?? path;
        return name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    };

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
                    <div className="prose prose-sm max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                a: ({node, ...props}) => <a {...props} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer" />,
                                p: ({node, ...props}) => <p {...props} className="text-md text-gray-800" />,
                                h1: ({node, ...props}) => <h1 {...props} className="text-2xl font-semibold text-gray-900" />,
                                h2: ({node, ...props}) => <h2 {...props} className="text-xl font-semibold text-gray-900" />,
                                h3: ({node, ...props}) => <h3 {...props} className="text-lg font-semibold text-gray-900" />,
                                ul: ({node, ...props}) => <ul {...props} className="list-disc ml-6" />,
                                li: ({node, ...props}) => <li {...props} className="text-gray-800" />
                            }}
                        >
                            {markdown}
                        </ReactMarkdown>
                    </div>
                </div>

                {props.links.length > 0 && (
                    <>
                        <h1 className="text-2xl mt-3 mb-2 font-semibold">Links</h1>
                        <div className="grid grid-cols-2 gap-4 justify-evenly">
                            {props.links.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noreferrer"
                                   className="text-blue-600 hover:text-blue-800">{link.name}</a>
                            ))}
                        </div>
                    </>
                )}

                {props.video && (
                    <>
                        <h1 className="text-2xl mt-3 font-semibold">Video</h1>
                        <iframe
                            className="w-full aspect-video border-4 border-blue-500 rounded-lg"
                            src={props.video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />

                    </>
                )}

                {props.images.length > 0 && (<h1 className="text-2xl mt-3 font-semibold">Images</h1>)}
                <div className="mt-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <ClipLoader size={50} color={"#123abc"} loading={loading}/>
                        </div>
                    ) : (
                        <div className={`grid gap-4 justify-items-center ${props.wide ? 'grid-cols-1' : 'grid-cols-2'}`}>
                            {props.images.map((image, index) => {
                                const altText = props.imgAlts?.[index] ? props.imgAlts?.[index] : deriveAlt(image);
                                return (
                                    <figure key={index} className="w-full">
                                        <Image
                                            src={image}
                                            alt={altText}
                                            className="rounded-lg"
                                            width={600}
                                            height={400}
                                            priority
                                        />
                                        {captionEnabled && (
                                            <figcaption className="text-sm text-gray-600 mt-2 text-center">
                                                {altText}
                                            </figcaption>
                                        )}
                                    </figure>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
