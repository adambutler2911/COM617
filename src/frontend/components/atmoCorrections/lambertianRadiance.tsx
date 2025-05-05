export default function LambertianRadiance() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                Radiance
            </label>
            <input
                name="radiance"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                placeholder="Radiance"
            />
            </div>
        </div>
    );
}
