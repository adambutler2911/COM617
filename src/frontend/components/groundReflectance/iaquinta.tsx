import { useState } from "react";

export default function Iaqunita() {
    const [selectedHotspot, setHotspot] = useState('nohotspot');
    const [selectedLeafDistribution, setLeafDist] = useState('uniform');

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Leaf Distribution
                </label>
                <select
                    value={selectedLeafDistribution} 
                    onChange={e => setLeafDist(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    form="parameterForm"
                    name="leafDistribution"
            >
                    <option value="erectophile">Erectophile</option>
                    <option value="extremophile">Extremophile</option>
                    <option value="plagiophile">Plagiophile</option>
                    <option value="planophile">Planophile</option>
                    <option value="uniform">Uniform</option>
                </select>
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Hotspot Setting
                </label>
                <select
                    value={selectedHotspot} 
                    onChange={e => setHotspot(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    form="parameterForm"
                    name="hotspotSetting"
            >
                    <option value="nohotspot">No Hotspot</option>
                    <option value="hotspot">Hotspot</option>
                </select>
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Leaf Area Index
                </label>
                <input
                    name="leafArea"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Leaf Area Index (1-15)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Hot Spot Parameter
                </label>
                <input
                    name="hotspotParameter"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Hot Spot Parameter (0-2)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Leaf Reflectance
                </label>
                <input
                    name="leafReflectance"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Leaf Reflectance (0-0.99)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Leaf Transmittance
                </label>
                <input
                    name="leafTransmittance"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Leaf Tansmittance (0-0.99)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Soil Albedo
                </label>
                <input
                    name="soilAlbedo"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Soil Albedo (0-0.99)"
                />
            </div>
        </div>
  );
  }
