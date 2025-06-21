import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Features', url: '#', icon: User },
    { name: 'Solutions', url: '#', icon: Briefcase },
    { name: 'Pricing', url: '#', icon: FileText }
  ]

  return <NavBar items={navItems} />
} 