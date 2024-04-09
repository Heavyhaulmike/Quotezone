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
    }),
}));

export default useFormStore;
