export default function Kuusk() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 mb-[6px]">
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Leaf Area Index
                </label>
                <input
                    name="leafArea"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Leaf Area Index (0.1-10)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    LAD eps
                </label>
                <input
                    name="ladEps"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="LAD eps (0-0.9)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    LAD thm
                </label>
                <input
                    name="ladThm"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="LAD thm (0-90)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Relative Leaf Size
                </label>
                <input
                    name="leafRelative"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Relative Leaf Size (0.01-1)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Chlorophyll Content
                </label>
                <input
                    name="chlorophyll"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Chlorophyll Content (0-30)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Leaf Water Equivilent Thickness
                </label>
                <input
                    name="leafThickness"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Thickness (0.01-0.03)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Effective Number of Elementary Layers Inside a Leaf
                </label>
                <input
                    name="leafLayers"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Layers (1-225)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Ratio of Refractive Indicies of the Leaf Surface Wax and Internal Material
                </label>
                <input
                    name="leafWax"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Ratio (0-1)"
                />
                <label className="block mb-2 text-left text-gray-700 font-bold">
                    Weight of the 1st Price Function for the Soil Reflectance
                </label>
                <input
                    name="soilWeight"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    placeholder="Weight (0.1-0.8)"
                />
            </div>
        </div>
  );
  }
