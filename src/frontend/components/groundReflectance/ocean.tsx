export default function Ocean() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Wind Speed
                </label>
                <input
                    name="windSpeed"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Wind Speed (m/s)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Azimuth of the Wind
                </label>
                <input
                    name="azimuth"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Azimuth (degrees)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Salinity
                </label>
                <input
                    name="salinity"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Salinity"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Pigment Concentration
                </label>
                <input
                    name="pigment"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Pigment Concentration (mg/m3)"
                />
            </div>
        </div>
  );
  }
