import Link from "next/link";
import BrandLogo from "../components/brand-logo";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Product Showcase", href: "#product-showcase" },
    { label: "FAQs", href: "#faq" },
];

export default function Footer() {
    return (
        <footer className="bg-white px-5 pb-8 pt-14 md:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-10 border-b border-gray-100 pb-12 md:grid-cols-2 md:items-start">

                    {/* BRAND */}
                    <div className="max-w-sm">
                        <BrandLogo />

                        <p className="mt-5 max-w-xs text-sm leading-7 text-gray-600">
                            Making medication knowledge easier to understand
                            through accessible information, audio explanations
                            and professional guidance.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div className="md:justify-self-end">
                        <h3 className="font-semibold text-[#075E49]">
                            Explore Medora
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-[#079568]"
                                    >
                                        {link.label}
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-4 pt-7 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © 2026 Medora. All rights reserved.
                    </p>

                    <p className="font-medium text-[#075E49]">
                        Medication knowledge, in text and audio, for everyone.
                    </p>
                </div>

            </div>
        </footer>
    );
}