"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Eye,
    EyeOff,
    ShieldCheck,
} from "lucide-react";
import BrandLogo from "../../components/brand-logo";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <main className="min-h-screen bg-[#F7FBF8]">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* LEFT: BRAND PANEL */}
                <section className="relative hidden overflow-hidden bg-[#075E49] px-12 py-14 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">

                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#079568]/30 blur-3xl" />
                    <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#43C68B]/20 blur-3xl" />

                    <div className="relative">
                        <span className="text-sm font-semibold tracking-[0.2em] text-[#B9EBD0]">
                            MEDICATION AWARENESS
                        </span>
                    </div>

                    <div className="relative max-w-lg">
                        <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                            Understand your medication.
                            <span className="mt-2 block text-[#A9E9C8]">
                                Make informed choices.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-8 text-white/75">
                            Medora is being built to make medicine
                            information easier to understand through
                            accessible explanations, audio and
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

                {/* RIGHT: LOGIN FORM */}
                <section className="flex items-center justify-center px-5 py-12 sm:px-8">
                    <div className="w-full max-w-md">

                        <div className="mb-12">
                            <BrandLogo />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#079568]">
                                WELCOME BACK
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#075E49] sm:text-4xl">
                                Log in to Medora
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Welcome back! Enter your details to
                                access your account.
                            </p>
                        </div>

                        <form
                            className="mt-9 space-y-6"
                            onSubmit={(event) => event.preventDefault()}
                        >
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
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <Link
                                        href="/forgot-password"
                                        className="text-sm font-semibold text-[#079568] hover:text-[#075E49]"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#079568] focus:ring-4 focus:ring-[#079568]/10"
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
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#075E49]"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={19} />
                                        ) : (
                                            <Eye size={19} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* REMEMBER ME */}
                            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(event) =>
                                        setRememberMe(event.target.checked)
                                    }
                                    className="h-4 w-4 accent-[#079568]"
                                />
                                Remember me
                            </label>

                            {/* LOGIN BUTTON */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#075E49] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#064B3B] focus:outline-none focus:ring-4 focus:ring-[#079568]/20"
                            >
                                Log in
                                {/* <ArrowRight size={18} /> */}
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-600">
                            Dont have an account?{" "}
                            <Link
                                href="/signup"
                                className="font-semibold text-[#079568] hover:text-[#075E49]"
                            >
                                Create an account
                            </Link>
                        </p>

                        <p className="mt-12 text-center text-xs leading-6 text-gray-400">
                            By using Medora, you acknowledge that it provides
                            medication awareness information and does not
                            replace professional medical advice.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}