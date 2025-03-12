import { useState } from "react";

export default function SunPhotometer() {
    const [selectedAeroProfile, setSelectedAeroProfile] = useState('orange');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <select
                value={selectedAeroProfile} 
                onChange={e => setSelectedAeroProfile(e.target.value)}
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
