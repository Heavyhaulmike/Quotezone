import React, { useState, useEffect, useCallback } from "react";
import useFormStore from "@/utils/formStore";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { haversineDistance, debounce } from "@/utils/distanceCalculator";

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
    tripOriginLat,
    tripOriginLon,
    tripDestinationLat,
    tripDestinationLon,
    lengthInches,
    widthInches,
    heightInches,
    calculatedPrice,
    inputValue,
    options,
    setStep,
    setTripName,
    setTripOrigin,
    setTripDestination,
    setLength,
    setWidth,
    setHeight,
    setWeight,
    setTripOriginLat,
    setTripOriginLon,
    setTripDestinationLat,
    setTripDestinationLon,
    setLengthInches,
    setWidthInches,
    setHeightInches,
    setCalculatedPrice,
    setInputValue,
    setOptions,
    resetForm,
    lowPrice,
    averagePrice,
    highPrice,
    setLowPrice,
    setAveragePrice,
    setHighPrice,
  } = useFormStore();
  // console.log(City.getCitiesOfCountry("US"));

  // Debounce function
  const debouncedFetch = useCallback(
    debounce((input) => {
      const fetchedOptions = City.getCitiesOfCountry("US")
        .filter((city) => city.name.toLowerCase().includes(input.toLowerCase()))
        .map((city) => ({
          value: `${city.name}, ${city.stateCode}`,
          label: `${city.name}, ${city.stateCode}`,
        }));
      setOptions(fetchedOptions);
    }, 1000),
    [] // Empty dependency array means the debounced function is only created once
  );

  useEffect(() => {
    if (inputValue) {
      debouncedFetch(inputValue);
    } else {
      setOptions([]);
    }
  }, [inputValue, debouncedFetch]);

  // Handlers for react-select
  const handleOriginChange = (selectedOption) => {
    setTripOrigin(selectedOption.value);
    const originCity = City.getCitiesOfCountry("US").find(
      (city) => city.name === selectedOption.value.split(",")[0].trim()
    );
    if (originCity) {
      setTripOriginLat(originCity.latitude);
      setTripOriginLon(originCity.longitude);
    }
  };

  const handleDestinationChange = (selectedOption) => {
    setTripDestination(selectedOption.value);
    const destCity = City.getCitiesOfCountry("US").find(
      (city) => city.name === selectedOption.value.split(",")[0].trim()
    );
    if (destCity) {
      setTripDestinationLat(destCity.latitude);
      setTripDestinationLon(destCity.longitude);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    // Convert dimensions to inches
    const widthInInches = width * 12 + widthInches;
    const lengthInInches = length * 12 + lengthInches;
    const heightInInches = height * 12 + heightInches;

    //dimensions should be less that 12
    if (widthInches > 12 || lengthInches > 12 || heightInches > 12) {
      alert("Dimensions in inches should be less than 12 inches");
      return;
    }

    // Calculate distance between origin and destination
    let distance = 0;
    if (
      tripOriginLat &&
      tripDestinationLat &&
      tripOriginLon &&
      tripDestinationLon
    ) {
      distance = haversineDistance(
        tripOriginLat,
        tripOriginLon,
        tripDestinationLat,
        tripDestinationLon
      );
    }

    // Calculate base prices, additional costs, and weight cost for each category
    const calculatePrice = (
      basePrice,
      widthOverBase,
      lengthOverBase,
      heightOverBase,
      distance
    ) => {
      const additionalCost =
        widthOverBase * 0.1 + lengthOverBase * 0.15 + heightOverBase * 0.15;
      const weightCost = weight * 0.1; // Example weight cost calculation
      // Adjust base price based on distance (example: increase cost per mile for longer distances)
      const distanceCost = distance * 0.05; // Example: increase cost by 5% per mile
      return basePrice + additionalCost + weightCost + distanceCost;
    };

    // Determine base prices and calculate prices for each category
    const lowballPrice = calculatePrice(
      3.5,
      Math.max(0, widthInInches - 96),
      Math.max(0, lengthInInches - 264),
      Math.max(0, heightInInches - 144),
      distance
    );
    const averagePrice = calculatePrice(
      5.0,
      Math.max(0, widthInInches - 96),
      Math.max(0, lengthInInches - 264),
      Math.max(0, heightInInches - 144),
      distance
    );
    const hotZonePrice = calculatePrice(
      6.5,
      Math.max(0, widthInInches - 96),
      Math.max(0, lengthInInches - 264),
      Math.max(0, heightInInches - 144),
      distance
    );

    // Display calculated prices
    console.log(`Lowball Price: $${lowballPrice.toFixed(2)}`);
    console.log(`Average Price: $${averagePrice.toFixed(2)}`);
    console.log(`HotZone Price: $${hotZonePrice.toFixed(2)}`);

    // Set the calculated prices to state (if needed)
    // setCalculatedPrice({ lowball: lowballPrice, average: averagePrice, hotZone: hotZonePrice });
    setLowPrice(lowballPrice);
    setAveragePrice(averagePrice);
    setHighPrice(hotZonePrice);
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

  // const calculateDistance = () => {
  //   if (tripOriginLat && tripDestinationLat) {
  //     const distance = haversineDistance(
  //       tripOriginLat,
  //       tripOriginLon,
  //       tripDestinationLat,
  //       tripDestinationLon
  //     );
  //     console.log(`Distance: ${distance.toFixed(2)} miles`);
  //   }
  // };

  // Calculate distance when origin and destination are set
  // useEffect(() => {
  //   calculateDistance();
  // }, [tripOriginLat, tripDestinationLat]);

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
                style={{ color: "black" }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="tripOrigin" className="block mb-1 text-black">
                Trip Origin:
              </label>
              <Select
                id="tripOrigin"
                options={options}
                onChange={handleOriginChange}
                placeholder="Select trip origin"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                onInputChange={setInputValue} // Update inputValue state on input change
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="tripDestination"
                className="block mb-1 text-black"
              >
                Trip Destination:
              </label>
              <Select
                id="tripDestination"
                options={options}
                onChange={handleDestinationChange}
                placeholder="Select trip destination"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                onInputChange={setInputValue} // Update inputValue state on input change
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
            <div className="mb-2 flex justify-between items-center gap-2">
              <div className="w-1/2">
                <label htmlFor="length" className="block mb-1 text-black">
                  Length (in ft):
                </label>
                <input
                  type="number"
                  id="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="Enter length in ft"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                  style={{ color: "black" }}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lengthInches" className="block mb-1 text-black">
                  Length (in inches):
                </label>
                <input
                  type="number"
                  id="lengthInches"
                  value={lengthInches}
                  onChange={(e) => setLengthInches(e.target.value)}
                  placeholder="Enter length in inches"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                  style={{ color: "black" }}
                />
              </div>
            </div>
            <div className="mb-2 flex justify-between items-center gap-2">
              <div className="w-1/2">
                <label htmlFor="width" className="block mb-1 text-black">
                  Width (in ft):
                </label>
                <input
                  type="number"
                  id="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Enter width in ft"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                  style={{ color: "black" }}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="widthInches" className="block mb-1 text-black">
                  Width (in inches):
                </label>
                <input
                  type="number"
                  id="widthInches"
                  value={widthInches}
                  onChange={(e) => setWidthInches(e.target.value)}
                  placeholder="Enter width in inches"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                  style={{ color: "black" }}
                />
              </div>
            </div>
            <div className="mb-2 flex justify-between items-center gap-2">
              <div className="w-1/2">
                <label htmlFor="height" className="block mb-1 text-black">
                  Height (in ft):
                </label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height in ft"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                  style={{ color: "black" }}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="heightInches" className="block mb-1 text-black">
                  Height (in inches):
                </label>
                <input
                  type="number"
                  id="heightInches"
                  value={heightInches}
                  onChange={(e) => setHeightInches(e.target.value)}
                  placeholder="Enter height in inches"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                  style={{ color: "black" }}
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="weight" className="block mb-1 text-black">
                Weight (in lbs):
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in lbs"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
                style={{ color: "black" }}
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
      {lowPrice && averagePrice && highPrice && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black">
            Calculated Prices:
          </h3>
          <p className="text-black">
            <span className="font-bold">Lowball Price:</span> $
            {lowPrice.toFixed(2)}
          </p>
          <p className="text-black">
            <span className="font-bold">Average Price:</span> $
            {averagePrice.toFixed(2)}
          </p>
          <p className="text-black">
            <span className="font-bold">HotZone Price:</span> $
            {highPrice.toFixed(2)}
          </p>
        </div>
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
