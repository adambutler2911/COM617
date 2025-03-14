"use client";

import { useState } from "react";

import LambertianRadiance from "./lambertianRadiance";
import LambertianReflectance from "./lambertianReflectance";
import BrdfRadiance from "./brdfRadiance";
import BrdfReflectance from "./brdfReflectance";

export default function CorrectionProfiles() {
    const [selectedAtmosProfile, setSelectedAtmosProfile] = useState('noCorr');
    
    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                Pick a Correction Profile:    
                <select
                    value={selectedAtmosProfile} 
                    onChange={e => setSelectedAtmosProfile(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="noCorr">No Correction</option>
                    <option value="lamRad">Lambertian Radiance</option>
                    <option value="lamRef">Lambertian Reflectance</option>
                    <option value="brdfRad">BRDF Radiance</option>
                    <option value="brdfRef">BRDF Reflectance</option>
                </select>
            </label>
            {selectedAtmosProfile === "lamRad" && <LambertianRadiance/>}
            {selectedAtmosProfile === "lamRef" && <LambertianReflectance/>}
            {selectedAtmosProfile === "brdfRad" && <BrdfRadiance/>}
            {selectedAtmosProfile === "brdfRef" && <BrdfReflectance/>}
        </div>
    </div>
    )
}
