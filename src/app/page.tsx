import TitleCard from '@/components/home/titleCard';
import {Card, CardContent, CardTitle, CardDescription} from '@/components/ui/cards/card';
import Image from 'next/image';
import {CountingNumber} from '@/components/ui/shadcn-io/counting-number';
import {Button} from '@/components/ui/buttons/Button';
import Link from 'next/link';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Home() {

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

    return (
        <div>

            <TitleCard/>

            <div id="mission" className="pt-30 px-[15%] ">
                <section className="space-y-4">
                    <h1 className="text-4xl font-bold text-purdue-black leading-tight">
                        Advancing mechanical engineering<br/>
                        through student collaboration.
                    </h1>
                    <p className="text-4xl text-purdue-railway leading-tight">
                        Our mission is to inspire, connect, and
                        empower<br/> future engineers at Purdue Northwest.
                    </p>

                </section>
            </div>

            {/* Feature Sections */}
            <div className="py-12 px-[15%]">
                {/* Senior Design Showcase - Text Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-purdue-black mb-4">
                            Shell-Eco Marathon
                        </h2>
                        <p className="text-lg text-gray-600">
                            Students build and race energy-efficient vehicles in the Shell Eco-Marathon
                            competition.
                        </p>
                    </div>
                    <div
                        className="relative rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image
                            src="/square1.png"
                            alt="Senior Design Showcase"
                            fill
                            className="object-cover"/>
                    </div>
                </div>

                {/* 3D Printing Hub - Image Left, Text Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div
                        className="relative rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image src="/square4.jpg" alt="3D Printing Hub" fill className="object-cover"/>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-purdue-black mb-4">
                            3D Printing Hub.
                        </h2>
                        <p className="text-lg text-gray-600">
                            Hands-on training with professional-grade additive manufacturing tools.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-purdue-black mb-4">
                            Senior Design Showcase.
                        </h2>
                        <p className="text-lg text-gray-600">
                            Showcases research-driven capstone design projects that integrate engineering theory, applied research, and real-world problem solving within a research university setting.
                        </p>
                    </div>
                    <div
                        className="relative rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                        <Image
                            src="/square2.jpg"
                            alt="Senior Design Showcase"
                            fill
                            className="object-cover"/>
                    </div>
                </div>

            </div>

            {/* Projects List */}
            <div className="pb-30 px-[15%]">
                <div className="space-y-0">
                    {[
                        {
                            name: "Machine Redesign",
                            year: 2026
                        }, {
                            name: "Solar Car",
                            year: 2025
                        }, {
                            name: "Rover Team",
                            year: 2025
                        }, {
                            name: "Wind Turbine",
                            year: 2024
                        }, {
                            name: "3D Printing Hub",
                            year: 2024
                        }, {
                            name: "Biomedical Devices",
                            year: 2023
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                            <span className="text-lg font-medium text-gray-800">{project.name}</span>
                            <span className="text-lg text-gray-500">{project.year}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-100 py-30 px-[15%]">
                <div>
                    <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    {/* <p className="text-gray-700 text-sm mb-4">
                                        {event.description}
                                    </p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link href="/events">
                            <Button
                                className='hover:bg-gray-300 hover:text-black'
                                variant="default"
                                size="lg">
                                View All Events
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="py-30 px-[15%]">
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">The Fastest Growing Club at Purdue</h2>
                    <p className="text-lg text-justify">
                        Becoming a member of ASME PNW opens doors to numerous opportunities. Participate
                        in exciting projects, attend workshops, and connect with like-minded peers and
                        professionals in the field. We welcome students from all years and backgrounds
                        to join our community.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="text-center">
                            <div className="text-6xl font-bold text-purdue-black">
                                <CountingNumber
                                    number={100}
                                    inView={true}
                                    transition={{
                                    stiffness: 100,
                                    damping: 30
                                }}/>+
                            </div>
                            <p className="mt-2 text-xl text-purdue-railway">Members</p>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold text-purdue-black">
                                <CountingNumber
                                    number={20}
                                    inView={true}
                                    transition={{
                                    stiffness: 100,
                                    damping: 30
                                }}/>
                            </div>
                            <p className="mt-2 text-xl text-purdue-railway">Years active</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <Link className="m" href='https://mypnwlife.pnw.edu/ASME/club_signup'>

                            <Button
                                className='hover:bg-gray-300 hover:text-black'
                                variant="default"
                                size="lg">
                                <FontAwesomeIcon icon={faLink}/>
                                Join ASME PNW Today!

                            </Button>
                        </Link>
                    </div>

                </section>
            </div>

            <div className="py-30 px-[15%] bg-gray-100">
                <section>
                    <div className="justify-center mb-8 text-center">
                        <h2 className="text-3xl font-bold">
                            Purdue Northwest ASME
                            <br/>works best with the best sponsors
                        </h2>
                    </div>

                    {/* Platinum Sponsors */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-700">
                            <span
                                className="inline-block px-4 py-1 bg-linear-to-r from-gray-300 via-gray-100 to-gray-300 rounded-full">
                                Platinum Sponsors
                            </span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                            <Card className="w-full max-w-md bg-white hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center p-6">
                                    <Image
                                        src="/sponsors/platinum1.png"
                                        alt="Platinum Sponsor"
                                        width={200}
                                        height={100}
                                        className="object-contain mb-4"/>
                                    <CardTitle className="text-lg">Platinum Partner Co.</CardTitle>
                                    <CardDescription className="text-center">Leading innovation in engineering solutions</CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="w-full max-w-md bg-white hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center p-6">
                                    <Image
                                        src="/sponsors/platinum2.png"
                                        alt="Platinum Sponsor"
                                        width={200}
                                        height={100}
                                        className="object-contain mb-4"/>
                                    <CardTitle className="text-lg">Tech Industries Inc.</CardTitle>
                                    <CardDescription className="text-center">Empowering the next generation of engineers</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Gold Sponsors */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-center mb-6 text-yellow-600">
                            <span
                                className="inline-block px-4 py-1 bg-linear-to-r from-yellow-300 via-yellow-100 to-yellow-300 rounded-full">
                                Gold Sponsors
                            </span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                            <Card
                                className="w-full max-w-sm bg-white hover:shadow-lg transition-shadow border-yellow-200">
                                <CardContent className="flex flex-col items-center p-5">
                                    <Image
                                        src="/sponsors/gold1.png"
                                        alt="Gold Sponsor"
                                        width={150}
                                        height={75}
                                        className="object-contain mb-3"/>
                                    <CardTitle className="text-base">Gold Sponsor 1</CardTitle>
                                    <CardDescription className="text-center text-sm">Supporting ASME excellence</CardDescription>
                                </CardContent>
                            </Card>
                            <Card
                                className="w-full max-w-sm bg-white hover:shadow-lg transition-shadow border-yellow-200">
                                <CardContent className="flex flex-col items-center p-5">
                                    <Image
                                        src="/sponsors/gold2.png"
                                        alt="Gold Sponsor"
                                        width={150}
                                        height={75}
                                        className="object-contain mb-3"/>
                                    <CardTitle className="text-base">Gold Sponsor 2</CardTitle>
                                    <CardDescription className="text-center text-sm">Driving engineering innovation</CardDescription>
                                </CardContent>
                            </Card>
                            <Card
                                className="w-full max-w-sm bg-white hover:shadow-lg transition-shadow border-yellow-200">
                                <CardContent className="flex flex-col items-center p-5">
                                    <Image
                                        src="/sponsors/gold3.png"
                                        alt="Gold Sponsor"
                                        width={150}
                                        height={75}
                                        className="object-contain mb-3"/>
                                    <CardTitle className="text-base">Gold Sponsor 3</CardTitle>
                                    <CardDescription className="text-center text-sm">Investing in future talent</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Silver Sponsors */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-center mb-6 text-gray-500">
                            <span
                                className="inline-block px-4 py-1 bg-linear-to-r from-gray-400 via-gray-200 to-gray-400 rounded-full">
                                Silver Sponsors
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-4">
                                    <Image
                                        src="/sponsors/silver1.png"
                                        alt="Silver Sponsor"
                                        width={120}
                                        height={60}
                                        className="object-contain mb-2"/>
                                    <CardTitle className="text-sm">Silver Sponsor 1</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-4">
                                    <Image
                                        src="/sponsors/silver2.png"
                                        alt="Silver Sponsor"
                                        width={120}
                                        height={60}
                                        className="object-contain mb-2"/>
                                    <CardTitle className="text-sm">Silver Sponsor 2</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-4">
                                    <Image
                                        src="/sponsors/silver3.png"
                                        alt="Silver Sponsor"
                                        width={120}
                                        height={60}
                                        className="object-contain mb-2"/>
                                    <CardTitle className="text-sm">Silver Sponsor 3</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-4">
                                    <Image
                                        src="/sponsors/silver4.png"
                                        alt="Silver Sponsor"
                                        width={120}
                                        height={60}
                                        className="object-contain mb-2"/>
                                    <CardTitle className="text-sm">Silver Sponsor 4</CardTitle>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Bronze Sponsors */}
                    <div>
                        <h3 className="text-2xl font-bold text-center mb-6 text-amber-700">
                            <span
                                className="inline-block px-4 py-1 bg-linear-to-r from-amber-400 via-amber-200 to-amber-400 rounded-full">
                                Bronze Sponsors
                            </span>
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 justify-items-center">
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-3">
                                    <Image
                                        src="/sponsors/bronze1.png"
                                        alt="Bronze Sponsor"
                                        width={80}
                                        height={40}
                                        className="object-contain mb-1"/>
                                    <CardTitle className="text-xs">Bronze 1</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-3">
                                    <Image
                                        src="/sponsors/bronze2.png"
                                        alt="Bronze Sponsor"
                                        width={80}
                                        height={40}
                                        className="object-contain mb-1"/>
                                    <CardTitle className="text-xs">Bronze 2</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-3">
                                    <Image
                                        src="/sponsors/bronze3.png"
                                        alt="Bronze Sponsor"
                                        width={80}
                                        height={40}
                                        className="object-contain mb-1"/>
                                    <CardTitle className="text-xs">Bronze 3</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-3">
                                    <Image
                                        src="/sponsors/bronze4.png"
                                        alt="Bronze Sponsor"
                                        width={80}
                                        height={40}
                                        className="object-contain mb-1"/>
                                    <CardTitle className="text-xs">Bronze 4</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-3">
                                    <Image
                                        src="/sponsors/bronze5.png"
                                        alt="Bronze Sponsor"
                                        width={80}
                                        height={40}
                                        className="object-contain mb-1"/>
                                    <CardTitle className="text-xs">Bronze 5</CardTitle>
                                </CardContent>
                            </Card>
                            <Card className="w-full bg-white hover:shadow-md transition-shadow">
                                <CardContent className="flex flex-col items-center p-3">
                                    <Image
                                        src="/sponsors/bronze6.png"
                                        alt="Bronze Sponsor"
                                        width={80}
                                        height={40}
                                        className="object-contain mb-1"/>
                                    <CardTitle className="text-xs">Bronze 6</CardTitle>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}