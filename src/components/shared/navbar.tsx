"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './logo';
import { ArrowUpRight } from "lucide-react";
import { navigation } from '@/content/navigation';

function Navbar() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ openDropdown, setOpenDropdown ] = useState<string | null>(null);
  const [ mobileOpen, setMobileOpen ] = useState<string | null>(null);

  // Scroll behavior states
  const [ isVisible, setIsVisible ] = useState(true);
  const [ lastScrollY, setLastScrollY ] = useState(0);
  const [ isScrolled, setIsScrolled ] = useState(false);

  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Scroll (Hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add a solid background if scrolled past the top (improves readability)
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down & past the initial header area
        setIsVisible(false);
        setOpenDropdown(null); // Close any open mega-menus for better UX
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ lastScrollY ]);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-4 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Logo variant="wordmark" className="h-10 sm:h-12" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigation.links.map((item) => (
              <div
                key={item.id}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdownColumns ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm xl:text-base transition-colors rounded-md ${openDropdown === item.id
                          ? 'bg-neutral-100 text-navy-900'
                          : 'text-neutral-700 hover:text-navy-900 hover:bg-neutral-50'
                        }`}
                      onMouseEnter={() => setOpenDropdown(item.id)}
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                    >
                      {item.label}
                      <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mega Menu Full Width Dropdown */}
                    {openDropdown === item.id && (
                      // Reduced padding here (pt-2 instead of pt-6) closes the gap so the menu doesn't vanish
                      <div className="absolute left-0 top-full w-full pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 flex p-8">
                          {item.dropdownColumns.map((col, colIndex) => (
                            <div
                              key={colIndex}
                              className={`flex-1 flex flex-col gap-8 px-6 ${colIndex !== item.dropdownColumns.length - 1
                                  ? 'border-r-2 border-dotted border-gray-200'
                                  : ''
                                }`}
                            >
                              {col.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="group block"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <div className="text-base font-medium text-navy-900 group-hover:text-theme-green-900 transition-colors">
                                    {sub.label}
                                  </div>
                                  {sub.description && (
                                    <div className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                                      {sub.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm xl:text-base text-neutral-700 hover:text-navy-900 transition-colors rounded-md hover:bg-neutral-50"
                  >
                    {item.label}
                  </Link>
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
                {item.dropdownColumns ? (
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
                        {item.dropdownColumns.flat().map((sub) => (
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