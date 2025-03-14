"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Button from 'react-bootstrap/Button';

import AtmosProfiles from "@/components/atmosProfile/AtmosphericProfiles";
import AerosolProfiles from "@/components/aeroProfile/AerosolProfiles";
import WaveProfiles from "@/components/wavelengths/waveProfiles";
import AltitudeProfiles from "@/components/altitudes/altitudeProfiles";
import CorrectionProfiles from "@/components/atmoCorrections/correctionProfiles";

export default function Form() {
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const response = await fetch(`/api/graph`, {
            method: "GET",
            body: JSON.stringify({
            description: formData.get("description"),
            name: formData.get("recipeName")
            }),
        });
        console.log({ response });
    };

    return (
    <div className="main bg-white rounded-lg shadow-lg p-10 transition-transform w-1/2 text-center">
        <h1 className="text-green-600 text-3xl">Set the 6S parameters</h1>
        <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-5 items-center justify-center"
            data-cy="inputForm"
        >
            <div className="flex flex-col justify-center items-center">
                <div className="w-3/4 mb-6">
                    <AtmosProfiles/>
                </div>
                <div className="w-3/4 mb-6">
                    <AerosolProfiles/>
                </div>
                <div className="w-3/4 mb-6">
                    <WaveProfiles/>
                </div>
                <div className="w-3/4 mb-6">
                    <AltitudeProfiles/>
                </div>
                <div className="w-3/4 mb-6">
                    <CorrectionProfiles/>
                </div>
                <Button
                    onClick={() => router.push('./')}
                    className="bg-green-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500"
                    type="submit"
                >
                    Submit Parameters
                </Button>
            </div>
        </form>
    </div>
    );
}
