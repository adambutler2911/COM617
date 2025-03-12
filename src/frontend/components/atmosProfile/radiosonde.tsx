"use client";

import { FormEvent } from "react";
import { useRouter } from 'next/navigation'

export default function Radiosonde() {
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
      <h1 className="text-green-600 text-3xl">Create a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-5 items-center justify-center"
        data-cy="inputForm"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-3/4 mb-6">
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
              Atmospheric Profiles
            </label>
            <input
              name="recipeName"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Recipe Name"
            />
            <label className="block mt-4 mb-2 text-left text-gray-700 font-bold">
              Description
            </label>
            <textarea
              name="description"
              className="block p-2.5 w-full text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Description"
              rows={6}
            />
          </div>
          <button
            onClick={() => router.push('./')}
            className="bg-green-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500"
            type="submit"
          >
            Submit Parameters
          </button>
        </div>
      </form>
    </div>
  );
}
