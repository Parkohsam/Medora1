
import {
    ShieldCheck,
    AlertTriangle,
    Pill,
    HeartPulse,
    ClipboardCheck,
} from "lucide-react";

const safetyPoints = [
    {
        icon: Pill,
        title: "Understand active ingredients",
        description:
            "Learn what ingredients a medicine contains and understand why checking them matters.",
    },
    {
        icon: AlertTriangle,
        title: "Know the possible risks",
        description:
            "Explore documented side effects, precautions, contraindications and important warnings.",
    },
    {
        icon: ClipboardCheck,
        title: "Avoid medication mistakes",
        description:
            "Learn why checking strengths and duplicate active ingredients is important for medication safety.",
    },
    {
        icon: HeartPulse,
        title: "Know when to seek help",
        description:
            "Recognise when a pharmacist or other qualified healthcare professional should be consulted.",
    },
];

export default function MedicineSafety() {
    return (
        <section className="bg-white px-5 py-20 md:px-6 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">

                {/* Main message */}
                <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#079568]">
                        Your safety matters
                    </span>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-[#075E49] sm:text-4xl md:text-5xl">
                        Knowing your medicine is part of protecting your health.
                    </h2>

                    <p className="mt-6 max-w-lg text-base leading-8 text-gray-600">
                        Medicines can be helpful when used appropriately,
                        but understanding their ingredients, precautions
                        and possible risks is equally important.
                    </p>

                    <div className="mt-8 flex items-start gap-4 border-l-4 border-[#079568] bg-[#F5FAF7] p-5">
                        <ShieldCheck
                            size={28}
                            className="shrink-0 text-[#079568]"
                        />

                        <p className="text-sm leading-7 text-[#075E49]">
                            Medora helps make medication information easier
                            to understand. It does not replace a doctors
                            diagnosis or a pharmacists professional advice.
                        </p>
                    </div>
                </div>

                {/* Safety information */}
                <div className="space-y-8">
                    {safetyPoints.map((point) => {
                        const Icon = point.icon;

                        return (
                            <div
                                key={point.title}
                                className="flex items-start gap-5"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF6F0] text-[#079568]">
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#075E49]">
                                        {point.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-gray-600">
                                        {point.description}
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