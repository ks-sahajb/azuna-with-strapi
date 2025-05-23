import React, { FC } from "react";

import Link from "next/link";

import { INavbar } from "@/apis/dtos/layout-component.type";

import BaseLink from "@/components/ui/BaseLink";

// ======================= Component =====================
/**
 * Navbar component
 * Renders the main navigation bar for the application, including logo and navigation links.
 */

export type INavbarProps = INavbar;

const Navbar: FC<INavbarProps> = (props) => {
  const { logo, link } = props;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo section */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block text-3xl font-bold text-cyan-600">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">
              {logo.text}
            </span>
          </span>
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-6">
          <nav className="hidden gap-8 md:flex">
            {link.map((link) => (
              <BaseLink href={link.href} intent="navlink" key={link.id}>
                {link.text}
              </BaseLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
