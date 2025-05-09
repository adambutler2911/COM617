export default function Hapke() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Albedo
                </label>
                <input
                    name="albedo"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Albedo"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Assymetry
                </label>
                <input
                    name="assymetry"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Assymetry"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Amplitude of Hotspot
                </label>
                <input
                    name="ampHotspot"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Amplitude"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Width of Hotspot
                </label>
                <input
                    name="widHotspot"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Width"
                />
            </div>
        </div>
  );
  }
