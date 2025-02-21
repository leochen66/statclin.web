// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, Users, Heart } from "lucide-react";

export default function Home() {
  const offers = [
    {
      title: "Clinical Trials",
      description:
        "Expert management of clinical trials across all phases with focus on quality and efficiency.",
      image: "/images/clinical-trials.jpg",
    },
    {
      title: "Regulatory Affairs",
      description:
        "Comprehensive regulatory strategy and submission support across global markets.",
      image: "/images/regulatory.jpg",
    },
    {
      title: "Biometrics",
      description:
        "Advanced statistical analysis and data management for clinical research.",
      image: "/images/biometrics.jpg",
    },
    {
      title: "Safety & Pharmacovigilance",
      description:
        "Robust safety monitoring and reporting systems for clinical trials.",
      image: "/images/safety.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5ac3c6] via-[#4ba1a4] to-[#4a495f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advancing Healthcare Through Innovation
              </h1>
              <p className="text-lg mb-8">
                StatClin is a globally adept Contract Research Organisation
                (CRO) headquartered in Taipei. With over 160 years of combined
                success, our team has vast experience across the health,
                wellness, and disease spectrum.
              </p>
              <Link href="/services">
                <Button className="bg-white text-[#5ac3c6] hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/hero-image.jpg"
                alt="Medical Research"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#373643] mb-4">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Cpu className="w-12 h-12 text-[#5ac3c6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Our Technology
                </h3>
                <p className="text-gray-600">
                  Cutting-edge solutions for clinical research and data
                  management.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Users className="w-12 h-12 text-[#5ac3c6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Our People
                </h3>
                <p className="text-gray-600">
                  Expert team with extensive industry experience and knowledge.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Heart className="w-12 h-12 text-[#5ac3c6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Commitment to quality, integrity, and innovation in
                  healthcare.
                </p>
              </div>
            </div>
            <Link href="/about" className="mt-8 inline-block">
              <Button className="bg-[#5ac3c6] text-white hover:bg-[#4ba1a4]">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#373643] mb-12">
            Our Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#373643]">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#373643] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn how we can help advance your clinical
            research.
          </p>
          <Link href="/contact">
            <Button className="bg-[#5ac3c6] text-white hover:bg-[#4ba1a4]">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
