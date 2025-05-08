import { useState } from "react";

export default function Predefined() {
    const [selectedAeroProfile, setSelectedAeroProfile] = useState('NoAerosols');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <select
                value={selectedAeroProfile} 
                onChange={e => setSelectedAeroProfile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                name="aeroProfilePredefined"
            >
                <option value="0">NoAerosols</option>
                <option value="1">Continental</option>
                <option value="2">Maritime</option>
                <option value="3">Urban</option>
                <option value="4">Desert</option>
                <option value="5">BiomassBurning</option>
                <option value="6">Stratospheric</option>
            </select>
        </div>
    </div>
    );
}
