"use client";

import { FormEvent, useState} from "react";
import { useRouter } from "next/navigation";
import embed from "vega-embed";

import Button from 'react-bootstrap/Button';

import AtmosProfiles from "@/components/atmosProfile/AtmosphericProfiles";
import AerosolProfiles from "@/components/aeroProfile/AerosolProfiles";
import WaveProfiles from "@/components/wavelengths/waveProfiles";
import AltitudeProfiles from "@/components/altitudes/altitudeProfiles";
import CorrectionProfiles from "@/components/atmoCorrections/correctionProfiles";

export default function Form() {
    const [selectedOutput, setSelectedOutput] = useState('graph');

    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        console.log(formData)
        if (selectedOutput == 'graph'){
            const response = await fetch(`http://127.0.0.1:8000/graph`, {
                method: "POST",
                body: formData
            })
            const json  = JSON.parse(await response.json())
            await embed("#graphWrapperDiv", json)
        } else {
            const response = await fetch(`http://127.0.0.1:8000/raw`, {
                method: "POST",
                body: formData
            })
            console.log(await response.text())
        }
    };

    return (
    <div className="col-span-35 bg-white rounded-lg shadow-lg p-10 transition-transform h-full text-center mr-6">
        <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-5 items-center justify-center h-full"
            data-cy="inputForm"
            id="parameterForm"
        >
            <div className="grid grid-cols-2 gap-[8px] content-start items-center">
                <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
                    Pick desired output:    
                    <select
                        value={selectedOutput} 
                        onChange={e => setSelectedOutput(e.target.value)}
                        className="col-span-2 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                    >
                        <option value="graph">Graph</option>
                        <option value="raw">Raw Text</option>
                    </select>
                </label>
                <div className="w-full mb-[6px]">
                    <AtmosProfiles/>
                </div>
                <div className="w-full mb-[6px]">
                    <AerosolProfiles/>
                </div>
                <div className="w-full mb-[6px]">
                    <WaveProfiles/>
                </div>
                <div className="w-full mb-[6px]">
                    <AltitudeProfiles/>
                </div>
                <div className="col-span-2 w-full mb-[6px]">
                    <CorrectionProfiles/>
                </div>
                <Button
                    onClick={() => router.push('./')}
                    className="col-span-2 w-full bg-(--button-bg) text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-(--button-hover-bg)"
                    type="submit"
                >
                    Get Results
                </Button>
            </div>
            
        </form>
    </div>
    );
}
