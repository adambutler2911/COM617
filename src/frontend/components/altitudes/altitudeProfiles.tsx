"use client";
import { useState } from "react";
import CustomAltitude from "./customAltitude";
import CustomPressure from "./customPressure";
import CustomSensorAltitude from "./customSensorAltitude";

export default function AltitudeProfiles() {
    const [selectedAltitudeProfile, setAltitudeProfile] = useState('homogeneous');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <label className="block mb-2 text-left text-gray-700 font-bold">
                Pick an Altitude Profile:    
                <select
                    value={selectedAltitudeProfile} 
                    onChange={e => setAltitudeProfile(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    form="parameterForm"
                    name="altProfile"
                >
                    <option value="seaLevel">Sea Level</option>
                    <option value="customAltitude">Custom Altitude</option>
                    <option value="customPressure">Custom Pressure</option>
                    <option value="sensorSeaLevel">Sensor at Sea Level</option>
                    <option value="sensorSatelliteLevel">Sensor at Satellite Level</option>
                    <option value="sensorCustomAltitude">Custom Sensor Altitude</option>
                </select>
            </label>
            {selectedAltitudeProfile === "customAltitude" && <CustomAltitude/>}
            {selectedAltitudeProfile === "customPressure" && <CustomPressure/>}
            {selectedAltitudeProfile === "sensorCustomAltitude" && <CustomSensorAltitude/>}
        </div>
    </div>
    );
}
