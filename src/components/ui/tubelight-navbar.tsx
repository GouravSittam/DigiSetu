"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Function to handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, name: string) => {
    e.preventDefault()
    setActiveTab(name)
    
    const targetId = url.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const offset = 100 // Offset for fixed navbar
      const targetPosition = targetElement.offsetTop - offset
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Function to detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        name: item.name,
        element: document.getElementById(item.url.replace('#', ''))
      })).filter(section => section.element)

      const scrollPosition = window.scrollY + 150 // Offset for detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const sectionTop = section.element.offsetTop
          const sectionHeight = section.element.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:bottom-6 lg:top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url, item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-4 lg:px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden lg:inline">{item.name}</span>
              <span className="lg:hidden">
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1 sm:-top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-primary/20 rounded-full blur-md -top-1 sm:-top-2 -left-1 sm:-left-2" />
                    <div className="absolute w-6 sm:w-8 h-4 sm:h-6 bg-primary/20 rounded-full blur-md -top-0.5 sm:-top-1" />
                    <div className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-primary/20 rounded-full blur-sm top-0 left-1.5 sm:left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
} 