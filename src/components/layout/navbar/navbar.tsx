// components/layout/Navbar.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import {RouterButton} from "@/ui/RouterButton"

export function Navbar() {
    const [open,
        setOpen] = useState(false)

    const navLinks = [
        {
            name: "Home",
            href: "/"
        }, {
            name: "Projects",
            href: "/projects"
        }, {
            name: "Team",
            href: "/team"
        }, {
            name: "Events",
            href: "/events"
        }, {
            name: "Contact",
            href: "/contact"
        }
    ]
    return (
        <header
            className="w-full border-b bg-white backdrop-blur absolute z-50 ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <Link href="/" className="flex items-center gap-3">
                
                    <Image
                        src="/asme-logo.png"
                        alt="ASME Purdue Northwest"
                        width={70}
                        height={70}
                        style={{ width: 'auto', height: 'auto' }}
                        className=""/>

                    <span className="font-semibold text-lg tracking-tight">
                        Purdue Northwest Section
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <RouterButton
                            key={link.name}
                            href={link.href}
                            variant="ghost"
                            size="sm"
                            className="text-foreground/80 hover:text-foreground">
                            {link.name}
                        </RouterButton>
                    ))}
                    <RouterButton href="/join" variant="default" size="sm">
                        Join Us
                    </RouterButton>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu">
                    {open
                        ? <FontAwesomeIcon icon={faXmark} className="size-6"/>
                        : <FontAwesomeIcon icon={faBars} className="size-6"/>}
                </button>
            </nav>

            {open && (
                <div
                    className="md:hidden flex flex-col items-center gap-4 pb-6 bg-background border-t">
                    {navLinks.map((link) => (
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
                        href="/join"
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
