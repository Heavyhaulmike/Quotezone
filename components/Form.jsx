import React from "react";
import useFormStore from "@/utils/formStore"; // Adjust the import path as necessary
import { ArrowRight, ArrowLeft } from "lucide-react"; // Import the icons

export default function Form() {
  const {
    step,
    tripName,
    tripOrigin,
    tripDestination,
    length,
    width,
    height,
    weight,
    freightCost, // Add freightCost to the destructured state
    setStep,
    setTripName,
    setTripOrigin,
    setTripDestination,
    setLength,
    setWidth,
    setHeight,
    setWeight,
    resetForm,
    calculateFreight, // Add calculateFreight to the destructured state
  } = useFormStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFreight(); // Call the freight calculation function
    console.log("Form submitted! Freight cost:", freightCost);
    // Handle form submission logic here
  };

  const nextStep = () => {
    if (step === 1 && tripName && tripOrigin && tripDestination) {
      setStep(step + 1);
    } else if (step === 2 && length && width && height && weight) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      resetForm();
    }
  };

  return (
    <div className="md:w-1/2 w-full border bg-white p-6 rounded-lg h-full md:h-[100vh] md:overflow-auto flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold mb-6">Calculator</h2>
      <form onSubmit={handleSubmit} className="w-full md:w-2/3">
        {step === 1 && (
          <>
            <div className="mb-2">
              <label htmlFor="tripName" className="block mb-1">
                Trip Name:
              </label>
              <input
                type="text"
                id="tripName"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="Enter trip name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="tripOrigin" className="block mb-1">
                Trip Origin:
              </label>
              <input
                type="text"
                id="tripOrigin"
                value={tripOrigin}
                onChange={(e) => setTripOrigin(e.target.value)}
                placeholder="Enter trip origin"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="tripDestination" className="block mb-1">
                Trip Destination:
              </label>
              <input
                type="text"
                id="tripDestination"
                value={tripDestination}
                onChange={(e) => setTripDestination(e.target.value)}
                placeholder="Enter trip destination"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="bg-black text-white py-2 px-4 rounded hover:scale-105 focus:outline-none focus:ring-0 flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <div className="mb-2">
              <label htmlFor="length" className="block mb-1">
                Length (in cm):
              </label>
              <input
                type="number"
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="width" className="block mb-1">
                Width (in cm):
              </label>
              <input
                type="number"
                id="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Enter width"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="height" className="block mb-1">
                Height (in cm):
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="weight" className="block mb-1">
                Weight (in kg):
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={prevStep}
                className="bg-black text-white py-2 px-4 rounded hover:scale-105 focus:outline-none focus:ring-0 flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:scale-105 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out"
              >
                Calculate
              </button>
            </div>
            {/* Display the calculated freight cost */}
            {freightCost > 0 && (
              <div className="mt-4 text-xl font-semibold">
                Freight Cost: ${freightCost.toFixed(2)}
              </div>
            )}
          </>
        )}
      </form>
      {/* Step indicators */}
      <div className="flex justify-center mt-4">
        {[1, 2].map((s) => (
          <div
            key={s}
            className={`w-2 h-2 mx-2 rounded-full ${
              step === s ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
