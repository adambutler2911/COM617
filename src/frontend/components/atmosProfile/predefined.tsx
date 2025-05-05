import { useState } from "react";

export default function Predefined() {
    const [selectedAtmosType, setSelectedAtmosType] = useState('orange');

    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <select
                value={selectedAtmosType} 
                onChange={e => setSelectedAtmosType(e.target.value)}
                form="parameterForm"
                name="atmoProfilePredefined"
            >
                <option value="0">NoGaseousAbsorption</option>
                <option value="1">Tropical</option>
                <option value="2">MidlatitudeSummer</option>
                <option value="3">MidlatitudeWinter</option>
                <option value="4">SubarcticSummer</option>
                <option value="5">SubarcticWinter</option>
                <option value="6">USStandard1962</option>
            </select>
        </div>
    </div>
    );
}
