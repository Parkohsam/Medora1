
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/how-it-works";
import MedicineSafety from "../components/medicine-safety";
import AiMedicationAssistant from "../components/product-showcase";
import FAQ from "../components/faq";
import FinalCTA from "../components/final-cta";
import Footer from "../components/footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <MedicineSafety />
            <AiMedicationAssistant />
            <FAQ />
            <FinalCTA />
            <Footer />
        </main>
    );
}