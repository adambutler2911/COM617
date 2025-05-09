"use client";
import { useState } from "react";

import Homogeneous from "./homogeneous";
import Heterogeneous from "./heterogeneous";

export default function ReflectanceProfiles() {
    const [selectedReflectanceProfile, setReflectanceProfile] = useState('homogeneous');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <label className="block mb-2 text-left text-gray-700 font-bold">
                Pick a Reflectance Profile:    
                <select
                    value={selectedReflectanceProfile} 
                    onChange={e => setReflectanceProfile(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    form="parameterForm"
                    name="refProfile"
                >
                    <option value="homogeneous">Homogeneous</option>
                    <option value="heterogeneous">HeteroGeneous</option>
                </select>
            </label>
            {selectedReflectanceProfile === "homogeneous" && <Homogeneous/>}
            {selectedReflectanceProfile === "heterogeneous" && <Heterogeneous/>}
        </div>
    </div>
    );
}
