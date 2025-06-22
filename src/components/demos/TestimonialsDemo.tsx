import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Priya Sharma",
      handle: "@priyasharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "DigiSetu transformed our payment experience. Setup was incredibly smooth and our conversion rates improved by 23%.",
    href: "https://twitter.com/priyasharma"
  },
  {
    author: {
      name: "Rajesh Kumar",
      handle: "@rajeshkumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/rajeshkumar"
  },
  {
    author: {
      name: "Anita Patel",
      handle: "@anitapatel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Reliable, fast, and secure. DigiSetu handles our high-volume transactions without any hiccups."
  },
  {
    author: {
      name: "Vikram Singh",
      handle: "@vikramsingh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The customer support is exceptional. They helped us integrate payments in just one day!"
  },
  {
    author: {
      name: "Meera Reddy",
      handle: "@meerareddy",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Perfect for Indian businesses. The UPI integration is seamless and our customers love it."
  }
]

export function TestimonialsDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Indian Entrepreneurs"
      description="Join thousands of businesses who are already building the future with DigiSetu"
      testimonials={testimonials}
    />
  )
} 