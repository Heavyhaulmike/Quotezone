import React, { useState } from "react";
import useFormStore from "@/utils/formStore";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
    setStep,
    setTripName,
    setTripOrigin,
    setTripDestination,
    setLength,
    setWidth,
    setHeight,
    setWeight,
    resetForm,
  } = useFormStore();

  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    if (!length || !width || !height || !weight) {
      alert("Please fill in all fields.");
      return;
    }

    // Convert inputs to inches and pounds
    const widthInInches = width / 2.54; // Assuming width is initially in cm
    const lengthInInches = length / 2.54; // Assuming length is initially in cm
    const heightInInches = height / 2.54; // Assuming height is initially in cm
    const weightInPounds = weight; // Assuming weight is initially in kg

    // Determine base price based on width
    let basePrice;
    if (widthInInches <= 9) {
      basePrice = 3.5; // Lowball price
    } else if (widthInInches <= 26) {
      basePrice = 5.0; // Average price
    } else {
      basePrice = 6.5; // HotZone price
    }

    // Adjust for additional costs
    const widthOverBase = Math.max(0, widthInInches - 9);
    const lengthOverBase = Math.max(0, lengthInInches - 26);
    const heightOverBase = Math.max(0, heightInInches - 12);

    const additionalCost =
      widthOverBase * 0.1 + lengthOverBase * 0.15 + heightOverBase * 0.15;
    const totalPrice = basePrice + additionalCost;

    // Calculate weight cost (assuming a simple weight cost calculation for demonstration)
    const weightCost = weightInPounds * 0.1; // Example weight cost calculation
    const finalPrice = totalPrice + weightCost;

    console.log(`Total Price: $${finalPrice.toFixed(2)}`);

    // Set the calculated price to state
    setCalculatedPrice(finalPrice);
  };

  const nextStep = () => {
    if (step === 1 && tripName && tripOrigin && tripDestination) {
      setStep(step + 1);
    } else if (step === 2 && length && width && height && weight) {
      setStep(step + 1);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      resetForm();
    }
  };

  const handleReset = () => {
    resetForm();
    setCalculatedPrice(null); // Reset calculated price when form is reset
  };

  return (
    <div className="md:w-1/2 w-full bg-white p-6 rounded-lg h-full md:h-[100vh] md:overflow-auto flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold mb-6 text-black">Calculator</h2>
      <form onSubmit={handleSubmit} className="w-full md:w-2/3">
        {step === 1 && (
          <>
            <div className="mb-2">
              <label htmlFor="tripName" className="block mb-1 text-black">
                Trip Name:
              </label>
              <input
                type="text"
                id="tripName"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="Enter trip name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="tripOrigin" className="block mb-1 text-black">
                Trip Origin:
              </label>
              <input
                type="text"
                id="tripOrigin"
                value={tripOrigin}
                onChange={(e) => setTripOrigin(e.target.value)}
                placeholder="Enter trip origin"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="tripDestination"
                className="block mb-1 text-black"
              >
                Trip Destination:
              </label>
              <input
                type="text"
                id="tripDestination"
                value={tripDestination}
                onChange={(e) => setTripDestination(e.target.value)}
                placeholder="Enter trip destination"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
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
              <label htmlFor="length" className="block mb-1 text-black">
                Length (in cm):
              </label>
              <input
                type="number"
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Enter length"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="width" className="block mb-1 text-black">
                Width (in cm):
              </label>
              <input
                type="number"
                id="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Enter width"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="height" className="block mb-1 text-black">
                Height (in cm):
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="weight" className="block mb-1 text-black">
                Weight (in kg):
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{
                  color: "black",
                }}
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
          </>
        )}
        {/* Reset button */}
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-200 text-black py-2 px-4 rounded mt-4 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out"
        >
          Reset Form
        </button>
      </form>
      {/* Display calculated price */}
      {calculatedPrice !== null && (
        <p className="mt-4 text-black">
          <span className="font-bold">Calculated Price: </span>$
          {calculatedPrice.toFixed(2)}
        </p>
      )}
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
