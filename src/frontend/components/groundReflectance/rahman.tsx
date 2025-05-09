export default function Rahman() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Intensity of Reflectance of the Surface
                </label>
                <input
                    name="intensity"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Reflectance Intensity"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Asymmetry Factor
                </label>
                <input
                    name="asymmetry"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Asymmetry Factor"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Structural Parameter of the Medium
                </label>
                <input
                    name="structural"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Stuctural Parameter"
                />
            </div>
        </div>
  );
  }
