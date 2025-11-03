import TitleCard from '@/components/home/titleCard';
import { InfoCard } from '@/components/ui/cards/InfoCard';
import Image from 'next/image';
import {CountingNumber} from '@/components/ui/shadcn-io/counting-number';
import { RouterButton } from '@/components/ui/buttons/RouterButton';

export default function Home() {
    return (
        <div>
            <TitleCard/>

            <div className="mx-auto max-w-3xl px-6 py-12">
                <section className="space-y-6">
                    <h1 className="text-4xl font-bold text-center">Welcome to ASME PNW</h1>
                    <p className="text-lg text-justify">
                        The American Society of Mechanical Engineers (ASME) Purdue Northwest Student
                        Chapter is dedicated to fostering innovation, collaboration, and professional
                        development among mechanical engineering students at Purdue University
                        Northwest.
                    </p>

                    <section
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl relative z-10">
                        <InfoCard title="Mission" variant="default">
                            Our mission is to provide a platform for students to engage in hands-on
                            projects, network with industry professionals, and enhance their skills through
                            various events and workshops.
                        </InfoCard>

                        <InfoCard title="Vision" variant="default">
                            Our vision is to foster innovation, collaboration, and professional development
                            among mechanical engineering students.
                        </InfoCard>
                    </section>

                </section>
            </div>

            <div className="bg-gray-100 py-12">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded shadow">
                            <h3 className="text-xl font-semibold">Robotics Workshop</h3>
                            <p className="text-gray-600">Date: July 15, 2024</p>
                            <p className="text-gray-600">Location: Engineering Building, Room 101</p>
                        </li>
                        <li className="bg-white p-4 rounded shadow">
                            <h3 className="text-xl font-semibold">Guest Lecture: Innovations in Renewable Energy</h3>
                            <p className="text-gray-600">Date: August 10, 2024</p>
                            <p className="text-gray-600">Location: Main Auditorium</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto max-w-3xl px-6 py-12">
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">The Fastest Growing Club at Purdue</h2>
                    <p className="text-lg text-justify">
                        Becoming a member of ASME PNW opens doors to numerous opportunities. Participate
                        in exciting projects, attend workshops, and connect with like-minded peers and
                        professionals in the field. We welcome students from all years and backgrounds
                        to join our community.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-2xl">
                        <div className="text-center ">
                            <CountingNumber
                                number={50}
                                inView={true}
                                transition={{
                                stiffness: 100,
                                damping: 30
                            }}/>+
                            <p className="mt-2  ">Active General Members</p>
                        </div>
                        <div className="text-center">
                            {/* <CountingNumber
                                number={50}
                                inView={true}
                                transition={{
                                stiffness: 100,
                                damping: 30
                            }}/>+ */}

                            3
                            <p className="mt-2 ">design teams</p>
                        </div>

                    </div>
                    <div className="text-center">
                        <RouterButton href="/join" variant="default" size="lg">
                            Join ASME PNW Today!
                        </RouterButton>
                    </div>
                </section>
            </div>


            <div className="mx-auto px-10 py-12 bg-gray-100">
                <section className="flex items-center justify-between space-x-8">
                    {/* Left side: Text */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">
                            Purdue Northwest ASME
                            <br></br>works best with the best sponsors
                        </h2>
                    </div>

                    {/* Right side: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/sponsor.jpg"
                            alt="ASME Sponsors"
                            width={400}
                            height={400}
                            className="rounded-lg object-contain"/>
                    </div>
                </section>
            </div>

        </div>
    );
}