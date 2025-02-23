// src/app/software/page.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SoftwarePage() {
  const features = [
    {
      title: "Risk Assessment",
      description:
        "Advanced algorithms for identifying and evaluating potential risks in clinical trials.",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Continuous monitoring of key risk indicators and immediate alert system.",
    },
    {
      title: "Data Integration",
      description:
        "Seamless integration with various data sources and clinical trial management systems.",
    },
    {
      title: "Compliance Tracking",
      description:
        "Automated tracking of regulatory compliance and documentation.",
    },
  ];

  const benefits = [
    {
      title: "Improved Quality",
      description:
        "Enhanced data quality through proactive risk identification and management.",
    },
    {
      title: "Cost Efficiency",
      description: "Reduced costs through early risk detection and prevention.",
    },
    {
      title: "Time Savings",
      description:
        "Automated processes that save time in risk assessment and monitoring.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r bg-[#5ac3c6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">
            Risk Based Quality Management Platform
          </h1>
          <p className="text-xl max-w-3xl">
            Our innovative platform streamlines clinical trial risk management
            through advanced analytics and real-time monitoring capabilities.
          </p>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#373643]">
              Platform Overview
            </h2>
            <p className="text-gray-600 mb-6">
              Our Risk Based Quality Management Platform is designed to
              revolutionize how clinical trials manage and mitigate risks.
              Through advanced analytics and machine learning, we provide
              real-time insights and automated risk assessment capabilities that
              help ensure trial success and regulatory compliance.
            </p>
            <p className="text-gray-600 mb-6">
              The platform integrates seamlessly with existing clinical trial
              management systems, providing a comprehensive solution for
              risk-based quality management that meets ICH GCP E6(R2)
              requirements.
            </p>
            <Button className="bg-[#5ac3c6] hover:bg-[#4ba1a4] text-white">
              Request Demo
            </Button>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/platform-dashboard.jpg"
              alt="Platform Dashboard"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#373643] mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#373643] mb-12">
            Platform Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#373643] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Clinical Trial Management?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team to schedule a demo and learn how our
            platform can help streamline your clinical trial risk management.
          </p>
          <Button className="bg-[#5ac3c6] hover:bg-[#4ba1a4] text-white">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
