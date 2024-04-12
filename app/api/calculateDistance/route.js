import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const body = await request.json();

  console.log(body);
  const apiKey = "AIzaSyAQQdrDX9-NNALGPmW6c8HDdVdU1MbQB2c";
  const origin = "37.7749,-122.4194"; // San Francisco
  const destination = "34.0522,-118.2437"; // Los Angeles

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${body.origin}&destinations=${body.destination}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const result = response.data;
    console.log(result);
    const distanceInMiles = result.rows[0].elements[0].distance.value / 1609.34;
    console.log(distanceInMiles);
    return NextResponse.json({ distanceInMiles });
  } catch (error) {
    console.error("Error fetching data: ", error);
    return NextResponse.error("Error fetching data");
  }
}
