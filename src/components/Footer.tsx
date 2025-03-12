import type React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

const SocialIcon = ({
  Icon,
  href,
}: {
  Icon: React.ElementType;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#52acdc] hover:text-white transition-colors"
  >
    <Icon size={24} />
  </a>
);

export function Footer() {
  return (
    <footer className="bg-[#02090c] text-white relative px-5 md:px-12">
      {/* Unique shape */}

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              KAL General Business Center is your trusted partner for innovative
              business solutions and investments.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">123 Business Avenue</p>
            <p className="text-gray-300 mb-2">Addis Ababa, Ethiopia</p>
            <p className="text-gray-300 mb-2">Phone: +251 91 123 45 67</p>
            <p className="text-gray-300">Email: info@kalbusiness.com</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2023 KAL General Business Center. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <SocialIcon Icon={Facebook} href="https://facebook.com" />
            <SocialIcon Icon={Twitter} href="https://twitter.com" />
            <SocialIcon Icon={Instagram} href="https://instagram.com" />
            <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            <SocialIcon Icon={Youtube} href="https://youtube.com" />
          </div>
        </div>
      </div>
    </footer>
  );
}
