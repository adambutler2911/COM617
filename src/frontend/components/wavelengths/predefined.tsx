import { useState } from "react";

export default function Predefined() {
    const [selectedWaveType, setSelectedWaveType] = useState('orange');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <select
                value={selectedWaveType} 
                onChange={e => setSelectedWaveType(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                form="parameterForm"
                name="waveProfilePredefined"
            >
                <option value="LANDSAT_OLI">Landsat OLI</option>
                <option value="S2A_MSI">Sentinel-2A MSI</option>
                <option value="S3A_OLCI">Sentinel-3A OLCI</option>
                <option value="S3A_SLSTR">Sentinel-3A SLSTR</option>
                <option value="S2B_MSI">Sentinel-2B MSI</option>
                <option value="S3B_OLCI">Sentinel-3B OLCI</option>
                <option value="S3B_SLSTR">Sentinel-3B SLSTR</option>
                <option value="ACCURATE_MODIS_TERRA">MODIS TERRA</option>
                <option value="ACCURATE_MODIS_AQUA">MODIS AQUA</option>
                <option value="PROBAV_1">PROBAV 1</option>
                <option value="PROBAV_2">PROBAV 2</option>
                <option value="PROBAV_3">PROBAV 3</option>
            </select>
        </div>
    </div>
    )
}