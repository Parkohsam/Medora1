import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is Medora?",
        answer:
            "Medora is a medication-awareness platform in development. Its goal is to help people identify medicines and better understand their ingredients, uses, possible side effects, warnings and precautions.",
    },
    {
        question: "Can Medora diagnose illnesses or prescribe medication?",
        answer:
            "No. Medora is designed to provide medication information and awareness, not medical diagnosis or prescriptions. It does not replace the professional guidance of a qualified doctor or pharmacist.",
    },
    {
        question: "How will medicine identification work?",
        answer:
            "The planned experience will allow users to scan or upload an image of their medicine packaging. The medicine name, strength and formulation should always be confirmed before relying on the information provided.",
    },
    {
        question: "Will Medora support Nigerian languages?",
        answer:
            "Yes, local-language accessibility is part of our vision. We plan to introduce audio explanations with support for Yoruba, Hausa and Igbo, making medicine information easier to understand.",
    },
    {
        question: "Can I speak with a pharmacist through Medora?",
        answer:
            "We plan to provide access to registered pharmacists so users can seek professional medication guidance without necessarily leaving their homes.",
    },
    {
        question: "When will Medora be available?",
        answer:
            "Medora is currently in development. We are working towards launching our first version (MVP) on Monday, November 23, 2026. Follow our updates for the latest launch information.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            className="bg-white px-5 py-20 md:px-8 md:py-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* LEFT: INTRODUCTION */}
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D7EDE4] bg-[#F0F8F4] px-4 py-2 text-sm font-medium text-[#075E49]">
                            <HelpCircle size={16} />
                            Got questions?
                        </span>

                        <h2 className="mt-6 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#075E49] sm:text-4xl md:text-5xl">
                            Everything you need to know about{" "}
                            <span className="text-[#079568]">
                                Medora.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
                            Have questions about how Medora works,
                            medication safety or the features were building?
                            Weve answered some common questions below.
                        </p>
                    </div>

                    {/* RIGHT: FAQ ACCORDION */}
                    <div className="divide-y divide-gray-200 border-y border-gray-200">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                className="group py-5"
                                open={index === 0}
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                                    <span className="text-base font-semibold leading-7 text-[#075E49] transition-colors group-hover:text-[#079568]">
                                        {faq.question}
                                    </span>

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF6F0] text-[#075E49] transition-transform duration-300 group-open:rotate-180">
                                        <ChevronDown size={18} />
                                    </span>
                                </summary>

                                <p className="mt-4 pr-8 text-sm leading-7 text-gray-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}