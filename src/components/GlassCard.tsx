"use client";

import { useRef, useState, useCallback } from "react";
import type { ReactNode, MouseEvent } from "react";

interface GlassCardProps {
    children: ReactNode;
    gradient: string;
    className?: string;
}

export default function GlassCard({ children, gradient, className = "" }: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsHovering(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovering(false);
    }, []);

    // Parse gradient colors for the glass tint
    const getGradientColors = (gradientClass: string) => {
        const colorMap: Record<string, { start: string; end: string; glow: string }> = {
            "from-blue-500 to-blue-700": {
                start: "rgba(59, 130, 246, 0.4)",
                end: "rgba(29, 78, 216, 0.5)",
                glow: "rgba(96, 165, 250, 0.6)"
            },
            "from-emerald-500 to-emerald-700": {
                start: "rgba(16, 185, 129, 0.4)",
                end: "rgba(4, 120, 87, 0.5)",
                glow: "rgba(52, 211, 153, 0.6)"
            },
            "from-purple-500 to-purple-700": {
                start: "rgba(168, 85, 247, 0.4)",
                end: "rgba(126, 34, 206, 0.5)",
                glow: "rgba(192, 132, 252, 0.6)"
            }
        };
        return colorMap[gradientClass] ?? {
            start: "rgba(59, 130, 246, 0.4)",
            end: "rgba(29, 78, 216, 0.5)",
            glow: "rgba(96, 165, 250, 0.6)"
        };
    };

    const colors = getGradientColors(gradient);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-500 ${className}`}
            style={{
                // Liquid glass background layers
                background: `
                    linear-gradient(135deg, ${colors.start} 0%, ${colors.end} 100%)
                `,
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                boxShadow: isHovering
                    ? `
                        0 8px 32px rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(255, 255, 255, 0.1),
                        inset 0 0 80px rgba(255, 255, 255, 0.05),
                        0 25px 50px -12px rgba(0, 0, 0, 0.25)
                    `
                    : `
                        0 4px 16px rgba(0, 0, 0, 0.1),
                        0 0 0 1px rgba(255, 255, 255, 0.08),
                        inset 0 0 40px rgba(255, 255, 255, 0.03)
                    `,
                transform: isHovering ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
            }}
        >
            {/* Frosted glass inner shine - top edge */}
            <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)"
                }}
            />

            {/* Frosted glass inner shine - left edge */}
            <div
                className="absolute inset-y-0 left-0 w-px"
                style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3), transparent)"
                }}
            />

            {/* Cursor-following spotlight/mask effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(
                        350px circle at ${mousePosition.x}px ${mousePosition.y}px,
                        ${colors.glow} 0%,
                        rgba(255, 255, 255, 0.15) 25%,
                        transparent 60%
                    )`,
                }}
            />

            {/* Animated shimmer/refraction effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-all duration-700"
                style={{
                    opacity: isHovering ? 0.3 : 0,
                    background: `
                        linear-gradient(
                            ${45 + (mousePosition.x / 3)}deg,
                            transparent 20%,
                            rgba(255, 255, 255, 0.1) 40%,
                            rgba(255, 255, 255, 0.2) 50%,
                            rgba(255, 255, 255, 0.1) 60%,
                            transparent 80%
                        )
                    `,
                    transform: `translateX(${(mousePosition.x - 150) / 10}px)`,
                }}
            />

            {/* Floating orb effect - creates depth illusion */}
            <div
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full transition-all duration-500"
                style={{
                    background: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    transform: isHovering ? "scale(1.3) translate(-5px, 5px)" : "scale(1)",
                }}
            />

            {/* Bottom ambient glow */}
            <div
                className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full transition-all duration-500"
                style={{
                    background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    opacity: isHovering ? 0.4 : 0.2,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Noise texture overlay for glass effect */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
