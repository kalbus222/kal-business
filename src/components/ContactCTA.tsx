"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        serviceId,
        templateId,
        {
          name,
          message: message + "\n" + phone,
          email,
        },
        publicKey
      )
      .then(() => {
        toast.success(
          "Email sent successfully! Please check your email and spam folder.",
          {
            className: "bg-[#001f3f] border-[1.5px] border-accent font-mulish",
            progressClassName: "bg-[#c69d45]",
            icon: false,
            theme: "dark",
            closeButton: false,
          }
        );
        setName("");
        setPhone("");
        setEmail("");
        setLoading(false);
      })
      .catch((e) => {
        toast.error("Failed to send email. Please try again.", {
          className: "bg-[#001f3f] border-[1.5px] border-accent font-mulish",
          progressClassName: "bg-[#c69d45]",
          icon: false,
          theme: "dark",
          closeButton: false,
        });
        console.error("emailjs: ", e);
        setLoading(false);
      });
    console.log("Form submitted:", { name, phone, email });
  };

  return (
    <section
      id="contact-section"
      className="bg-background py-16 px-4 md:px-8 mt-8"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-semibold font-sofia-sans text-foreground text-center mb-2">
          LET&apos;S START INVESTING
          <br />
          <span className="inline-flex items-center">
            <span className="w-12 h-8 pl-4 rounded-full border border-accent flex items-center justify-center mr-2">
              <ArrowRight className="w-4 h-4 text-accent" />
            </span>
            TOGETHER!
          </span>
        </h2>
        <p className="text-accent text-3xl md:text-4xl font-mulish font-semibold text-center mb-12">
          CONTACT US TODAY
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-primary rounded-3xl p-8 font-sofia-sans">
            <Image
              src="/images/logo.png"
              alt="KAL Business Logo"
              width={265}
              height={64}
              className="mb-4"
            />
            <h3 className="text-white text-2xl font-semibold mb-1">
              KAL GENERAL
            </h3>
            <h3 className="text-white text-2xl font-semibold mb-1">BUSINESS</h3>
            <h3 className="text-white text-2xl font-semibold mb-8">CENTER</h3>

            <div className="mb-8">
              <p className="text-accent mb-1">PHONE</p>
              <p className="text-white">
                +251 92 471 1079 &nbsp; | &nbsp; +251 91 072 7277 &nbsp;| &nbsp;
                +251 46 221 8618
              </p>
              {/* <p className="text-white">+251 91 072 7277</p> */}
              {/* <p className="text-white"></p> */}
            </div>

            <div className="mb-8">
              <p className="text-accent mb-1">EMAIL</p>
              <p className="text-white">INFO@KALBUSINESS.COM</p>
              <p className="text-white">MAIL@KALBUSINESS.COM</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-primary rounded-3xl p-8">
            <h3 className="text-white text-2xl font-bold mb-4">
              REQUEST A CALL
            </h3>
            <p className="text-accent mb-6">
              Fill out the application form and we will call you back
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border border-accent rounded-full px-4 py-2 text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border border-accent rounded-full px-4 py-2 text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-accent rounded-full px-4 py-2 text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent resize-none h-20 border border-accent rounded-2xl px-4 py-2 text-white placeholder-accent focus:outline-none focus:ring-2 focus:ring-accent [scrollbar-width:none] [-webkit-scrollbar:none]"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-accent text-white rounded-full px-6 py-3 font-semibold flex items-center justify-center hover:bg-[#aa883e] transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader size={20} color={"#ffffff"} loading={loading} />
                ) : (
                  <>
                    SEND REQUEST
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer for toast notifications */}
    </section>
  );
}
