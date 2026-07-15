"use client";

import React from "react";
import { integrationsData } from "@/content/integrations-and-support"; 

function IntegrationsTable() {
    return (
        <section className="w-full bg-white py-20 lg:py-28 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center max-w-3xl mb-16 lg:mb-20">
                    <p className="text-[11px] sm:text-xs font-bold text-[#8B82FF] uppercase tracking-widest mb-4">
                        {integrationsData.tagline}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] text-[#222222] font-serif leading-tight">
                        {integrationsData.headline}
                    </h2>
                </div>

                {/* Responsive Table Wrapper */}
                <div className="w-full overflow-x-auto pb-6">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr>
                                {integrationsData.headers.map((header, idx) => (
                                    <th
                                        key={idx}
                                        className={`pb-8 px-6 text-xs font-semibold text-[#8B82FF] uppercase tracking-wider ${idx === 0 ? 'w-[25%]' : 'w-[15%]'}`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {integrationsData.methods.map((method) => (
                                <tr key={method.id} className={method.bgClass}>

                                    {/* Method Name & Description */}
                                    <td className="p-8 align-top">
                                        <h3 className="text-xl font-medium text-[#6058F3] mb-4">
                                            {method.name}
                                        </h3>
                                        <p className="text-[13px] text-gray-500 leading-relaxed pr-4">
                                            {method.description}
                                        </p>
                                    </td>

                                    {/* Benefits */}
                                    <td className="p-8 align-top">
                                        <div className="flex flex-col gap-4">
                                            {method.benefits.map((benefit, i) => (
                                                <p key={i} className="text-[13px] text-[#444444] leading-snug">
                                                    {benefit}
                                                </p>
                                            ))}
                                        </div>
                                    </td>

                                    {/* Considerations */}
                                    <td className="p-8 align-top">
                                        <p className="text-[13px] text-[#444444] leading-snug">
                                            {method.considerations}
                                        </p>
                                    </td>

                                    {/* Time */}
                                    <td className="p-8 align-top">
                                        <p className="text-[13px] text-[#444444] leading-snug">
                                            {method.time}
                                        </p>
                                    </td>

                                    {/* Dev Required */}
                                    <td className="p-8 align-top">
                                        <p className="text-[13px] text-[#444444] leading-snug">
                                            {method.devRequired}
                                        </p>
                                    </td>

                                    {/* Platforms */}
                                    <td className="p-8 align-top">
                                        <p className="text-[13px] text-[#444444] leading-snug">
                                            {method.platforms}
                                        </p>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}

export default IntegrationsTable;