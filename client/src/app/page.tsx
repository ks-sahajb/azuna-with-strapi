import { getHomePage } from "@/apis/home-page";
import BlockRenderer from "@/components/BlockRenderer";
import Footer from "@/components/Footer";
import ClientStories from "@/components/home/ClientStories";
import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import QuoteForm from "@/components/home/QuoteForm";
import ServiceSection from "@/components/home/ServiceSection";
import Navbar from "@/components/Navbar";

export default async function LandingPage() {
  const { data } = await getHomePage();

  console.log(data);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1">
        <BlockRenderer blocks={data.blocks} />

        {/* CTA Section */}
        {/* <section
          id="contact"
          className="w-full bg-white py-16 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <CtaSection locale={locale} />
              <QuoteForm />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
