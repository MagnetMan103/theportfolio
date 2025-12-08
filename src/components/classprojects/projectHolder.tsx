import Card from '~/components/card';
import data from '~/lib/classes.json';
import type { Project } from '~/components/cardHolder';


export default function ProjectHolder() {
    return (
        <>
            <div>
                <h1 className={"text-4xl font-bold ml-10 mt-10 mb-5"}>Class Projects</h1>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"}>
                {Object.values(data.map((project : Project, index) => (
                    <Card key={index} title={project.title} description={project.description} imgSrc={project.preview}
                          imgAlt={project.imgAlts[0]!} images={project.images} imgAlts={project.imgAlts}
                          links={project.links}
                          wide={project.wide} caption={project.caption} video={project.video}/>
                )))}
            </div>
        </>
    );
}
