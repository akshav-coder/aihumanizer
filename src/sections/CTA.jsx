import React from 'react';
import { ArrowRight, Wand2 } from 'lucide-react';

const CTA = () => {
    return (
        <section className="bg-[#FFFbf8] w-full">
            {/* Full width red banner */}
            <div className="bg-[#EE4B2B] w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-2xl text-left">
                    <h2 className="font-mono text-[#3E1C14] text-2xl md:text-4xl font-medium leading-relaxed tracking-tight">
                        Turn AI-generated content into natural, authentic, and plagiarism-safe text in seconds.
                    </h2>
                </div>

                <div className="mt-8 md:mt-0 flex-shrink-0">
                    <button className="bg-[#FFFbf8] text-[#3E1C14] font-bold py-4 px-8 rounded-lg shadow-sm hover:bg-white hover:scale-105 transition-all duration-200 flex items-center gap-2">
                        <Wand2 size={20} />
                        Humanize text now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
