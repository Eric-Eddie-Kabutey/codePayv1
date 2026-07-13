import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { devTeaser } from "@/content/homepage";

function DevCta() {

  return (
      <section className="bg-white pt-20 sm:pt-24 lg:pt-28">
        <div className="mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid rounded-lg bg-gray-100 grid-cols-1 gap-6 lg:grid-cols-3">
            <Link
              href={devTeaser.cta.href}
              className="group/link relative col-span-1 min-h-[320px] overflow-hidden rounded-md px-6 sm:px-8 py-8 sm:py-16 transition-all duration-300 lg:col-span-3"
            >
              <div className="flex h-full flex-col justify-between">
                {/* Top Row */}
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <Code2 className="h-8 w-8 text-black/75 transition-transform duration-500 ease-out" />

                    <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                      Developers
                    </p>
                  </div>

                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
                    {/* Arrow entering */}
                    <ArrowUpRight
                      className="absolute translate-y-5 -translate-x-5 text-app-secondary opacity-0 transition-all duration-500 ease-out group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100"
                      size={32}
                    />

                    {/* Arrow leaving */}
                    <ArrowUpRight
                      className="text-theme-amber-900 absolute text-app-secondary transition-all duration-500 ease-out group-hover/link:translate-x-5 group-hover/link:-translate-y-5 group-hover/link:opacity-0"
                      size={32}
                    />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-8">
                    <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
                      {devTeaser.headline}
                    </h2>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
                      {devTeaser.body}
                    </p>
                  </div>

                  <div className="lg:col-span-4 lg:flex lg:justify-end">
                    <div className="group/link w-fit">
                      <span className="inline-flex items-center text-lg font-medium text-black">
                        {devTeaser.cta.label}
                      </span>

                      <div className="mt-1 h-1 w-full overflow-hidden rounded-full">
                        <div className="h-[2px] w-0 rounded-full bg-theme-amber-900 transition-all duration-700 ease-out group-hover/link:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
  );
}

export default DevCta;
