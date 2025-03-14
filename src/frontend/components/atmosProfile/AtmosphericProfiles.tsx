"use client";
import { useState } from "react";

import LatitudeDate from "./latitudeDate";
import Predefined from "./predefined";
import WaterOzone from "./waterOzone";
import Radiosonde from "./radiosonde";

export default function AtmosProfiles() {
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
                    <option value="latDate">Latitude and Date</option>
                    <option value="predefined">Predefined Profiles</option>
                    <option value="waterOzone">Water and Ozone</option>
                    <option value="radiosonde">Radiosonde</option> s
                </select>
            </label>
            {selectedAtmosProfile === "latDate" && <LatitudeDate/>}
            {selectedAtmosProfile === "predefined" && <Predefined/>}
            {selectedAtmosProfile === "waterOzone" && <WaterOzone/>}
            {selectedAtmosProfile === "radiosonde" && <Radiosonde/>}
        </div>
    </div>
    );
}
