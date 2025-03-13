"use client";
import { useState } from "react";

import Predefined from "./predefined";
import MIEFile from "./mieFile";
import Multimodal from "./multimodal";
import Gamma from "./gamma";
import JungePower from "./jungePower";
import SunPhotometer from "./sunPhotometer";
import CustomProfiles from "./customProfile";

export default function AerosolProfiles() {
    const [selectedAtmosProfile, setSelectedAtmosProfile] = useState('predefined');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                Pick an Atmospheric Profile:    
                <select
                    value={selectedAtmosProfile} 
                    onChange={e => setSelectedAtmosProfile(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="predefined">Predefined Profiles</option>
                    <option value="mie">From MIE File</option>
                    <option value="multimodal">Multimodal Log Normal Distribution</option>
                    <option value="modifiedGamma">Modified Gamma Distribution</option>
                    <option value="jungePower">Junge Power Law Distribution</option>
                    <option value="sunPhotometer">Sun Photometer Distribution</option>
                    <option value="userDefined">Custom Profiles</option>
                </select>
            </label>
            {selectedAtmosProfile === "predefined" && <Predefined/>}
            {selectedAtmosProfile === "mie" && <MIEFile/>}
            {selectedAtmosProfile === "multimodal" && <Multimodal/>}
            {selectedAtmosProfile === "modifiedGamma" && <Gamma/>}
            {selectedAtmosProfile === "jungePower" && <JungePower/>}
            {selectedAtmosProfile === "sunPhotometer" && <SunPhotometer/>}
            {selectedAtmosProfile === "userDefined" && <CustomProfiles/>}
        </div>
    </div>
    );
}
