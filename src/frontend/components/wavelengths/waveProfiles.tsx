"use client";
import { useState } from "react";

import Predefined from "../atmosProfile/predefined";
import Range from "./range";
import RangeFilter from "./rangeFilter";
import SingleValue from "./single";

export default function WaveProfiles() {
    const [selectedAtmosProfile, setSelectedAtmosProfile] = useState('latDate');

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
                    <option value="latDate">Single Value</option>
                    <option value="predefined">Range</option>
                    <option value="waterOzone">Range with filter</option>
                    <option value="predefined">Predefined Profiles</option> s
                </select>
            </label>
            {selectedAtmosProfile === "latDate" && <SingleValue/>}
            {selectedAtmosProfile === "predefined" && <Range/>}
            {selectedAtmosProfile === "waterOzone" && <RangeFilter/>}
            {selectedAtmosProfile === "predefined" && <Predefined/>}
        </div>
    </div>
    );
}