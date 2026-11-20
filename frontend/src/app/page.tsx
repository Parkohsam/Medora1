
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/how-it-works";
import AiMedicationAssistant from "../components/product-showcase";
import FAQ from "../components/faq";
// 
import Footer from "../components/footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <AiMedicationAssistant />
            <FAQ />
            {/* <FinalCTA /> */}
            <Footer />
        </main>
    );
}