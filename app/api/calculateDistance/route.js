import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const apiKey = "AIzaSyASHlkc8gu6HG-hw8Y37SWHnTt0lsrt_kg";
  const origin = "37.7749,-122.4194"; // San Francisco
  const destination = "34.0522,-118.2437"; // Los Angeles

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const result = response.data;
    console.log(result);
    const distanceInMeters = result.rows[0].elements[0].distance.value;
    console.log(distanceInMeters);
    return NextResponse.json({ distanceInMeters });
  } catch (error) {
    console.error("Error fetching data: ", error);
    return NextResponse.error("Error fetching data");
  }
}
