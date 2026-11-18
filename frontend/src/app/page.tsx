
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/how-it-works";
import MedicineSafety from "../components/medicine-safety";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <MedicineSafety />
        </main>
    );
}