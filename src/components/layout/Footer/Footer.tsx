// components/layout/Footer.tsx
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            className="w-full border-t  backdrop-blur bg-neutral-600 ">
            <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3 text-white">
                {/* Section 1 — Logo / Summary */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold tracking-tight ">ASME PNW</h2>
                    <p className="text-sm text-gray-300 max-w-xs">
                        Advancing mechanical engineering innovation at Purdue University Northwest
                        through projects, collaboration, and student leadership.
                    </p>
                </div>

                {/* Section 2 — Quick Links */}
                <div>
                    <h3 className="text-sm font-semibold uppercase text-gray-100 mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/projects"
                                className="text-gray-300 hover:text-foreground transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/team"
                                className="text-gray-300 hover:text-foreground transition-colors">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                className="text-gray-300 hover:text-foreground transition-colors">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-gray-300 hover:text-foreground transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section 3 — Socials */}
                <div>
                    <h3 className="text-sm font-semibold uppercase text-gray-100 mb-3">
                        Connect
                    </h3>
                    <div className="flex gap-4 text-gray-300">
                        <Link
                            href="mailto:pnwasme@gmail.com"
                            className=" hover:text-primary transition-colors"
                            aria-label="Email ASME PNW">
                            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5"/>
                        </Link>
                        <Link
                            href="https://www.instagram.com/asme_pnw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            className=" hover:text-primary transition-colors"
                            aria-label="GitHub">
                            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/asme-pnw"
                            target="_blank"
                            className=" hover:text-primary transition-colors"
                            aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5"/>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t py-4 text-center text-xs text-gray-300">
                <p>© {year}
                    Purdue Northwest ASME. Built with ❤ by Jih</p>
            </div>
        </footer>
    )
}
