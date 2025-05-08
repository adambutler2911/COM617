export default function Roujean() {
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
                    Geometic Parameter 1
                </label>
                <input
                    name="geometric1"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Geometric Parameter"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Geometic Parameter 2
                </label>
                <input
                    name="geometric2"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Geometric Parameter"
                />
            </div>
        </div>
  );
  }
