export default function Range() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-6">
                <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                    Starting Wavelength
                </label>
                <input
                    name="minRad"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Min Radius"
                />
                <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                    End Wavelength
                </label>
                <input
                    name="maxRad"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Max Radius"
                />
            </div>
        </div>
    );
}