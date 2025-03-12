import { useState } from "react";

export default function Predefined() {
    const [selectedAtmosType, setSelectedAtmosType] = useState('orange');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-6">
            <select
                value={selectedAtmosType} 
                onChange={e => setSelectedAtmosType(e.target.value)}
            >
                <option value="NoGaseousAbsorption">NoGaseousAbsorption</option>
                <option value="Tropical">Tropical</option>
                <option value="MidlatitudeSummer">MidlatitudeSummer</option>
                <option value="MidlatitudeWinter">MidlatitudeWinter</option>
                <option value="SubarcticSummer">SubarcticSummer</option>
                <option value="SubarcticWinter">SubarcticWinter</option>
                <option value="USStandard1962">USStandard1962</option>
            </select>
        </div>
    </div>
    );
}
