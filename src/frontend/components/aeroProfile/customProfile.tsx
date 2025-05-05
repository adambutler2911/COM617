export default function CustomProfiles() {
    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <label className="block mt-2 mb-2 text-left text-gray-700 font-bold">
                Dust
            </label>
            <input
                name="dust"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Dust"
            />
            <label className="block mt-2 mb-2 text-left text-gray-700 font-bold">
                Water
            </label>
            <input
                name="water"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Water"
            />
            <label className="block mt-2 mb-2 text-left text-gray-700 font-bold">
                Oceanic
            </label>
            <input
                name="oceanic"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Oceanic"
            />
            <label className="block mt-2 mb-2 text-left text-gray-700 font-bold">
                Soot
            </label>
            <input
                name="soot"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Soot"
            />
        </div>
    </div>
    );
}
