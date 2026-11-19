import {
    Bot,
    MessageCircle,
    Volume2,
    Languages,
    Stethoscope,
    ShieldCheck,
    Play,
} from "lucide-react";

const capabilities = [
    {
        icon: MessageCircle,
        title: "Ask questions",
        description:
            "Explore medicine information through simple, conversational explanations.",
    },
    {
        icon: Volume2,
        title: "Listen and understand",
        description:
            "Access audio explanations, with planned support for Yoruba, Hausa and Igbo.",
    },
    {
        icon: Stethoscope,
        title: "Get professional guidance",
        description:
            "Connect with registered pharmacists when you need additional support.",
    },
];

export default function ProductShowcase() {
    return (
        <section
            id="product-showcase"
            className="overflow-hidden bg-[#F5FAF7] px-5 py-16 md:px-8 md:py-20"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* LEFT: PRODUCT INTRODUCTION */}
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#CDE8D9] bg-white px-4 py-2 text-sm font-medium text-[#075E49]">
                        <span className="h-2 w-2 rounded-full bg-[#079568]" />
                        The Medora experience
                    </span>

                    <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#075E49] sm:text-4xl md:text-5xl">
                        More than information.
                        <span className="text-[#079568]">
                            {" "}A better way to understand medication.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                        Medora brings medication awareness, accessible
                        explanations and professional guidance together
                        in one experience.
                    </p>

                    <div className="mt-9 space-y-6">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E2F3E9] text-[#079568]">
                                        <Icon size={21} strokeWidth={1.8} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#075E49]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 max-w-md text-sm leading-6 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: COMBINED PRODUCT PREVIEW */}
                <div className="relative mx-auto w-full max-w-lg">
                    <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[#CDEEDB] blur-3xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE9E2] bg-white shadow-[0_20px_60px_rgba(7,94,73,0.10)]">

                        {/* Preview header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E2F3E9] text-[#075E49]">
                                    <Bot size={22} />
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#075E49]">
                                        Medora Assistant
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        Medication awareness companion
                                    </p>
                                </div>
                            </div>

                            <span className="rounded-full bg-[#EAF7EF] px-3 py-1 text-xs font-semibold text-[#075E49]">
                                Preview
                            </span>
                        </div>

                        {/* Sample conversation */}
                        <div className="space-y-5 px-5 py-6 sm:px-6">
                            <p className="text-center text-xs font-medium uppercase tracking-wider text-gray-400">
                                An example conversation
                            </p>

                            <div className="flex justify-end">
                                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[#075E49] px-4 py-3 text-sm leading-6 text-white">
                                    Can you help me understand this medicine?
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E2F3E9] text-[#075E49]">
                                    <Bot size={17} />
                                </div>

                                <div className="flex-1 rounded-2xl rounded-tl-sm bg-[#F5FAF7] p-4">
                                    <p className="text-sm font-semibold text-[#075E49]">
                                        Lets understand it together.
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                        Explore its ingredients, common uses,
                                        possible side effects and important
                                        safety precautions.
                                    </p>
                                </div>
                            </div>

                            {/* Audio preview */}
                            <div className="rounded-2xl border border-[#DCE9E2] p-4">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2">
                                        <Volume2
                                            size={20}
                                            className="text-[#079568]"
                                        />
                                        <span className="text-sm font-semibold text-[#075E49]">
                                            Audio explanation
                                        </span>
                                    </div>

                                    <span className="text-xs text-gray-400">
                                        Preview
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#075E49] text-white">
                                        <Play size={15} fill="currentColor" />
                                    </div>

                                    <div className="flex h-7 flex-1 items-center gap-1 overflow-hidden">
                                        {[12, 22, 15, 27, 18, 11, 25, 16, 29, 13, 21, 16, 25, 10, 19, 27, 14, 22].map(
                                            (height, index) => (
                                                <span
                                                    key={index}
                                                    className="w-1 rounded-full bg-[#079568]"
                                                    style={{ height: `${height}px` }}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2">
                                    <Languages
                                        size={16}
                                        className="text-[#079568]"
                                    />
                                    <span className="text-xs text-gray-500">
                                        Planned local-language support:
                                    </span>
                                </div>

                                <div className="mt-2 flex flex-wrap gap-2">
                                    {["Yoruba", "Hausa", "Igbo"].map((language) => (
                                        <span
                                            key={language}
                                            className="rounded-full bg-[#EAF7EF] px-3 py-1.5 text-xs font-medium text-[#075E49]"
                                        >
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pharmacist connection */}
                        <div className="flex items-center gap-3 border-t border-[#DCE9E2] bg-[#F5FAF7] px-5 py-4 sm:px-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#079568]">
                                <Stethoscope size={20} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-[#075E49]">
                                    Need professional guidance?
                                </p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Connect with a registered pharmacist.
                                </p>
                            </div>

                            <ShieldCheck
                                size={20}
                                className="shrink-0 text-[#079568]"
                            />
                        </div>
                    </div>

                    <p className="relative mt-4 text-center text-xs text-gray-500">
                        Illustrative preview of planned Medora capabilities.
                    </p>
                </div>
            </div>
        </section>
    );
}