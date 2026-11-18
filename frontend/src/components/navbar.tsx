
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import BrandLogo from "./brand-logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
                <BrandLogo />

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-[#075E49]">
                        Home
                    </Link>

                    <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-[#075E49]">
                        About
                    </Link>

                    <Link href="/how-it-works" className="text-sm font-semibold text-gray-600 hover:text-[#075E49]">
                        How It Works
                    </Link>
                </div>

                {/* Desktop CTA */}
                <Link
                    href="/get-started"
                    className="hidden rounded-lg bg-[#075E49] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#064b3b] md:inline-flex"
                >
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="rounded-lg p-2 text-[#075E49] hover:bg-gray-100 md:hidden"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">
                    <div className="flex flex-col gap-5">
                        <Link href="/" onClick={closeMenu} className="text-gray-700 hover:text-[#075E49]">
                            Home
                        </Link>

                        <Link href="/about" onClick={closeMenu} className="text-gray-700 hover:text-[#075E49]">
                            About
                        </Link>

                        <Link href="/how-it-works" onClick={closeMenu} className="text-gray-700 hover:text-[#075E49]">
                            How It Works
                        </Link>

                        <Link
                            href="/get-started"
                            onClick={closeMenu}
                            className="rounded-lg bg-[#075E49] px-5 py-3 text-center font-semibold text-white hover:bg-[#064b3b]"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}