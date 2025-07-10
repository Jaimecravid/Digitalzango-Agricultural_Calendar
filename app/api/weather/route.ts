import { NextResponse } from 'next/server';

/**
 * @returns A JSON response with weather data or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const apiKey = process.env.OPENWEATHER_API_KEY;
  
  // --- Enhanced API Key and Parameter Validation ---
  if (!apiKey) {
    console.error('CRITICAL: OPENWEATHER_API_KEY environment variable is not set.');
    return NextResponse.json({ message: 'Server configuration error: Weather service API key is missing.' }, { status: 500 });
  } else {
    // This log confirms the key is loaded, without exposing the full key.
    console.log(`✅ API Key loaded successfully, starting with: ${apiKey.substring(0, 4)}...`);
  }
  
  if (!lat || !lon) {
    console.warn('Request rejected: Missing latitude or longitude parameters.');
    return NextResponse.json({ message: 'Latitude and longitude are required parameters.' }, { status: 400 });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // The error from the provider might not be JSON, so read as text to be safe.
      const errorText = await response.text();
      console.error(`OpenWeatherMap API error (status: ${response.status}):`, errorText);
      return NextResponse.json({ message: `Failed to fetch weather data. Provider returned status ${response.status}.` }, { status: response.status });
    }

    const data = await response.json();

    // Return only the data needed by the client to minimize data exposure
    const shapedData = {
      temp: data.main.temp,
      description: data.weather[0]?.description || 'N/A',
    };

    return NextResponse.json(shapedData);
  } catch (error) {
    console.error('Error fetching from OpenWeatherMap:', error);
    return NextResponse.json({ message: 'Internal server error while fetching weather.' }, { status: 500 });
  }
}
