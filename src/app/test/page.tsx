"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ParsedEvent {
  eventId: string;
  eventName: string;
  eventDates: string;
  eventLocation: string;
  eventCategory: string;
  clubName: string;
  eventPicture: string;
  eventPriceRange: string;
  eventUrl: string;
  eventAttendees: string;
}

// Parse the CampusGroups API format
function parseEvent(raw: Record<string, unknown>): ParsedEvent | null {
  if (raw.listingSeparator === "true") return null; // Skip separator entries
  
  const fields = (raw.fields as string)?.split(",") || [];
  const result: Record<string, unknown> = {};
  
  fields.forEach((field, index) => {
    if (field) {
      result[field] = raw[`p${index}`];
    }
  });
  
  return {
    eventId: String(result.eventId || ""),
    eventName: String(result.eventName || ""),
    eventDates: String(result.eventDates || "").replace(/<[^>]*>/g, " ").trim(),
    eventLocation: String(result.eventLocation || "").replace(/<[^>]*>/g, ""),
    eventCategory: String(result.eventCategory || ""),
    clubName: String(result.clubName || ""),
    eventPicture: result.eventPicture ? `https://mypnwlife.pnw.edu${result.eventPicture}` : "/mission.png",
    eventPriceRange: String(result.eventPriceRange || "").replace(/<[^>]*>/g, ""),
    eventUrl: result.eventUrl ? `https://mypnwlife.pnw.edu${result.eventUrl}` : "",
    eventAttendees: String(result.eventAttendees || "0"),
  };
}

export default function TestPage() {
  const [events, setEvents] = useState<ParsedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/pnw-events?limit=10");

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data)) {
          const parsed = data
            .map(parseEvent)
            .filter((e): e is ParsedEvent => e !== null);
          setEvents(parsed);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch events");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/events.png"
            alt="Events Background"
            fill
            className="opacity-90 object-cover"
          />
          {/* Left gradient */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white to-transparent"></div>
          {/* Right gradient */}
          <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white to-transparent"></div>
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 drop-shadow-2xl">
                Events
              </h1>
              <p className="text-black text-lg mb-8 max-w-xl drop-shadow-lg leading-relaxed">
                Join workshops, competitions, and networking sessions designed to enhance your engineering skills and connect you with industry professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Join us for workshops, competitions, and networking opportunities.
        </p>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <a
                key={event.eventId}
                href={event.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.eventPicture}
                    alt={event.eventName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {event.eventName}
                  </h2>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-yellow-500">📅</span> {event.eventDates}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-yellow-500">📍</span> {event.eventLocation}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-yellow-500">🎟️</span> {event.eventPriceRange}
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {event.eventAttendees} attending • {event.clubName}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No upcoming events found.</p>
        )}
      </div>
    </div>
  );
}
