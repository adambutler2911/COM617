export default function Modis() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Weight for Lambertian Kernel
                </label>
                <input
                    name="lamWeight"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Weight"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Weight for Ross Thick Kernel
                </label>
                <input
                    name="rossWeight"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Weight"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Weight for Li Spare Kernel
                </label>
                <input
                    name="liWeight"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Weight"
                />
            </div>
        </div>
  );
  }
