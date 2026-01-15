import React from 'react';

const TrustBanner = () => {
    // Placeholder logos using text for now, but styled to look consistent.
    // In a real production app, these would be SVG imports.
    const universities = [
        { name: 'HARVARD', sub: 'UNIVERSITY', color: 'text-red-900' },
        { name: 'Stanford', sub: 'University', color: 'text-red-800' },
        { name: 'LSE', sub: 'THE LONDON SCHOOL OF ECONOMICS', color: 'text-red-700' },
        { name: 'Cambridge', sub: 'UNIVERSITY', color: 'text-red-900' },
        { name: 'OXFORD', sub: 'UNIVERSITY OF', color: 'text-blue-900' },
        { name: 'UBC', sub: 'BRITISH COLUMBIA', color: 'text-blue-800' },
    ];

    // Duplicate list for seamless loop
    const doubledUniversities = [...universities, ...universities, ...universities, ...universities];

    return (
        <section className="py-16 bg-[#FFFbf8] border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                <p className="font-mono text-gray-500 tracking-widest text-sm uppercase">
                    Trusted By students across globe
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll whitespace-nowrap gap-16 items-center w-max">
                    {doubledUniversities.map((uni, index) => (
                        <div key={index} className={`flex flex-col items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300 font-serif ${uni.color} min-w-[200px]`}>
                            <span className="text-2xl font-bold tracking-tight">{uni.name}</span>
                            {uni.sub && <span className="text-[10px] uppercase tracking-wider">{uni.sub}</span>}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default TrustBanner;
