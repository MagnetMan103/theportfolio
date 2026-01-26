"use client";

import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  slug: string;
  category: string;
  title: string;
  summary: string;
  preview: string;
}

const categoryLabels: Record<string, string> = {
  engineering: "Engineering",
  webdev: "Web Dev",
  class: "Class",
};

export default function ProjectCard({
  slug,
  category,
  title,
  summary,
  preview,
}: ProjectCardProps) {

  // Engineering: Clean, technical feel with light gray-blue styling
  if (category === "engineering") {
    return (
      <Link href={`/projects/${category}/${slug}`} className="group block">
        <div className="h-full flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400">
          {/* Technical grid pattern header */}
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `linear-gradient(rgba(100,116,139,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,.2) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            <Image
              src={preview}
              alt={title}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5 flex-grow bg-white">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-wider">
              {categoryLabels[category]}
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{summary}</p>
          </div>
          <div className="px-5 pb-4 bg-white">
            <span className="text-sm text-blue-600 group-hover:text-blue-700 font-medium">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Web Dev: Clean modern white cards
  if (category === "webdev") {
    return (
      <Link href={`/projects/${category}/${slug}`} className="group block">
        <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300">
          {/* Clean modern image area */}
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
            <Image
              src={preview}
              alt={title}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5 flex-grow">
            <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full">
              {categoryLabels[category]}
            </span>
            <h3 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{summary}</p>
          </div>
          <div className="px-5 pb-5">
            <span className="text-sm text-emerald-600 group-hover:text-emerald-700 font-semibold">
              Learn More →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Class projects - academic feel with purple theme
  return (
    <Link href={`/projects/${category}/${slug}`} className="group block">
      <div className="h-full flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-purple-50 border-2 border-purple-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400">
        {/* Paper-like header */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
          <Image
            src={preview}
            alt={title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5 flex-grow">
          <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">
            {categoryLabels[category]}
          </span>
          <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{summary}</p>
        </div>
        <div className="px-5 pb-4">
          <span className="text-sm text-purple-600 group-hover:text-purple-700 font-medium">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
