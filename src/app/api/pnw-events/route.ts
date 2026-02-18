import { NextResponse } from "next/server";

// Constants
const PNW_BASE_URL = "https://mypnwlife.pnw.edu";
const EVENTS_API = `${PNW_BASE_URL}/mobile_ws/v17/mobile_events_list`;
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
};

// Cache for 5 minutes (300 seconds)
export const revalidate = 300;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") || "10";
  const search = searchParams.get("search") || "asme";

  const url = `${EVENTS_API}?range=0&limit=${limit}&search_word=${encodeURIComponent(search)}`;

  try {
    const response = await fetch(url, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 300 }, // Cache on server
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch" },
      { status: 500 }
    );
  }
}
