
import Link from "next/link";
import { ShieldCheck, ScanLine } from "lucide-react";

export default function Hero() {
    return (
        <section className="overflow-hidden bg-[#F8FCFA]">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">

                {/* Hero Content */}
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7EDE4] bg-white px-4 py-2 text-sm font-medium text-[#075E49]">
                        <ShieldCheck size={16} />
                        Medication awareness made simple
                    </div>

                    <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#075E49] sm:text-5xl md:text-6xl">
                        Understand your medicine.
                        <span className="text-[#079568]">
                            {" "}Protect your health.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
                        Get clear information about medicines, their ingredients,
                        uses, possible side effects and important safety warnings.
                        Make more informed decisions about your health.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/get-started"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#075E49] px-6 py-3.5 font-semibold text-white transition hover:bg-[#064b3b]"
                        >
                            Explore Medora
                            {/* <ArrowRight size={18} /> */}
                        </Link>

                        <Link
                            href="/how-it-works"
                            className="inline-flex items-center justify-center rounded-lg border border-[#D7EDE4] bg-white px-6 py-3.5 font-semibold text-[#075E49] transition hover:bg-[#F0F8F4]"
                        >
                            How It Works
                        </Link>
                    </div>

                    {/* Trust Message */}
                    <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
                        <ShieldCheck size={20} className="text-[#079568]" />
                        Clear information. Safer medication awareness.
                    </div>
                </div>

                {/* Visual Placeholder */}
                <div className="flex min-h-[300px] items-center justify-center rounded-3xl bg-[#E5F3EC] p-8 md:min-h-[450px]">
                    <div className="text-center">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-[#079568] shadow-sm">
                            <ScanLine size={48} strokeWidth={1.5} />
                        </div>

                        <h2 className="mt-6 text-xl font-semibold text-[#075E49]">
                            Know what you take.
                        </h2>

                        <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-600">
                            Understand your medication with accessible,
                            easy-to-read information.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}