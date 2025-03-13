import { useState } from "react";

export default function Predefined() {
    const [selectedAeroProfile, setSelectedAeroProfile] = useState('NoAerosols');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <select
                value={selectedAeroProfile} 
                onChange={e => setSelectedAeroProfile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="NoAerosols">NoAerosols</option>
                <option value="Continental">Continental</option>
                <option value="Maritime">Maritime</option>
                <option value="Urban">Urban</option>
                <option value="Desert">Desert</option>
                <option value="BiomassBurning">BiomassBurning</option>
                <option value="Stratospheric">Stratospheric</option>
            </select>
        </div>
    </div>
    );
}
