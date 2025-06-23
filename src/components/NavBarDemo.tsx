import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Features", url: "#features", icon: User },
    { name: "Solutions", url: "#solutions", icon: Briefcase },
    // { name: "About", url: "#about", icon: FileText },
    { name: "Pricing", url: "#pricing", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}
