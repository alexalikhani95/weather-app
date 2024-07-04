import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'brighton';

  try {
    const { data } = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.API_KEY}&contentType=json`
    );

    return NextResponse.json(data);
  } catch (error) {
    console.log({ error });
    return new Response('Failed to load', { status: 500 });
  }
}
