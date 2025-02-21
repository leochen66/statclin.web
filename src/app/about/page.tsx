// src/app/about/page.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Dr. Chen brings over 20 years of experience in clinical research and healthcare management. Her visionary leadership has been instrumental in establishing StatClin as a leading CRO in the Asia-Pacific region.",
      image: "/images/ceo.jpg",
    },
    {
      name: "Dr. Michael Wang",
      role: "Chief Scientific Officer",
      bio: "With a PhD in Biostatistics and 15 years of experience in clinical trial design, Dr. Wang leads our scientific initiatives and ensures the highest standards of statistical analysis.",
      image: "/images/cso.jpg",
    },
    // Add more team members as needed
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Continuously pushing boundaries to develop new solutions for clinical research challenges.",
    },
    {
      title: "Quality",
      description:
        "Maintaining the highest standards in all our processes and deliverables.",
    },
    {
      title: "Integrity",
      description:
        "Operating with transparency and ethical principles in all our interactions.",
    },
    {
      title: "Collaboration",
      description:
        "Working closely with clients to achieve shared goals and success.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5ac3c6] via-[#4ba1a4] to-[#4a495f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About StatClin</h1>
          <p className="text-xl max-w-3xl">
            A leading Contract Research Organization delivering innovative
            solutions in clinical research and data analysis.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#373643]">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in Taipei, StatClin has grown to become a trusted partner
              in clinical research across the Asia-Pacific region. Our team
              brings together over 160 years of combined experience in clinical
              trials, data management, and regulatory affairs.
            </p>
            <p className="text-gray-600">
              We pride ourselves on delivering customized, efficient solutions
              that help our clients bring innovative treatments to patients
              faster. Our commitment to quality and innovation has made us a
              preferred partner for pharmaceutical and biotech companies
              worldwide.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/office.jpg"
              alt="StatClin Office"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#373643] mb-12">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#373643] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#5ac3c6] mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#373643] mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#5ac3c6]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
