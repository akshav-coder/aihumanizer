import React from 'react';
import { User, BookOpen, SlidersHorizontal, Zap, Plus } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <User size={24} strokeWidth={1.5} />,
            title: "Sounds natural not AI written",
            description: "Turns AI-generated text into writing that feels human and authentic"
        },
        {
            icon: <BookOpen size={24} strokeWidth={1.5} />,
            title: "Helps with academic writing",
            description: "Useful for assignments, essays, emails, and project documentation."
        },
        {
            icon: <SlidersHorizontal size={24} strokeWidth={1.5} />,
            title: "Your tone stays intact",
            description: "Choose how you want to sound — formal, simple, or conversational."
        },
        {
            icon: <Zap size={24} strokeWidth={1.5} />,
            title: "Quick and stress free",
            description: "Paste text, humanize it, and use it instantly."
        }
    ];

    return (
        <section className="py-24 bg-[#FFFbf8] flex justify-center">
            <div className="max-w-4xl w-full mx-4">

                {/* The Big Red Border Frame */}
                <div className="relative bg-[#FFF5EE] border-[16px] border-[#EE4B2B] rounded-[48px] p-8 md:p-16 text-center shadow-sm">

                    {/* Top Badge (Flower/Plus Icon) */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#3E1C14] rounded-full flex items-center justify-center border-4 border-[#FFFbf8] z-10 shadow-sm">
                        <Plus className="text-white" size={28} strokeWidth={3} />
                    </div>

                    {/* Header Content */}
                    <div className="mb-16 mt-4">
                        <h2 className="font-mono text-3xl md:text-4xl text-[#3E1C14] mb-4 font-bold tracking-tight">
                            Why people choose AI Humanizer
                        </h2>
                        <p className="text-[#8B5E53] max-w-md mx-auto leading-relaxed">
                            Turn AI-generated content into writing that sounds natural, clear, and authentically yours.
                        </p>
                    </div>

                    {/* Quadrant Grid */}
                    <div className="relative grid md:grid-cols-2">

                        {/* Horizontal Divider (Dashed) */}
                        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-px border-t border-dashed border-[#BCAAA4]" />

                        {/* Vertical Divider (Dashed) */}
                        <div className="hidden md:block absolute top-4 bottom-4 left-1/2 w-px border-l border-dashed border-[#BCAAA4]" />

                        {features.map((feature, index) => (
                            <div key={index} className={`flex flex-col items-center justify-start p-8 ${
                                // Add padding/margins based on position for spacing
                                index === 0 ? "md:pb-12 md:pr-12" :
                                    index === 1 ? "md:pb-12 md:pl-12" :
                                        index === 2 ? "md:pt-12 md:pr-12" :
                                            "md:pt-12 md:pl-12"
                                }`}>
                                <div className="mb-4 text-[#3E1C14]">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[#8B4513] font-bold mb-3 text-lg">{feature.title}</h3>
                                <p className="text-[#A1887F] text-sm leading-relaxed max-w-xs">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
