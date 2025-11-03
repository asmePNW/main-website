// components/layout/Navbar.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import {RouterButton} from "@/components/ui/buttons/RouterButton"
import {NAV_LINKS} from "@/config/routes"

export function Navbar() {
    const [open,
        setOpen] = useState(false)

    const links = [
        {
            name: "Home",
            href: NAV_LINKS.HOME
        }, {
            name: "Projects",
            href: NAV_LINKS.PROJECTS
        }, {
            name: "Team",
            href: NAV_LINKS.TEAM
        }, {
            name: "Events",
            href: NAV_LINKS.EVENTS
        }, {
            name: "Contact",
            href: NAV_LINKS.CONTACT
        }
    ]
    return (
        <header className="w-full border-b bg-white backdrop-blur z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/asme-logo.png"
                        alt="ASME Purdue Northwest"
                        width={70}
                        height={70}
                        className="w-auto h-16"/>
                    <span className="font-semibold text-lg tracking-tight">
                        Purdue Northwest Section
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <RouterButton
                            key={link.name}
                            href={link.href}
                            variant="ghost"
                            size="sm"
                            className="text-foreground/80 hover:text-foreground">
                            {link.name}
                        </RouterButton>
                    ))}
                    <RouterButton href={NAV_LINKS.JOIN} variant="default" size="sm">
                        Join Us
                    </RouterButton>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu">
                    <FontAwesomeIcon
                        icon={open
                        ? faXmark
                        : faBars}
                        className="w-6 h-6"/>
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div
                    className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white border-t">
                    {links.map((link) => (
                        <RouterButton
                            key={link.name}
                            href={link.href}
                            variant="ghost"
                            size="default"
                            onClick={() => setOpen(false)}>
                            {link.name}
                        </RouterButton>
                    ))}
                    <RouterButton
                        href={NAV_LINKS.JOIN}
                        variant="default"
                        size="default"
                        onClick={() => setOpen(false)}>
                        Join Us
                    </RouterButton>
                </div>
            )}
        </header>
    )
}
