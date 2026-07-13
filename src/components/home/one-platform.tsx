"use client"
import { Differentiator } from '@/content/homepage';
import React, { useState } from 'react'


function OnePlatform() {
  const [activeId, setActiveId] = useState(Differentiator.items[0].id);
  const active = Differentiator.items.find((p) => p.id === activeId) || Differentiator.items[0];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="rounded-xl p-4 sm:p-6 lg:p-8 bg-neutral-50">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-6 sm:space-y-8">
              {Differentiator.items.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={`relative flex flex-col gap-6 pl-6 sm:pl-8 cursor-pointer transition-opacity ${activeId === tab.id ? 'opacity-100' : 'opacity-50 hover:opacity-70'}`}
                >
                  {activeId === tab.id && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-theme-green-900 rounded-full"></div>
                  )}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-3 sm:mb-4">{tab.title}</h2>
                  {activeId === tab.id && (
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700">{tab.tagline}</p>
                  )}
                  {activeId === tab.id && (
                    <div className="lg:w-1/2 pt-6 flex sm:hidden items-center justify-center bg-neutral-100 rounded-xl p-4 sm:p-8 border border-neutral-200">
                      <img
                        src={active.imageUrl}
                        alt={active.imageAlt}
                        className="w-full h-auto max-h-[250px] sm:max-h-[400px] object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 hidden sm:flex items-center justify-center bg-neutral-100 rounded-xl p-4 sm:p-8">
              <img
                src={active.imageUrl}
                alt={active.imageAlt}
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default OnePlatform
