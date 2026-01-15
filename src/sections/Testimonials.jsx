import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "AI Humanizer helped me submit my assignments with confidence. The content sounds natural and doesn't feel AI-generated at all",
            name: "Ananya Sharma",
            role: "B.Tech Student",
            avatar: "/images/avatar1.png" // Female Student
        },
        {
            text: "I was worried my submissions would sound robotic. AI Humanizer made my writing clear, simple, and genuinely human.",
            name: "Rahul Mehta",
            role: "MBA Student",
            avatar: "/images/avatar2.png" // Male Student
        },
        {
            text: "AI Humanizer turns rough AI drafts into clear, persuasive content. It saves time without compromising quality.",
            name: "Neha Kapoor",
            role: "Marketing Consultant",
            avatar: "/images/avatar3.png" // Female Professional
        },
        {
            text: "The scripts sound more natural and engaging. Audience retention improved once the content felt more human.",
            name: "Karthik V",
            role: "YouTube Script Writer",
            avatar: "/images/avatar4.png" // Male Professional
        },
        {
            text: "It helped me refine my academic writing without changing my voice. Professors never questioned the authenticity.",
            name: "Snehal Iyer",
            role: "Master's Student",
            avatar: "/images/avatar1.png" // Repeat Female Student
        },
        {
            text: "I use AI daily for drafts, but AI Humanizer makes the final output client-ready. It feels polished and professional.",
            name: "Arjun Patel",
            role: "Business Analyst",
            avatar: "/images/avatar2.png" // Repeat Male Student
        },
        {
            text: "This tool bridges the gap between efficiency and authenticity. My emails and documents finally sound like me",
            name: "Vikram Rao",
            role: "Product Manager",
            avatar: "/images/avatar4.png" // Repeat Male Professional
        }
    ];

    return (
        <section className="py-24 bg-[#FFFbf8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Trust Indicator */}
                <div className="flex flex-col items-center mb-16">
                    <div className="mb-4">
                        <img src="/images/trusted_row.png" alt="Trusted Users" className="h-8 object-contain" />
                    </div>
                    <p className="text-[#8B5E53] text-xs font-semibold uppercase tracking-wide">
                        Trusted by 100,000+ Users Across Campuses & Workspaces
                    </p>
                </div>

                {/* Headline */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="font-mono text-3xl md:text-5xl text-[#3E1C14] font-bold leading-tight">
                        Thousands rely on AI Humanizer to make AI content sound natural and human.
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="break-inside-avoid bg-[#FFF5EE] p-8 rounded-2xl border border-[#F5EBE0] shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="text-[#8B5E53] text-lg leading-relaxed mb-8">
                                {item.text}
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-[#3E1C14] font-bold text-base">{item.name}</h4>
                                    <p className="text-[#A1887F] text-xs font-medium">{item.role}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white shadow-sm">
                                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
