"use client";
import { useState } from "react";

import Predefined from "./predefined";
import Range from "./range";
import RangeFilter from "./rangeFilter";
import SingleValue from "./single";

export default function WaveProfiles() {
    const [selectedWaveProfile, setSelectedWaveProfile] = useState('singleVal');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                Pick an Wavelength Profile:    
                <select
                    value={selectedWaveProfile} 
                    onChange={e => setSelectedWaveProfile(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="singleVal">Single Value</option>
                    <option value="range">Range</option>
                    <option value="rangeFilter">Range with filter</option>
                    <option value="predefined">Predefined Profiles</option> s
                </select>
            </label>
            {selectedWaveProfile === "singleVal" && <SingleValue/>}
            {selectedWaveProfile === "range" && <Range/>}
            {selectedWaveProfile === "rangeFilter" && <RangeFilter/>}
            {selectedWaveProfile === "predefined" && <Predefined/>}
        </div>
    </div>
    );
}