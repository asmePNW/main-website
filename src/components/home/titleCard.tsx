import { Button } from "../ui/buttons/button";
import Link from "next/link";
import TypingText from "@/components/ui/typing-text";

export default function TitleCard() {

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center text-center p-8 relative">

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-75">
                <source src="/video.mp4" type="video/mp4"/>
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"/> {/* Hero Section */}
            <section className="max-w-2xl relative z-10">
                <TypingText
                    text={["Design. Build. Inspire.", "Think. Solve. Achieve.", "Innovate. Collaborate. Lead."]}
                    typingSpeed={200}
                    pauseDuration={1500}
                    showCursor={false}
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
                        <Button variant="outline" className="hover:text-white hover:bg-black">Learn More</Button>
                    </Link>
                </div>
            </section>

        </main>
    )

}
