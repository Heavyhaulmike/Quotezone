// formStore.js
import { create } from "zustand";

const useFormStore = create((set) => ({
  step: 1,
  tripName: "",
  tripOrigin: "",
  tripDestination: "",
  length: "",
  width: "",
  height: "",
  weight: "",
  freightCost: 0, // State for freight cost
  setStep: (step) => set({ step }),
  setTripName: (name) => set({ tripName: name }),
  setTripOrigin: (origin) => set({ tripOrigin: origin }),
  setTripDestination: (destination) => set({ tripDestination: destination }),
  setLength: (length) => set({ length }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  resetForm: () =>
    set({
      step: 1,
      tripName: "",
      tripOrigin: "",
      tripDestination: "",
      length: "",
      width: "",
      height: "",
      weight: "",
      freightCost: 0, // Reset freight cost as well
    }),
  calculateFreight: () => {
    // Simple freight cost calculation based on dimensions
    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    const costPerCubicMeter = 10; // Example cost per cubic meter
    const freightCost = volume * costPerCubicMeter;
    set({ freightCost });
  },
}));

export default useFormStore;
