"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './logo';
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setOpenDropdown(null);
      } else {
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
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled || openDropdown !== null ? 'bg-white shadow-sm' : 'bg-transparent py-4'} ${!isScrolled && openDropdown === null ? 'py-4' : 'py-0'}`}
    >
      <nav className="max-w-7xl mx-auto relative h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Logo variant="wordmark" className="h-8 sm:h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-stretch h-full gap-1 xl:gap-2">
          {navigation.links.map((item) => (
            <div
              key={item.id}
              className="flex items-stretch"
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.dropdownColumns ? (
                <>
                  <button
                    className={`flex items-center gap-1 px-4 text-sm xl:text-base font-medium transition-colors rounded-xl-none h-full ${openDropdown === item.id
                        ? 'bg-neutral-100 text-black'
                        : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
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
                    <div className="absolute left-0 top-full w-full pt-0 z-50">
                      {/* FIX: Added max-h-[calc(100vh-5rem)] and overflow-y-auto to allow scrolling on small laptop screens */}
                      <div className="bg-white shadow-xl border border-neutral-100 border-t-0 flex p-8 rounded-xl-b-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
                        {item.dropdownColumns.map((col, colIndex) => (
                          <div
                            key={colIndex}
                            className={`flex-1 flex flex-col px-8 ${colIndex !== item.dropdownColumns.length - 1
                                ? 'border-r-2 border-dotted border-gray-200'
                                : ''
                              }`}
                          >
                            {/* Section Heading with Underline */}
                            {col.heading && (
                              <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-6 pb-2 border-b border-gray-300">
                                {col.heading}
                              </h4>
                            )}

                            {/* Links inside the column */}
                            <div className="flex flex-col gap-6">
                              {col.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="group block"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <div className="text-[15px] font-medium text-black group-hover:text-theme-green-900 transition-colors">
                                    {sub.label}
                                  </div>
                                  {sub.description && (
                                    <div className="text-sm text-neutral-500 mt-1 leading-relaxed pr-4">
                                      {sub.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center px-4 text-sm xl:text-base text-neutral-600 hover:text-black font-medium transition-colors rounded-xl-none hover:bg-neutral-50 h-full"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href={navigation.secondaryCTA.href}
            className="text-sm xl:text-base text-black hover:text-gray-600 transition-colors font-medium"
          >
            {navigation.secondaryCTA.label}
          </Link>
          <Link
            href={navigation.primaryCTA.href}
            className="inline-block rounded-xl border border-white/25 bg-theme-blue-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D]"
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

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen border-t border-gray-100 shadow-xl overflow-y-auto' : 'max-h-0'}`}>
          <div className="bg-white divide-y divide-neutral-50 px-4 pb-4">
            {navigation.links.map((item) => (
              <div key={item.id}>
                {item.dropdownColumns ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-4 text-base font-medium text-black"
                      onClick={() => setMobileOpen(mobileOpen === item.id ? null : item.id)}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${mobileOpen === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileOpen === item.id && (
                      <div className="bg-neutral-50 rounded-xl-lg px-4 py-3 mb-2 space-y-4">
                        {item.dropdownColumns.flatMap(col => col.items).map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block py-1 text-[15px] font-medium text-neutral-600 hover:text-black"
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
                    className="block py-4 text-base font-medium text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-5 space-y-4 flex flex-col items-center">
              <Link
                href={navigation.secondaryCTA.href}
                className="text-base font-medium border border-white/25 bg-theme-blue-900 text-black hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.secondaryCTA.label}
              </Link>
              <Link
                href={navigation.primaryCTA.href}
                className="block w-full text-center rounded-xl border border-white/25 bg-theme-blue-900 py-2 px-6 text-base font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-transparent hover:bg-theme-purple-900 hover:text-[#071B2D] sm:min-w-[240px]"
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