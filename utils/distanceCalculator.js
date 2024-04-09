// utils/distanceCalculator.js
import axios from "axios";

export const calculateDistance = async (origin, destination) => {
  const osrmUrl = "http://router.project-osrm.org/route/v1/driving/"; // Example OSRM URL
  const url = `${osrmUrl}${origin};${destination}?overview=false`;

  try {
    const response = await axios.get(url);
    const distance = response.data.routes[0].distance; // Distance in meters
    return distance;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};
