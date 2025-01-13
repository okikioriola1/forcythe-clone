"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Marquee } from "@/components/ui/marquee";
import {
  ArrowRight,
  Menu,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Podcast,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Search,
  PenTool,
  Cpu,
  Send,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ForcytheLogo from "../../public/forcythelogo.svg";

import blogPosts from "@/data/blogPosts";
import features from "@/data/features";
import processSteps from "@/data/processSteps";
import portfolioItems from "@/data/portfolioItems";
import testimonials from "@/data/testimonials";
import stats from "@/data/stats";

const navLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Portfolio" },
  { href: "#", label: "Studio" },
  { href: "#", label: "Foundation" },
];
const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Podcast, href: "#" },
];
const footerLinks = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Studio", href: "#" },
  { label: "Foundation", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeStep, setActiveStep] = useState("idea");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [agreeToNotifications, setAgreeToNotifications] = useState(false);
  const forwardItems = useMemo(() => [...portfolioItems], []);
  const reverseItems = useMemo(() => [...portfolioItems].reverse(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreeToNotifications) {
      setSubscribed(true);
      setEmail("");
      setAgreeToNotifications(false);
    }
  };
  const currentStep =
    processSteps.find((step) => step.id === activeStep) || processSteps[0];

  return (
    <div className="min-h-screen bg-[#030516] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image src={ForcytheLogo} alt="logo" className="" />
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}

        {/* Desktop Call Button */}
        <div className="hidden md:block relative w-fit group">
          <Button
            className="bg-white rounded-full py-[12px] px-5 flex gap-2 items-center justify-center
                    text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md "
          >
            Book a Call
          </Button>
          <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-[#0A0B14] border-gray-800"
          >
            <SheetTitle className="text-white">Forcythe</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-blue-400 transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-4 bg-white text-black hover:bg-gray-100">
                Book a Call
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/header-background.svg')] opacity-10 bg-cover bg-center" />
        <div className="md:px-[7rem] px-[1rem]">
          <div className="relative z-10 w-full bg-white bg-opacity-10 py-8 mx-auto p-4 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
            <h1 className="text-4xl md:text-7xl leading-tight mb-8">
              We build <span className="text-blue-400">products</span> that
              shape a better future
            </h1>
            <p className="text-lg md:text-lg text-gray-400 mb-12 max-w-2xl">
              We're the architects of digital excellence across industries. We
              redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </p>
            <div className="relative w-fit group">
              <Button
                className="bg-white rounded-full py-[12px] px-5 flex gap-2 items-center justify-center
                    text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md "
              >
                Book a Call <ArrowRight className="ml-2" />
              </Button>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Success in <span className="text-blue-400">Motion</span> - Our
              clients' journey
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <Marquee className="py-4" speed="slow">
            {forwardItems.map((item) => (
              <div
                key={item.id}
                className="relative group w-[400px] overflow-hidden rounded-2xl flex-shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          <Marquee className="py-4" direction="right" speed="slow">
            {reverseItems.map((item) => (
              <div
                key={item.id}
                className="relative group w-[400px] overflow-hidden rounded-2xl flex-shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/*Testimonial Section */}

      <section className="py-20 bg-[#030516]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-4">
            Discover the{" "}
            <span className="text-blue-400">transformative stories</span> of
          </h2>
          <p className="text-2xl md:text-3xl text-center mb-16">
            startups that scaled new heights with us
          </p>

          {/* Company Logos */}
          <div className="overflow-x-scroll hide-scroll w-full">
            <div className="w-full grid grid-cols-5 justify-center gap-4 mb-16  border-[1px] border-[#06438C] rounded-full min-w-[750px]">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => handleTestimonialClick(index)}
                  className={`flex-shrink-0 px-8 py-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-blue-400/10 scale-110"
                      : "hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`text-sm md:text-lg font-semibold ${
                      index === activeTestimonial
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  >
                    {testimonial.company}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 p-5 rounded-[1.8rem] ${
                    index === activeTestimonial
                      ? "opacity-100 translate-y-0 bg-[#0c2645]"
                      : "opacity-0 translate-y-4 absolute inset-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                        {testimonial.quote}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="w-64 h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#080911]">
        <div className="container mx-auto px-3 md:px-4">
          <div className="mb-14 md:mb-0">
            <h2 className="text-4xl md:text-6xl">
              From <span className="text-blue-400">Spark</span> to{" "}
              <span className="text-blue-400">Spotlight</span>: we take you
            </h2>
            <p className="text-4xl md:text-6xl">
              every step of the way to success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Process Steps */}
              <div className="bg-[#0F1119] border border-[#b3d0f2] rounded-full p-2 grid grid-cols-4 gap-2">
                {processSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex-1 rounded-full py-4 md:px-6 px-3 text-xs md:text-lg font-medium transition-all duration-300 ${
                      activeStep === step.id
                        ? "bg-[#b3d0f2] text-black"
                        : "hover:bg-white/5 text-white"
                    }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>

              {/* Step Description */}
              <div className="space-y-6">
                <h3 className="md:text-3xl text-xl">
                  {currentStep?.titleDescription}
                </h3>
                <p className="md:text-xl text-md mx-2 text-gray-400 leading-relaxed">
                  {currentStep.description}
                </p>
                <div className="relative w-fit group">
                  <Button
                    className="bg-white rounded-full py-[12px] px-5 flex gap-2 items-center justify-center
                    text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md "
                  >
                    Book a Call <ArrowRight className="ml-2" />
                  </Button>
                  <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                </div>
              </div>
            </div>

            {/* Step Illustration */}
            <div className="relative aspect-square">
              {processSteps.map((step) => {
                const Icon =
                  activeStep === step.id ? step.activeIcon : step.icon;
                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeStep === step.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {/* <Icon className="w-64 h-64 text-blue-400" /> */}
                      <Image
                        src={step.icon}
                        alt={step.title}
                        // width={256}
                        // height={256}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* B2B/B2C Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Your best call for <span className="text-blue-400">B2B/B2C</span>{" "}
            product innovation
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#080911] rounded-3xl p-8 space-y-4 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-blue-400/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:mx-[20%] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B14]" />
          <div className="w-full h-full border-t-[1px] border-blue-400/20 rounded-[100%]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We build solutions that help{" "}
              <span className="text-blue-400">businesses</span> of all sizes to{" "}
              <span className="text-blue-400">scale</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-6xl text-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              Read our articles, news and product blog
            </h2>
            <div className="relative w-fit group">
              <Button
                className="bg-white rounded-full py-[12px] px-5 flex gap-2 items-center justify-center
                    text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md hidden md:flex"
              >
                Visit Blog <ArrowRight className="ml-2" />
              </Button>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[1.5] mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">
                    {post.author} • {post.date}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-fit group">
            <Button
              className="bg-white rounded-full py-[12px] px-5 flex gap-2 items-center justify-center
                    text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md w-full md:hidden "
            >
              Visit Blog <ArrowRight className="ml-2" />
            </Button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
      </section>
      <section className="py-32 my-10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl mb-4">
            Ready to <span className="text-blue-400">Scale?</span>
          </h2>
          <p className="text-2xl md:text-4xl font-bold mb-8">
            Join successful brands that chose us as their{" "}
            <span className="text-blue-400">growth accelerator</span>
          </p>
          <div className="relative w-fit mx-auto group">
            <Button
              className="bg-white rounded-full py-[12px] px-5 flex gap-2 items-center justify-center
                    text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md "
            >
              Book a Call
            </Button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8 border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Newsletter Subscription */}
            <div className="space-y-6">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-6 focus:outline-none focus:border-blue-400"
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-2 rounded-full bg-white text-black hover:bg-gray-100"
                  >
                    Subscribe
                  </Button>
                </div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeToNotifications}
                    onChange={(e) => setAgreeToNotifications(e.target.checked)}
                    className="rounded border-gray-700"
                  />
                  <span className="text-sm text-gray-400">
                    I agree to receive other notifications from Forcythe
                  </span>
                </label>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Image src={ForcytheLogo} alt="logo" className="" />
              </div>
              <p className="text-gray-400">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <nav className="grid gap-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#b3d0f2] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              Copyright © 2024 Forcythe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
