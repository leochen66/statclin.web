// src/app/services/page.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "CDISC Data Analysis",
      description:
        "Our comprehensive CDISC data analysis service ensures compliance with industry standards while providing deep insights into clinical trial data.",
      image: "/images/data-analysis.jpg",
      features: [
        "Data standardization according to CDISC guidelines",
        "SDTM and ADaM dataset creation",
        "Define.xml generation and documentation",
        "Data validation and quality control",
      ],
    },
    {
      title: "Clinical Trial Services",
      description:
        "End-to-end management of clinical trials with focus on efficiency and quality. Our experienced team ensures smooth execution of trials across all phases.",
      image: "/images/clinical-trials.jpg",
      features: [
        "Protocol development and review",
        "Site selection and management",
        "Patient recruitment strategies",
        "Clinical trial monitoring",
      ],
    },
    {
      title: "Regulatory Affairs",
      description:
        "Expert guidance through the complex regulatory landscape of clinical research. We help navigate submission processes across different regions.",
      image: "/images/regulatory.jpg",
      features: [
        "Regulatory strategy development",
        "Submission preparation and management",
        "Agency interaction support",
        "Regulatory compliance monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5ac3c6] via-[#4ba1a4] to-[#4a495f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive clinical research services tailored to your needs. We
            combine expertise with innovation to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div
                  className={`relative h-[400px] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-[#373643]">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#5ac3c6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#373643] mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Expertise
                </h3>
                <p className="text-gray-600">
                  Over 160 years of combined experience in clinical research and
                  data analysis.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Rigorous quality control processes ensuring accurate and
                  reliable results.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Latest technologies and methodologies for efficient data
                  management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
