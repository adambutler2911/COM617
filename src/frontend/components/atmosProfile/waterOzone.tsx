export default function WaterOzone() {
    return (
      <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
            <label className="block mb-2 text-left text-gray-700 font-bold">
                Water
            </label>
            <input
                name="atmoWater"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Water"
                form="parameterForm"
            />
            <label className="block mb-2 text-left text-gray-700 font-bold">
                Ozone
            </label>
            <input
                name="atmoOzone"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Ozone"
                form="parameterForm"
            />
            </div>
      </div>
  );
  }