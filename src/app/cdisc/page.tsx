"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText, Database, GitMerge } from "lucide-react";

export default function CDISCPage() {
  const cdiscStandards = [
    {
      title: "SDTM",
      description:
        "Study Data Tabulation Model - A standard structure for human clinical trial data required by regulatory authorities.",
      icon: <Database className="w-8 h-8 text-teal-600" />,
      details: [
        "Standardized dataset structure",
        "Consistent variable naming conventions",
        "Controlled terminology implementation",
        "Regulatory submission requirements",
      ],
    },
    {
      title: "ADaM",
      description:
        "Analysis Data Model - Provides standards for analysis datasets to support efficient generation of statistical analysis.",
      icon: <GitMerge className="w-8 h-8 text-teal-600" />,
      details: [
        "Analysis-ready dataset structure",
        "Traceability to SDTM",
        "Statistical analysis support",
        "Regulatory compliance",
      ],
    },
    {
      title: "Define-XML",
      description:
        "Metadata standard that describes the format and content of submitted datasets.",
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      details: [
        "Dataset documentation",
        "Variable definitions",
        "Controlled terminology references",
        "Data traceability documentation",
      ],
    },
  ];

  const usefulLinks = [
    {
      title: "CDISC Website",
      url: "https://www.cdisc.org/",
      description: "Official CDISC organization website",
    },
    {
      title: "SDTM Implementation Guide",
      url: "https://www.cdisc.org/standards/foundational/sdtm",
      description: "Detailed guide for implementing SDTM",
    },
    {
      title: "ADaM Implementation Guide",
      url: "https://www.cdisc.org/standards/foundational/adam",
      description: "Comprehensive guide for ADaM implementation",
    },
    {
      title: "FDA Study Data Standards",
      url: "https://www.fda.gov/industry/study-data-standards-resources",
      description: "FDA requirements and resources for study data standards",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#5ac3c6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">
            Understanding CDISC Standards
          </h1>
          <p className="text-xl max-w-3xl">
            CDISC (Clinical Data Interchange Standards Consortium) provides
            global data standards for clinical research. These standards enhance
            data quality, facilitate data sharing, and streamline the regulatory
            submission process.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CDISC Standards Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Key CDISC Standards
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cdiscStandards.map((standard, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {standard.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-800">
                    {standard.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Useful Links Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Useful Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <ExternalLink className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {link.title}
                  </h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
