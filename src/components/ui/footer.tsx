"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
}

interface FooterLink {
  name: string;
  Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: {
    name: string;
    description: string;
  };
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, brand, socialLinks, columns, copyright, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-12 sm:pt-16 lg:pt-24", className)}
        {...props}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <a href="#" className="text-lg sm:text-xl font-semibold">
                {brand.name}
              </a>
              <p className="text-sm text-foreground/60 mt-2 sm:mt-3">
                {brand.description}
              </p>

              <p className="text-xs sm:text-sm font-light text-foreground/55 mt-3 sm:mt-4">
                {socialLinks.map((link, index) => (
                  <span key={link.name}>
                    <a
                      className="hover:text-foreground/90 transition-colors"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " • "}
                  </span>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:col-span-8 lg:justify-items-end">
              {columns.map(({ title, links }) => (
                <div key={title} className="last:mt-8 sm:last:mt-0">
                  <h3 className="text-sm font-semibold mb-3 sm:mb-4">{title}</h3>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-xs sm:text-sm transition-all text-foreground/60 hover:text-foreground/90 group flex items-center"
                        >
                          <Icon className="inline stroke-2 h-3 w-3 sm:h-4 sm:w-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90 flex-shrink-0" />
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="mt-12 sm:mt-16 lg:mt-20 border-t pt-4 sm:pt-6 pb-6 sm:pb-8">
              <p className="text-xs text-foreground/55 text-center sm:text-left">{copyright}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Footer.displayName = "Footer"; 