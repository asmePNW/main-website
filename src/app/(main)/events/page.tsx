"use client";

import {useState} from "react";
import Image from "next/image";

interface Event {
    id : number;
    title : string;
    date : string;
    location : string;
    description : string;
    image : string;
}

export default function EventsPage() {
    const [events] = useState < Event[] > ([
        {
            id: 1,
            title: "Engineering Expo 2025",
            date: "March 12, 2025",
            location: "Purdue Northwest - Anderson Hall",
            description: "Showcase your mechanical and electrical innovations at our annual expo, featurin" +
                    "g student projects, demos, and sponsors.",
            image: "/mission.png"
        }, {
            id: 2,
            title: "ASME Design Workshop",
            date: "April 2, 2025",
            location: "Tech Building Room 210",
            description: "A hands-on workshop focused on 3D modeling, CAD design, and rapid prototyping te" +
                    "chniques for engineering projects.",
            image: "/mission.png"
        }, {
            id: 3,
            title: "Shell Eco-Marathon Team Meet",
            date: "May 8, 2025",
            location: "Design Lab B",
            description: "Join us to learn how our team builds efficient BLDC-powered cars for the Shell E" +
                    "co-Marathon competition!",
            image: "/mission.png"
        }
    ]);

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                    Upcoming Events
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 w-full overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={400}
                                    height={200}
                                    className="object-cover w-full h-full"/>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                    {event.title}
                                </h2>
                                <p className="text-sm text-gray-500 mb-1">
                                    📅 {event.date}
                                </p>
                                <p className="text-sm text-gray-500 mb-3">
                                    📍 {event.location}
                                </p>
                                <p className="text-gray-700 text-sm mb-4">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
