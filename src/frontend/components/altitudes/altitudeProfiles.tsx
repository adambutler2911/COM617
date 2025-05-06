"use client";

export default function AltitudeProfiles() {
    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <label className="block mb-2 text-left text-gray-700 font-bold">
                Set Optional Altitude Values:   
            </label>
            <div className="grid grid-cols-2 gap-[8px] content-start items-start">
                <div>
                    <label className="block mb-2 text-left text-gray-700 font-bold">
                        Target Altitude
                    </label>
                    <input
                        name="targetAlt"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                        placeholder="Target Altitude"
                        form="parameterForm"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-left text-gray-700 font-bold">
                        Sensor Altitude
                    </label>
                    <input
                        name="sensorAlt"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                        placeholder="Sensor Altitude"
                        form="parameterForm"
                    />
                </div>
            </div>
        </div>
    </div>
    );
}
