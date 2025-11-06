import {Button} from "../ui/buttons/button";
import Link from "next/link";
import TypingText from "@/components/ui/typing-text";

export default function TitleCard() {
    return (
        <div
            className="relative items-center h-[calc(100vh-5rem)] justify-center text-center px-8 sm:px-0">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover brightness-75 z-0">
                <source src="/video.mp4" type="video/mp4"/>
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"/> {/* Content */}
            <div className="pb-20 h-full">
                <section className="flex h-full justify-center items-center w-full relative z-20 ">
                    <div className="max-w-2xl">
                        <TypingText
                            text={["Design. Build. Inspire.", "Think. Solve. Achieve.", "Innovate. Collaborate. Lead."]}
                            typingSpeed={200}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter=""
                            className="text-4xl font-bold text-white"
                            variableSpeed={{
                            min: 50,
                            max: 120
                        }}/>
                        <p className="text-lg text-gray-200 mb-8">
                            Advancing mechanical engineering at Purdue University Northwest through student
                            innovation and collaboration.
                        </p>

                        <div className="flex justify-center gap-4">
                            <Link href="/join">
                                <Button className="hover:text-black hover:bg-white">Join Us!</Button>
                            </Link>
                            <Link href="/learn-more">
                                <Button variant="outline" className="hover:text-white hover:bg-black">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
