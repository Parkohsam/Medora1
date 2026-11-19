"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Mail,
    ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import BrandLogo from "../../components/brand-logo";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    const handleReset = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            toast.error("Please enter your email address.");
            return;
        }

        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            trimmedEmail
        );

        if (!emailIsValid) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Password reset API will be connected later.
        toast.info(
            "Your email is valid. Password reset will be available once authentication is connected."
        );
    };

    return (
        <main className="min-h-screen bg-[#F7FBF8]">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* LEFT: BRAND PANEL */}
                <section className="relative hidden overflow-hidden bg-[#075E49] px-12 py-14 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">

                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#079568]/30 blur-3xl" />

                    <div className="relative">
                        <p className="text-sm font-semibold tracking-[0.2em] text-[#B9EBD0]">
                            MEDICATION AWARENESS
                        </p>
                    </div>

                    <div className="relative max-w-lg">
                        <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                            Your health information deserves
                            <span className="mt-2 block text-[#A9E9C8]">
                                protection.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-8 text-white/75">
                            Were building Medora to make medication
                            information easier to understand and access,
                            while keeping your experience secure.
                        </p>

                        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
                            <ShieldCheck
                                size={28}
                                className="shrink-0 text-[#A9E9C8]"
                            />

                            <p className="text-sm leading-6 text-white/85">
                                Your account matters. Were working
                                towards a safer and more accessible
                                medication awareness experience.
                            </p>
                        </div>
                    </div>

                    <p className="relative text-sm text-white/60">
                        Medora — Medication knowledge, in text and audio.
                    </p>
                </section>

                {/* RIGHT: RESET FORM */}
                <section className="flex items-center justify-center px-5 py-12 sm:px-8">
                    <div className="mx-auto w-full max-w-md">

                        {/* LOGO */}
                        <div className="mb-12 flex justify-center lg:justify-start">
                            <BrandLogo />
                        </div>

                        {/* INTRODUCTION */}
                        <div className="text-center lg:text-left">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E2F3E9] text-[#079568] lg:mx-0">
                                <Mail size={26} />
                            </div>

                            <p className="mt-7 text-sm font-semibold text-[#079568]">
                                ACCOUNT RECOVERY
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#075E49] sm:text-4xl">
                                Forgot your password?
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-gray-600">
                                It happens! Enter the email address
                                associated with your account and well
                                help you get back in.
                            </p>
                        </div>

                        {/* RESET FORM */}
                        <form
                            onSubmit={handleReset}
                            noValidate
                            className="mt-9 space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Enter your registered email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E49] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#064B3B] focus:outline-none focus:ring-4 focus:ring-[#079568]/20"
                            >
                                Send reset link
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        {/* BACK TO LOGIN */}
                        <div className="mt-8 text-center">
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#079568] transition hover:text-[#075E49]"
                            >
                                <ArrowLeft size={17} />
                                Back to login
                            </Link>
                        </div>

                        <p className="mt-12 text-center text-xs leading-6 text-gray-400">
                            Medora provides medication awareness
                            information and does not replace professional
                            medical advice.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}