import Image from "next/image";

interface Event {
    id : number;
    title : string;
    date : string;
    location : string;
    description : string;
    image : string;
}

const events : Event[] = [
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
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/CarbonFiber.png"
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

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"/>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3 text-gray-800">
                                    {event.title}
                                </h2>
                                <div className="space-y-2 mb-4">
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="text-yellow-500">📅</span> {event.date}
                                    </p>
                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="text-yellow-500">📍</span> {event.location}
                                    </p>
                                </div>
                                {/* <p className="text-gray-700 text-sm leading-relaxed">
                                    {event.description}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
