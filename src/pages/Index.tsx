import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 py-12 lg:py-24">
          <div className="flex-1">
            <HeroSection />
          </div>
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
