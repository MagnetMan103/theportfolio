import Project from "~/components/mk2page/Project";
import {type ProjectProps} from "~/components/mk2page/Project";
import AnimatedHeading from "~/components/AnimatedHeading";

const projects: ProjectProps[] = [
    {
        title: "Hexapod robot to autonomously collect trash",
        description: "This is my MAE senior design project at Cornell's bio-inspired robotics lab which I have been working on " +
            "for the past two semesters. The goal is to create a hexapod robot for under a thousand dollars that can " +
            "autonomously complete missions to collect trash in delicate environments such as mangrove beaches.",
        thumbnail: "/hexapod/hex-thumbnail.png",
        flipped: false,
        posterLink: "/poster/poster.pdf",
    },
    {
        title: "Vision-enabled robotic arm (CMC Makethon '26)",
        description: "This was a team project for Cornell's Maker Club Makethon where the theme was wearables. Our idea was " +
            "to make a wearable robot arm to assist people with limited sight by describing nearby surroundings and sending " +
            "an alert when the user approaches a wall.",
        thumbnail: "/makethon/arm-thumbnail.png",
        flipped: true,
    },
    {
        title: "Package carrying drone",
        description: "This was my project for Cornell University's Autonomous Drone project team. The idea was to make a " +
            "lightweight drone capable of carrying small packages (< 500g) while adding precaution for safety. The drone is designed " +
            "with propeller guards and a bottom mounting space for various payloads. The carbon fiber plates were cut by" +
            " me using a CNC machine and the prop guards were custom designed and 3D printed.",
        thumbnail: "/packagedrone/pdrone-thumbnail.png",
        flipped: false
    },
    {
        title: "RC Car with Ackermann steering",
        description: "This is an RC car I made because I wanted to experiment with Ackermann steering " +
            "(where the control inputs are the forward velocity and steering angle). This build features" +
            " two 1500KV brushless motors, TPU printed wheels, a PLA frame, a pi zero, camera, and a high torque servo. It's powered by a " +
            "3S 1500mAh LiPo battery.",
        thumbnail: "/car/car-thumbnail.png",
        flipped: true
    }
    ];

export default function Main() {
    return (
        <>
        <div className={"flex pt-5 justify-center items-center"}>
            <AnimatedHeading/>
        </div>
        <div className={"container mx-auto px-4 py-4 max-w-3xl text-2xl"}>
            I like robotics, in particular how we can use intelligence to perform tasks which we would rather not.
            As a mechanical engineering student, I&#39;m focused on sleek designs, dynamics modeling, and control loops.
        </div>
        <div className={"container mx-auto px-4 py-4 max-w-3xl text-2xl"}>
            Here are my favorite recent projects.
        </div>

        <div className={"flex flex-col items-center justify-center mx-auto max-w-6xl"}>
        {projects.map((project, index) => (
            <Project key={index} title={project.title} description={project.description} thumbnail={project.thumbnail} flipped={project.flipped}
            writeupLink={project.writeupLink} posterLink={project.posterLink}/>
        ))}
        </div>
        </>
    )
}