"use client";

import { useEffect, useState } from "react";

export default function AnimatedHeading() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const words = [
        { text: "Hi,", highlight: false },
        { text: "I'm", highlight: false },
        { text: "Alan", highlight: true },
        { text: "Munschy", highlight: true },
    ];

    return (
        <h1 className="text-5xl font-bold text-gray-900 mb-4 md:text-6xl">
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-500 ease-out ${word.highlight ? "text-blue-600" : ""
                        } ${isLoaded
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                    style={{
                        transitionDelay: `${index * 150}ms`,
                    }}
                >
                    {word.text}
                    {index < words.length - 1 && "\u00A0"}
                </span>
            ))}
        </h1>
    );
}
