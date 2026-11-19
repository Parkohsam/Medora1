"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, ShieldCheck, } from "lucide-react";
import { toast } from "sonner";
import BrandLogo from "../../components/brand-logo";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const fullName = String(formData.get("fullName") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const password = String(formData.get("password") || "");
        const confirmPassword = String(
            formData.get("confirmPassword") || ""
        );
        const termsAccepted = formData.get("terms");

        if (!fullName || !email || !password || !confirmPassword) {
            toast.error("Please complete all required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Your passwords do not match.");
            return;
        }

        if (!termsAccepted) {
            toast.error("Please accept the terms to continue.");
            return;
        }

        // Authentication API will be connected later.
        toast.info(
            "Your details look good! Account creation will be enabled when we connect the backend."
        );
    };

    return (
        <main className="min-h-screen bg-[#F7FBF8]">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* BRAND PANEL */}
                <section className="relative hidden overflow-hidden bg-[#075E49] px-12 py-14 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">
                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#079568]/30 blur-3xl" />

                    <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#43C68B]/20 blur-3xl" />

                    <div className="relative">
                        <p className="text-sm font-semibold tracking-[0.2em] text-[#B9EBD0]">
                            MEDICATION AWARENESS
                        </p>
                    </div>

                    <div className="relative max-w-lg">
                        <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                            Better medication awareness starts with
                            <span className="mt-2 block text-[#A9E9C8]">
                                understanding.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-8 text-white/75">
                            Join Medora as we work towards making
                            medication information easier to understand
                            through accessible explanations and
                            professional guidance.
                        </p>

                        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5">
                            <ShieldCheck
                                size={28}
                                className="shrink-0 text-[#A9E9C8]"
                            />

                            <p className="text-sm leading-6 text-white/85">
                                Clear information. Better awareness.
                                More informed medication decisions.
                            </p>
                        </div>
                    </div>

                    <p className="relative text-sm text-white/60">
                        Medora — Medication knowledge, in text and audio.
                    </p>
                </section>

                {/* SIGN UP FORM */}
                <section className="flex items-center justify-center px-5 py-12 sm:px-8">
                    <div className="mx-auto w-full max-w-md">

                        <div className="mb-10 flex justify-center lg:justify-start">
                            <BrandLogo />
                        </div>

                        <div className="text-center lg:text-left">
                            <p className="text-sm font-semibold text-[#079568]">
                                GET STARTED
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#075E49] sm:text-4xl">
                                Create your account
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Join Medora and take a step towards
                                better medication awareness.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSignup}
                            noValidate
                            className="mt-8 space-y-5"
                        >
                            {/* FULL NAME */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Full name
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
                                />
                            </div>

                            {/* EMAIL */}
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
                                    placeholder="Enter your email address"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        placeholder="Create a password"
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#075E49]"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={19} />
                                        ) : (
                                            <Eye size={19} />
                                        )}
                                    </button>
                                </div>

                                <p className="mt-2 text-xs text-gray-500">
                                    Use at least 8 characters.
                                </p>
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Confirm password
                                </label>

                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        autoComplete="new-password"
                                        placeholder="Re-enter your password"
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide confirm password"
                                                : "Show confirm password"
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#075E49]"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={19} />
                                        ) : (
                                            <Eye size={19} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* TERMS */}
                            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-600">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    className="mt-1 h-4 w-4 shrink-0 accent-[#079568]"
                                />

                                <span>
                                    I agree to Medora{" "}
                                    <span className="font-semibold text-[#079568]">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-semibold text-[#079568]">
                                        Privacy Policy
                                    </span>.
                                </span>
                            </label>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E49] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#064B3B] focus:outline-none focus:ring-4 focus:ring-[#079568]/20"
                            >
                                Create account
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <p className="mt-7 text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-semibold text-[#079568] hover:text-[#075E49]"
                            >
                                Log in
                            </Link>
                        </p>

                        <p className="mt-10 text-center text-xs leading-6 text-gray-400">
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