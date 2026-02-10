// components/layout/Footer.tsx
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faLinkedin, faFacebook, faXTwitter} from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import ASMEPNWLogo from "../../../../public/ASMEPNWLogo.png"
import { Button } from "@/components/ui/buttons/Button"

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full border-t backdrop-blur bg-neutral-600">
            <div className="px-4 sm:px-8 lg:px-[15%] py-8 sm:py-12 flex flex-col lg:flex-row items-start lg:items-start justify-between text-white gap-8">
                {/* Left — Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Image
                        src={ASMEPNWLogo}
                        alt="ASME PNW"
                        className="w-auto h-12 sm:h-14 lg:h-16"
                    />
                </div>

                {/* Middle — Link columns */}
                <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-100 mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="mailto:asme@purdue.edu" className="text-gray-300 hover:text-white transition-colors">
                                    asme@purdue.edu
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Location
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                                    Schedule
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-100 mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-gray-100 mb-3">Connect</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com/asme_pnw" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right — Social Icons & Admin Login */}
                <div className="flex flex-col items-end gap-4 shrink-0">
                    <div className="flex items-center gap-4 text-gray-300">
                        <Link href="https://instagram.com/asme_pnw" target="_blank" aria-label="Instagram" className="hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5"/>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5"/>
                        </Link>
                        <Link href="https://x.com" target="_blank" aria-label="X" className="hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5"/>
                        </Link>
                    </div>
                    <Button variant="default" className="text-gray-300 hover:text-white transition-colors">
                        <Link href="/login">Admin Login</Link>
                    </Button>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-500 py-4 text-center text-xs text-gray-300">
                <p>© {year} Purdue Northwest ASME. Built with ❤ by Jih & Aaron</p>
            </div>
        </footer>
    )
}
