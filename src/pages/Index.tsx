import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/ui/hero-section-dark";
import { 
  ArrowRight, 
  Shield, 
  CreditCard, 
  Users, 
  Check, 
  FileText, 
  IndianRupee,
  CalendarCheck,
  ArrowDown
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NavBarDemo } from "@/components/NavBarDemo";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scroller";
import { BentoGridDemo } from "@/components/demos/BentoGridDemo";
import { PricingDemo } from "@/components/demos/PricingDemo";
import { FooterDemo } from "@/components/demos/FooterDemo";
import { TestimonialsDemo } from "@/components/demos/TestimonialsDemo";

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: IndianRupee,
      title: "Instant UPI & Card Payments",
      description: "Accept all major payment methods including UPI, cards, wallets, and net banking with lightning-fast processing."
    },
    {
      icon: Shield,
      title: "Bank-level Security",
      description: "PCI DSS compliant with 256-bit SSL encryption, fraud detection, and real-time monitoring."
    },
    {
      icon: FileText,
      title: "Developer-friendly API & Dashboard",
      description: "Clean REST APIs, comprehensive documentation, and an intuitive dashboard for seamless integration."
    },
    {
      icon: Users,
      title: "Easy Integration for All",
      description: "Whether you're a startup or enterprise, integrate DigiSetu in minutes with our flexible solutions."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your DigiSetu account in under 2 minutes with basic business details."
    },
    {
      step: "02", 
      title: "Integrate",
      description: "Use our simple APIs or plugins to integrate payments into your platform."
    },
    {
      step: "03",
      title: "Start Collecting",
      description: "Go live and start accepting payments from customers across India."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, EcoKart",
      content: "DigiSetu transformed our payment experience. Setup was incredibly smooth and our conversion rates improved by 23%.",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "CTO, FreshMart",
      content: "The API documentation is excellent and integration took just one afternoon. Customer support is responsive too.",
      avatar: "RK"
    },
    {
      name: "Anita Patel",
      role: "CEO, StyleHub",
      content: "Reliable, fast, and secure. DigiSetu handles our high-volume transactions without any hiccups.",
      avatar: "AP"
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "₹0",
      period: "/month",
      description: "Perfect for testing and small businesses",
      features: [
        "Up to 100 test transactions",
        "Basic dashboard",
        "Email support",
        "Standard APIs"
      ],
      cta: "Start Free"
    },
    {
      name: "Business",
      price: "₹999",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Unlimited transactions",
        "Advanced analytics",
        "Priority support",
        "Custom webhooks",
        "Multi-user dashboard"
      ],
      cta: "Choose Business",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Volume-based pricing",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "Advanced reporting"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <NavBarDemo />
      
      {/* Home Section */}
      <section id="home">
        <HeroSection
          title="🇮🇳 Made in India • Trusted by 1000+ businesses"
          subtitle={{
            regular: "Bridging Bharat Digitally — ",
            gradient: "One Payment at a Time",
          }}
          description="DigiSetu is India's next-gen payment gateway built for speed, trust, and scale. Seamlessly connect businesses with customers through secure digital payments."
          ctaText="Get Started Free"
          ctaHref="#"
          gridOptions={{
            angle: 65,
            opacity: 0.3,
            cellSize: 60,
            lightLineColor: "#e5e7eb",
            darkLineColor: "#374151",
          }}
        />
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-gray-900 dark:text-gray-100">
                Trusted by Industry Leaders
            </h2>
            <BrandScroller />
            <BrandScrollerReverse />
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <BentoGridDemo />
      </section>

      {/* Solutions Section */}
      <section id="solutions">
        <TestimonialsDemo />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingDemo />
      </section>

      <FooterDemo />
    </div>
  );
};

export default Index;
