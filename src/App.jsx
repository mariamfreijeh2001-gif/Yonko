import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedPartner from "./components/TrustedPartner";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Differentiators from "./components/Differentiators";
import Contact from "./components/Contact";
import Partners from "./components/Partners";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedPartner />
        <Services />
        <HowWeWork />
        <Differentiators />
        <Contact />
        <Partners />
      </main>
    </>
  );
}
