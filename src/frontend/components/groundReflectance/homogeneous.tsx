import { useState } from "react";
import Walthall from "./walthall";
import Hapke from "./hapke";
import Roujean from "./roujean";
import Minnaert from "./minnaert";
import Modis from "./modis";
import Ocean from "./ocean";
import Rahman from "./rahman";
import Iaqunita from "./iaquinta";
import Kuusk from "./kuusk";

export default function Homogeneous() {
    const [selectedRefProfile, setRefProfile] = useState('Lambertian');
    
    return (
    <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 mb-[6px]">
            <select
                value={selectedRefProfile} 
                onChange={e => setRefProfile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                form="parameterForm"
                name="refProfileHomo"
            >
                <option value="lambertian">Lambertian</option>
                <option value="walthall">Walthall</option>
                <option value="hapke">Hapke</option>
                <option value="roujean">Roujean</option>
                <option value="minnaert">Minnaert</option>
                <option value="modis">MODIS</option>
                <option value="ocean">Ocean</option>
                <option value="rahman">Rahman</option>
                <option value="iaquinta">Iaquinta and Pinty</option>
                <option value="kuusk">Kuusk</option>
            </select>
            {selectedRefProfile === "walthall" && <Walthall/>}
            {selectedRefProfile === "hapke" && <Hapke/>}
            {selectedRefProfile === "roujean" && <Roujean/>}
            {selectedRefProfile === "minnaert" && <Minnaert/>}
            {selectedRefProfile === "modis" && <Modis/>}
            {selectedRefProfile === "ocean" && <Ocean/>}
            {selectedRefProfile === "rahman" && <Rahman/>}
            {selectedRefProfile === "iaquinta" && <Iaqunita/>}
            {selectedRefProfile === "kuusk" && <Kuusk/>}
        </div>
    </div>
    );
}
