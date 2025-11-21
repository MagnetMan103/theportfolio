import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import {Model} from "~/functions/MountBracket";
import {OrbitControls} from "@react-three/drei";

export default function LidarClamp() {
    const [isActive1, setIsActive] = useState(false);
    return (<div className={"flex flex-col border-2 border-black rounded-md bg-white items-center"}>
        <Canvas camera={{position: [15, 0, 0], rotation: [0, 0, 0]}} className={"hover:cursor-pointer"}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-10, 10, 0]} intensity={2}/>
            <directionalLight position={[10, 10, 0]} intensity={2}/>

            <Suspense fallback={null}>
                <Model position={[-5, -5, 0]} isActive={isActive1}/>
            </Suspense>
            <OrbitControls onStart={() => setIsActive(true)}
                           onEnd={() => setIsActive(false)}
            />
        </Canvas>
        <h1 className={"font-bold"}>Mount Bracket</h1>
    </div>)
}