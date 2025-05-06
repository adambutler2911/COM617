import { useState } from "react";

export default function Heterogeneous() {
    const [selectedRefProfile, setRefProfile] = useState('Lambertian');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <select
                value={selectedRefProfile} 
                onChange={e => setRefProfile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                form="parameterForm"
                name="refProfileHetero"
            >
                <option value="lambertian">Lambertian</option>
            </select>
        </div>
    </div>
    );
}
