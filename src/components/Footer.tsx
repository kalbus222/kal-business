"use client";
import type React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { useState } from "react";

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
  accounts,
}: {
  Icon: React.ElementType;
  accounts: { name: string; href: string }[];
}) => {
  const [showAccounts, setShowAccounts] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => setShowAccounts(true)}
      onMouseLeave={() => setShowAccounts(false)}
    >
      <div className="text-accent hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      {showAccounts && (
        <div className="pb-4 absolute right-14 lg:right-16 bottom-18 ">
          <div className=" bg-primary border border-accent p-2 rounded shadow-lg w-64">
            {accounts.map((account) => (
              <a
                key={account.name}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-accent transition-colors"
              >
                {account.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export function Footer() {
  return (
    <footer className="bg-primary text-white relative px-5 md:px-12">
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
            <p className="text-gray-300 mb-2">Turufat, Hawassa</p>
            <p className="text-gray-300 mb-2">Sidama, Ethiopia</p>
            <p className="text-gray-300 mb-2">Phone: +251 92 471 1079</p>
            <p className="text-gray-300">Email: info@kalbusiness.com</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} KAL General Business Center. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <SocialIcon
              Icon={FaFacebook}
              accounts={[
                {
                  name: "Yem Facebook",
                  href: "https://web.facebook.com/profile.php?id=61574410614311",
                },
                {
                  name: "Tafachochu Lijoch Facebook",
                  href: "https://web.facebook.com/profile.php?id=61574044327067",
                },
                {
                  name: "Ye-wan Production Facebook",
                  href: "https://web.facebook.com/profile.php?id=61576135721146",
                },
                {
                  name: "Yem Film Academy Facebook",
                  href: "https://web.facebook.com/profile.php?id=61589186353726",
                },
              ]}
            />
            <SocialIcon
              Icon={FaTiktok}
              accounts={[
                {
                  name: "Yem TikTok",
                  href: "https://www.tiktok.com/@yem_film_production?lang=en",
                },
                {
                  name: "Tafachochu Lijoch TikTok",
                  href: "https://www.tiktok.com/@tafachochu_lijoch",
                },
                {
                  name: "Ye-wan Production TikTok",
                  href: "https://www.tiktok.com/@ye_wan_production",
                },
                {
                  name: "WWW Yem TikTok",
                  href: "https://www.tiktok.com/@wwwyem?lang=en",
                },
              ]}
            />
            <SocialIcon
              Icon={FaInstagram}
              accounts={[
                {
                  name: "Yem Insta",
                  href: "https://www.instagram.com/yem_film_production/",
                },
                {
                  name: "Tafachochu Lijoch Insta",
                  href: "https://www.instagram.com/thesweetchildren22/",
                },
                {
                  name: "Yem Film Academy Insta",
                  href: "https://www.instagram.com/yem_filmpro/",
                },
              ]}
            />
            <SocialIcon
              Icon={FaYoutube}
              accounts={[
                {
                  name: "Yem Youtube",
                  href: "https://www.youtube.com/@YemFilmProduction",
                },
                {
                  name: "Tafachochu Lijoch YouTube",
                  href: "https://www.youtube.com/@tafachochu_lijoch",
                },
                {
                  name: "Ye-wan Production 2 YouTube",
                  href: "https://www.youtube.com/@kal222-d5c",
                },
                {
                  name: "Ye-wan Production YouTube",
                  href: "https://www.youtube.com/@Ye_wan_Production",
                },
                {
                  name: "Yem Film Academy YouTube",
                  href: "https://www.youtube.com/@YemFilmAcademy-p8t",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
