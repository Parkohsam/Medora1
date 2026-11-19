import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
    return (
        <section
            id="launch"
            className="relative overflow-hidden bg-[#075E49] px-5 py-20 md:px-8 md:py-24"
        >
            {/* Decorative shapes */}
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#079568] opacity-20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#57C89A] opacity-20 blur-3xl" />

            <div className="relative mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                    <Sparkles size={16} />
                    Something meaningful is taking shape
                </div>

                <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Understanding your medication starts with{" "}
                    <span className="text-[#A9E9C8]">the right information.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                    Medora is being built to make medication awareness
                    easier, clearer and more accessible. Be part of the
                    journey as we work towards a better way to understand
                    the medicines we take.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#features"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#075E49] transition hover:bg-[#EAF6F0]"
                    >
                        Explore Medora
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                <p className="mt-8 text-sm text-white/70">
                    First MVP release planned for Monday, November 23, 2026.
                </p>
            </div>
        </section>
    );
}