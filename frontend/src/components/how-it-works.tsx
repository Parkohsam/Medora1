
import Image from "next/image";
import {
    ScanLine,
    BookOpen,
    Headset,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Identify your medicine",
        description:
            "Take a picture of your medicine package or upload an existing image. Medora helps identify the product using the available packaging information.",
        image: "/images/medicine-scan.png",
        imageAlt: "Medicine package beside a smartphone",
        icon: ScanLine,
    },
    {
        number: "02",
        title: "Understand the information",
        description:
            "Explore available information about active ingredients, uses, possible side effects and important safety warnings.",
        image: "/images/medicine-info.png",
        imageAlt: "Medicine information displayed on a smartphone",
        icon: BookOpen,
    },
    {
        number: "03",
        title: "Get additional guidance",
        description:
            "Listen to accessible explanations, ask the AI medication assistant or connect with a verified pharmacist when professional guidance is needed.",
        image: "/images/pharmacist.png",
        imageAlt: "Pharmacist assisting a customer",
        icon: Headset,
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-[#F8FCFA] px-5 py-20 md:px-6 md:py-28"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#079568]">
                        Your journey with Medora
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-[#075E49] sm:text-4xl md:text-5xl">
                        Understanding your medicine,
                        <span className="text-[#079568]">
                            {" "}made simple.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                        Three simple steps to help you understand your
                        medication and make more informed decisions.
                    </p>
                </div>

                {/* Editorial Steps */}
                <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                                    index % 2 !== 0
                                        ? "md:[&>div:first-child]:order-2"
                                        : ""
                                }`}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#E5F3EC]">
                                    <Image
                                        src={step.image}
                                        alt={step.imageAlt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text */}
                                <div className="max-w-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold text-[#079568]">
                                            {step.number}
                                        </span>

                                        <span className="h-px w-12 bg-[#B8DFCE]" />

                                        <Icon
                                            size={19}
                                            className="text-[#079568]"
                                        />
                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold leading-tight text-[#075E49] sm:text-3xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-5 text-base leading-8 text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}