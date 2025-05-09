export default function CustomSensorAltitude() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Sensor Altitude
                </label>
                <input
                    name="altitude"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Altitude"
                />
            </div>
        </div>
  );
  }
