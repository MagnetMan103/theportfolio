import { Separator } from "~/components/ui/separator"

export default function Skills() {
    // renders a list of skills
    return (
        <div className={"ml-10"}>
            <h1 className="text-4xl font-bold mt-10">Skills</h1>
            <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>HTML</div>
                    <Separator orientation="vertical" />
                    <div>CSS</div>
                    <Separator orientation="vertical" />
                    <div>JavaScript</div>
                    <Separator orientation="vertical" />
                    <div>React</div>
                    <Separator orientation="vertical" />
                    <div>Node.js</div>
                    <Separator orientation="vertical" />
                    <div>Express</div>
                    <Separator orientation="vertical" />
                    <div>PostgreSQL</div>
                    <Separator orientation="vertical" />
                    <div>Python</div>
                    <Separator orientation="vertical" />
                    <div>Java</div>
                    <Separator orientation="vertical" />
                    <div>Git</div>
            </div>
        </div>
    )
}