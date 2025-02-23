import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollArrow from "@/components/ui/ScrollArrow";
import { Cpu, Users, Heart } from "lucide-react";

export default function Home() {
  const offers = [
    {
      title: "CDISC Programming",
      description:
        "Comprehensive programming services adhering to CDISC SDTM and ADaM standards",
      image: "/images/statistical-programming.jpg",
    },
    {
      title: "Statistical Consulting",
      description:
        "Expert guidance in statistical methodologies and analysis tailored to your study needs",
      image: "/images/statistical-consulting.jpg",
    },
    {
      title: "Human Outsourcing",
      description:
        "Flexible outsourcing solutions for CDISC, TLFs, and machine learning projects",
      image: "/images/hr-outsourcing.jpg",
    },
    {
      title: "Risk-Based Quality Management (RBQM)",
      description:
        "Implementing strategies to enhance quality management through data-driven insights.",
      image: "/images/rbqm-services.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#5ac3c6] text-white h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
            {/* Left Content */}
            <div className="relative z-10 pr-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                  Empower Clinical Research Through Data Excellence
                </h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90 font-light">
                  Where Innovation Meets Precision
                </p>
              </div>
              <p className="text-lg mb-8 leading-relaxed">
                StatClin specializes in clinical data processing and statistical
                programming for CROs. We ensure compliance with CDISC standards,
                streamline data management, and package submissions efficiently.
                Our expertise includes statistical reporting (TLFs), advanced
                data visualization, and real-time reporting solutions for better
                decision-making. We also leverage AI to enhance data insights in
                clinical research.
              </p>
              <Link href="/services">
                <Button className="bg-white text-[#5ac3c6] hover:bg-gray-100 rounded-full px-8 py-6 text-base h-14 shadow-lg transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Right Content - Full Height Image */}
            <div className="absolute top-0 right-0 w-1/2 h-screen hidden md:block">
              <Image
                src="/images/hero-image.jpg"
                alt="Medical Research"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#5ac3c6]/90" />
            </div>
          </div>
        </div>

        {/* ScrollArrow positioned at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ScrollArrow />
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                  <Cpu className="w-12 h-12 text-[#5ac3c6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Our Technology
                </h3>
                <p className="text-gray-600 text-center">
                  Cutting-edge solutions tailored for clinical research and data
                  management, ensuring our clients benefit from the latest
                  advancements in technology
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                  <Users className="w-12 h-12 text-[#5ac3c6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Our People
                </h3>
                <p className="text-gray-600 text-center">
                  Our experts comprises seasoned professionals with extensive
                  industry experience and a deep understanding of statistical
                  programming and CDISC compliance
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                  <Heart className="w-12 h-12 text-[#5ac3c6]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Our Values
                </h3>
                <p className="text-gray-600 text-center">
                  We uphold quality, integrity, and precision, ensuring
                  accurate, reliable data processing for informed
                  decision-making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Solutions
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#5ac3c6] bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Expertise in Clinical Research */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#5ac3c6] bg-opacity-10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#5ac3c6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Expertise in Clinical Research
                  </h3>
                  <p className="text-gray-600">
                    Our team&apos;s extensive experience ensures that you
                    receive top-notch services tailored to the complexities of
                    clinical trials.
                  </p>
                </div>
              </div>
            </div>

            {/* Timely Delivery */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#5ac3c6] bg-opacity-10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#5ac3c6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Timely Delivery
                  </h3>
                  <p className="text-gray-600">
                    We understand the importance of deadlines in clinical
                    research, and we are committed to delivering results on time
                    without compromising quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Team */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#5ac3c6] bg-opacity-10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#5ac3c6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Professional Team
                  </h3>
                  <p className="text-gray-600">
                    Our dedicated professionals are not only skilled but also
                    passionate about driving innovation in clinical data
                    services.
                  </p>
                </div>
              </div>
            </div>

            {/* Tailored Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#5ac3c6] bg-opacity-10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#5ac3c6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Tailored Solutions
                  </h3>
                  <p className="text-gray-600">
                    We work closely with our clients to provide customized
                    solutions that meet their unique needs and challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Technology Integration */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#5ac3c6] bg-opacity-10 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[#5ac3c6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Advanced Technology Integration
                  </h3>
                  <p className="text-gray-600">
                    Leveraging AI and real-time reporting capabilities, we
                    provide insights that enhance decision-making and
                    operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn how we can help advance your clinical
            research.
          </p>
          <Link href="/contact">
            <Button className="bg-[#5ac3c6] text-white hover:bg-[#4ba1a4] rounded-full px-8 py-6 text-lg h-14">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
