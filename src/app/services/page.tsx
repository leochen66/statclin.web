// src/app/services/page.tsx
"use client";

import Image from "next/image";
import { Code, LineChart, Users, Shield } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Statistical Programming Services",
      icon: <Code className="w-8 h-8 text-teal-600" />,
      image: "/images/statistical-programming.jpg",
      description:
        "Our statistical programming team specializes in delivering robust analytical solutions using industry-standard software.",
      categories: [
        {
          name: "SAS Programming",
          items: [
            "Comprehensive SAS Programming",
            "Clinical trial data analysis",
            "CDISC compliance and standards",
            "Custom macro development",
            "Data visualization and reporting",
          ],
        },
        {
          name: "R Programming",
          items: [
            "Advanced statistical modeling",
            "Machine learning implementation",
            "Interactive dashboards with Shiny",
            "Reproducible research reports",
          ],
        },
        {
          name: "Python Solutions",
          items: [
            "Data preprocessing and cleaning",
            "Statistical analysis with NumPy/SciPy",
            "Predictive modeling with scikit-learn",
            "Custom analysis pipelines",
          ],
        },
      ],
    },
    {
      title: "Statistical Consulting Services",
      icon: <LineChart className="w-8 h-8 text-teal-600" />,
      image: "/images/statistical-consulting.jpg",
      description:
        "Our statistical consulting team provides expert guidance tailored to meet the unique needs of your clinical studies. We focus on delivering insights that drive informed decision-making.",
      categories: [
        {
          name: "Study Design Consultation",
          items: [
            "Assistance in designing robust study protocols",
            "Power and sample size calculations",
            "Optimization of data collection methods",
          ],
        },
        {
          name: "Statistical Analysis Plan (SAP) Development",
          items: [
            "Comprehensive SAP development",
            "Regulatory compliance alignment",
            "Methodology documentation",
          ],
        },
        {
          name: "Regulatory Submission Support",
          items: [
            "Statistical sections preparation",
            "Regulatory compliance guidance",
            "Query resolution support",
          ],
        },
      ],
    },
    {
      title: "Human Resource/Outsourcing Services",
      icon: <Users className="w-8 h-8 text-teal-600" />,
      image: "/images/hr-outsourcing.jpg",
      description:
        "Our outsourcing solutions are designed to provide flexible and efficient support for your clinical projects.",
      categories: [
        {
          name: "CDISC and TLF Outsourcing",
          items: [
            "Skilled CDISC programming professionals",
            "TLF preparation expertise",
            "Quality-focused delivery",
          ],
        },
        {
          name: "Machine Learning Expertise",
          items: [
            "Experienced data scientists",
            "Custom predictive modeling",
            "Research-specific solutions",
          ],
        },
      ],
    },
    {
      title: "Risk-Based Quality Management (RBQM) Services",
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      image: "/images/rbqm-services.jpg",
      description:
        "Our RBQM services focus on implementing data-driven strategies to enhance the quality of your clinical trials.",
      categories: [
        {
          name: "On-Site Support",
          items: [
            "Dedicated personnel integration",
            "EDC system expertise",
            "Process optimization",
          ],
        },
        {
          name: "Risk Assessment",
          items: [
            "Comprehensive risk framework development",
            "Data quality monitoring",
            "Real-time reporting solutions",
          ],
        },
        {
          name: "AI Integration",
          items: [
            "Advanced analytics implementation",
            "Custom AI solutions",
            "Actionable insights generation",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#5ac3c6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive solutions for clinical research and data analysis,
            delivering excellence through innovation and expertise.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal-50 p-4 rounded-lg">{service.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-gray-600 text-lg mb-8">
                    {service.description}
                  </p>
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-6">
                  {service.categories.map((category, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-teal-600 mb-4">
                        {category.name}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
