import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { footer } from "@/content/footer";

function Footer() {
  // We dynamically split your data into two halves to fill Panel 2 & Panel 3
  const half = Math.ceil(footer.columns.length / 2);
  const col1Links = footer.columns.slice(0, half);
  const col2Links = footer.columns.slice(half);

  return (
    <footer className="bg-[#323232] w-full text-white border-t border-[#444444]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#4a4a4a]">

          {/* Panel 1: Brand, Socials & Language */}
          <div className="p-8 lg:p-12 flex flex-col h-full">
            <Link href="/">
              {/* Added brightness-0 invert to force the logo white automatically */}
              <Logo variant="wordmark" className="h-8 brightness-0 invert" />
            </Link>

            {/* Social Icons matching design box-style */}
            <div className="mt-12 flex gap-3">
              {footer.social.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="text-gray-300 hover:text-white transition-colors border border-gray-500 hover:border-gray-300 rounded p-1.5"
                >
                  {item.platform === "LinkedIn" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  )}
                  {item.platform === "Twitter" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  )}
                  {item.platform === "GitHub" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  )}
                </a>
              ))}
            </div>

            {/* Language Dropdown */}
            <div className="mt-10">
              <label className="text-xs text-gray-400 block mb-2">Select your language</label>
              <select className="w-full bg-transparent border border-gray-500 text-gray-200 text-sm rounded px-3 py-2.5 focus:outline-none focus:border-white appearance-none cursor-pointer">
                <option className="text-black">English</option>
                <option className="text-black">French</option>
              </select>
            </div>

            <div className="mt-auto pt-16 text-xs text-gray-400">
              {footer.copyright}
            </div>
          </div>

          {/* Panel 2: Links (First Half) */}
          <div className="p-8 lg:p-12 flex flex-col gap-10">
            <h3 className="text-lg font-medium text-white mb-2">CodePay</h3>
            {col1Links.map((col) => (
              <div key={col.heading}>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[15px] text-gray-300 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Panel 3: Links (Second Half) */}
          <div className="p-8 lg:p-12 flex flex-col gap-10">
            <h3 className="text-lg font-medium text-white mb-2">Platform</h3>
            {col2Links.map((col) => (
              <div key={col.heading}>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[15px] text-gray-300 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Panel 4: Contact & Newsletter */}
          <div className="p-8 lg:p-12 flex flex-col">
            <h3 className="text-lg font-medium text-white mb-6">Contact</h3>

            <Link href="/contact" className="inline-block w-fit border border-gray-400 text-white px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-colors mb-8">
              TRY IT FOR FREE
            </Link>

            <ul className="space-y-4 mb-16">
              <li><Link href="/contact" className="text-[15px] text-gray-300 hover:text-white transition-colors">Talk to an Expert {'>'}</Link></li>
              <li><Link href="/support" className="text-[15px] text-gray-300 hover:text-white transition-colors">Customer Support {'>'}</Link></li>
              <li><Link href="/press" className="text-[15px] text-gray-300 hover:text-white transition-colors">Press {'>'}</Link></li>
            </ul>

            {/* Newsletter */}
            <div className="mt-auto">
              <label className="text-xs text-gray-400 block mb-3">Subscribe to the newsletter</label>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="bg-transparent border-b border-gray-500 px-0 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="w-full border border-gray-400 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;