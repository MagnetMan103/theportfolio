export type Project = {
    title: string;
    description: string[];
    preview: string;
    imgAlts: string[];
    images: string[];
    links: { name: string, url: string }[];
    wide?: boolean;
    caption?: boolean;
    video?: string;
}
