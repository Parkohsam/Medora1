
import { ScanLine,ShieldCheck,MessageCircle,Stethoscope,Volume2 } from "lucide-react";

const features = [
    {
        icon: ScanLine,
        title: "Medicine Identification",
        description:
            "Scan or upload a medicine package to help identify the product and retrieve relevant medicine information.",
    },
    {
        icon: ShieldCheck,
        title: "Medicine Safety Awareness",
        description:
            "Understand active ingredients, possible side effects, warnings and important medication precautions.",
    },
    {
        icon: MessageCircle,
        title: "AI Medication Assistant",
        description:
            "Ask questions about medicines and receive clear, accessible explanations to support informed decisions.",
    },
    {
        icon: Stethoscope,
        title: "Pharmacist Connection",
        description:
            "Connect with verified pharmacists when you need professional guidance about your medication.",
    },
    {
        icon: Volume2,
        title: "Audio & Language Accessibility",
        description:
            "Listen to medicine information and safety explanations in supported languages.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-white px-5 py-20 md:px-6 md:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-block rounded-full border border-[#D7EDE4] bg-[#F0F8F4] px-4 py-2 text-sm font-medium text-[#075E49]">
                        What Medora offers
                    </span>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#075E49] sm:text-4xl md:text-5xl">
                        Everything you need to understand your medicine.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
                        From identifying medicines to understanding important
                        safety information, Medora makes medication awareness
                        easier and more accessible.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B8DFCE] hover:shadow-lg"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF6F0] text-[#079568]">
                                    <Icon
                                        size={25}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <h3 className="mt-7 text-lg font-bold text-[#075E49]">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}