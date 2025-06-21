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
import { Logos3Demo } from "@/components/demos/Logos3Demo";

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
      {/* New Hero Section */}
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

      <Logos3Demo />

      {/* Product Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to accept payments online, built with Indian businesses in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From signup to your first payment in under 30 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <ArrowDown className="hidden md:block absolute top-10 -right-4 h-6 w-6 text-gray-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Trusted by Indian Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about DigiSetu
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-lg font-semibold text-orange-600">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <blockquote className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-orange-500 scale-105' : 'border-0'} shadow-lg`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Your data and transactions are protected by industry-leading security standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">PCI DSS Compliant</h3>
                <p className="text-gray-600">Level 1 PCI DSS certified for maximum security</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <CreditCard className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">ISO 27001</h3>
                <p className="text-gray-600">Information security management certified</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <CalendarCheck className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">RBI Guidelines</h3>
                <p className="text-gray-600">Fully compliant with Indian banking regulations</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">Trusted by leading Indian companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold">TechCorp</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold">StartupHub</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold">EcoMart</div>
              <div className="bg-gray-200 px-6 py-3 rounded-lg font-semibold">FinanceFlow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">DigiSetu</h3>
              <p className="text-gray-400 leading-relaxed">
                Bridging India's digital payment ecosystem with secure, fast, and reliable solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 DigiSetu. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Proudly built in 🇮🇳 India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
