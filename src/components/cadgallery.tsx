"use client"
import LidarClamp from "~/components/cadentries/LidarClamp";
import LidarClamp2 from "~/components/cadentries/LidarClamp2";
import MountBracket from "~/components/cadentries/MountBracket";
import FixtureBlock from "~/components/cadentries/FixtureBlock";
import ValveLifter from "~/components/cadentries/ValveLifter";
import HousingFixture from "~/components/cadentries/HousingFixture";
import HopperFlange from "~/components/cadentries/HopperFlange";
import GearPumpBody from "~/components/cadentries/GearPumpBody";

export default function CadGallery() {
    return (
        <div className={"mt-10"}>
            <div className={"flex flex-col lg:flex-row gap-3"}>
            <h1 className="text-4xl font-bold ml-10">CAD Gallery</h1>
                <p className={"lg:mt-2 ml-10 lg:ml-0"}>(try interacting with one!)</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-row App items-center justify-start m-6">
                <LidarClamp2/>
                <MountBracket/>
                <FixtureBlock/>
                <ValveLifter/>
                <HousingFixture/>
                <HopperFlange/>
                <GearPumpBody/>
            </div>
        </div>
    );
}