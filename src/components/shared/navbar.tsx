"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './logo';
import { ArrowUpRight } from "lucide-react";
import { navigation } from '@/content/navigation';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 py-4 bg-transparent z-50 relative" ref={navRef}>
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Logo variant="wordmark" className="h-10 sm:h-12" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigation.links.map((item) => (
              <div key={item.id} className="relative">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm xl:text-base text-neutral-700 hover:text-navy-900 transition-colors rounded-md hover:bg-neutral-50"
                    onMouseEnter={() => setOpenDropdown(item.id)}
                    onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm xl:text-base text-neutral-700 hover:text-navy-900 transition-colors rounded-md hover:bg-neutral-50"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {openDropdown === item.id && item.dropdown && (
                  <div
                    className="absolute left-0 top-full mt-1 w-72 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="text-sm font-medium text-navy-900">{sub.label}</div>
                        {sub.description && (
                          <div className="text-xs text-neutral-500 mt-0.5 leading-snug">{sub.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={navigation.secondaryCTA.href}
              className="text-sm xl:text-base text-navy-600 hover:text-navy-900 transition-colors font-medium px-3 py-2"
            >
              {navigation.secondaryCTA.label}
            </Link>
            <Link
              href={navigation.primaryCTA.href}
              className="group/link inline-flex items-center justify-between gap-6 rounded-full border border-white/25 bg-theme-green-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D]"
            >
              {navigation.primaryCTA.label}
              
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
          <div className="bg-white rounded-xl border border-neutral-100 shadow-lg divide-y divide-neutral-50">
            {navigation.links.map((item) => (
              <div key={item.id}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-5 py-4 text-base font-medium text-neutral-700 hover:text-navy-900"
                      onClick={() => setMobileOpen(mobileOpen === item.id ? null : item.id)}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${mobileOpen === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileOpen === item.id && (
                      <div className="bg-neutral-50 px-5 pb-3 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block py-2.5 text-sm text-neutral-600 hover:text-navy-900"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-5 py-4 text-base font-medium text-neutral-700 hover:text-navy-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-5 py-4 space-y-3">
              <Link
                href={navigation.secondaryCTA.href}
                className="block w-full text-center border border-navy-600 text-navy-600 px-6 py-3 rounded-lg hover:bg-navy-50 transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.secondaryCTA.label}
              </Link>
              <Link
                href={navigation.primaryCTA.href}
                className="block w-full text-center bg-navy-900 text-white px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.primaryCTA.label}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
