export default function SunPhotometer() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <input type="file" name="mieFile" accept="text/*"
                    className="block w-full border border-gray-300 shadow-sm rounded-lg text-sm
                        file:bg-green-600 file:border-0
                        file:me-4 file:text-white file:w-1/5
                        file:py-3 file:px-4 file:sm:py-5">
                </input>
            </div>
        </div>
    );
}