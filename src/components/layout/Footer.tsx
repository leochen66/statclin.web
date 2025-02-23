"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#373643] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo-dark.png"
              alt="StatClin Logo"
              width={180}
              height={54}
              className="w-auto h-12 mb-6"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Clinical Trials
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Regulatory Affairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Biometrics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cdisc"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  CDISC
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/software"
                  className="text-sm text-gray-300 hover:text-[#5ac3c6]"
                >
                  Software
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center text-gray-300 hover:text-[#5ac3c6] transition-colors">
              <Mail size={18} className="mr-2" />
              <a href="mailto:info@statclin.com" className="text-sm">
                info@statclin.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-300 text-center">
            © {new Date().getFullYear()} StatClin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
