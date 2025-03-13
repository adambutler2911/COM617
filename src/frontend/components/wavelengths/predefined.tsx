import { useState } from "react";

export default function Predefined() {
    const [selectedWaveType, setSelectedWaveType] = useState('orange');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <select
                value={selectedWaveType} 
                onChange={e => setSelectedWaveType(e.target.value)}
            >
                <option value="landsatB1">Landsat OLI B1</option>
                <option value="landsatB2">Landsat OLI B2</option>
                <option value="landsatB3">Landsat OLI B3</option>
                <option value="landsatB4">Landsat OLI B4</option>
                <option value="landsatB5">Landsat OLI B5</option>
                <option value="landsatB6">Landsat OLI B6</option>
                <option value="landsatB7">Landsat OLI B7</option>
                <option value="landsatB8">Landsat OLI B8</option>
                <option value="landsatB9">Landsat OLI B9</option>
                <option value="rapidEyeB1">RapidEye B1</option>
                <option value="rapidEyeB2">RapidEye B2</option>
                <option value="rapidEyeB3">RapidEye B3</option>
                <option value="rapidEyeB4">RapidEye B4</option>
                <option value="rapidEyeB5">RapidEye B5</option>
                <option value="pleiadesB1">Pleiades B1</option>
                <option value="pleiadesB2">Pleiades B2</option>
                <option value="pleiadesB3">Pleiades B3</option>
                <option value="pleiadesB4">Pleiades B4</option>
                <option value="pleiadesPan">Pleiades Pan</option>
            </select>
        </div>
    </div>
    )
}