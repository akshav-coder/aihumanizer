import React from 'react';

const Personas = () => {
    // Image Paths (using relative paths with base url)
    const baseUrl = import.meta.env.BASE_URL;
    const images = {
        students: `${baseUrl}images/student.png`,
        educators: `${baseUrl}images/educator.png`,
        professionals: `${baseUrl}images/professional.png`,
        creators: `${baseUrl}images/creator.png`,
        avatars: `${baseUrl}images/avatars.png`
    };

    const cards = [
        {
            id: 'students',
            title: 'Students',
            image: images.students,
            color: 'bg-black/60', // Fallback/Overlay color for closed state if needed, but closed state is mainly image.
            activeColor: 'bg-gray-800/90', // Just a placeholder, Students is shown CLOSED in screenshot
            description: "Submit better essays and assignments. Paraphrase dense academic texts into clear, understandable language while maintaining rigorous standards."
        },
        {
            id: 'educators',
            title: 'Educators',
            image: images.educators,
            activeColor: 'bg-[#366B86]', // Blueish teal
            description: "Create engaging teaching materials and clear student communications. Refine AI-generated lesson plans and feedback into natural, approachable language that resonates with students."
        },
        {
            id: 'professionals',
            title: 'Professionals',
            image: images.professionals,
            activeColor: 'bg-[#1E5F34]', // Deep Green
            description: "Write professional emails, reports, and business content with a natural tone. Turn AI drafts into polished communication that builds trust. Maintain your professional voice while leveraging AI."
        },
        {
            id: 'creators',
            title: 'Content Creators',
            image: images.creators,
            activeColor: 'bg-[#8B0000]', // Deep Red
            description: "Make AI-assisted content feel personal, engaging, and authentic. Add warmth and personality to blog posts, social media, and creative projects."
        }
    ];

    return (
        <section className="py-24 bg-[#FFFbf8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-mono text-3xl md:text-5xl text-[#3E1C14] mb-4 font-bold tracking-tight max-w-2xl mx-auto leading-tight">
                        Made for people who want AI to sound human
                    </h2>
                    <p className="text-[#8B5E53] text-lg">
                        Built for anyone who wants writing to sound natural and human.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="relative rounded-xl overflow-hidden h-[450px] shadow-sm group"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${card.image}')` }}
                            />

                            {/* Static Overlay with Opacity */}
                            {/* Using the card's active color but forcing an opacity so image shows through */}
                            <div className={`absolute inset-0 ${card.activeColor.replace('bg-', 'bg-').replace(']', ']/80')} transition-opacity duration-300`} />

                            {/* Fallback for Students if it has generic color in array */}
                            {card.id === 'students' && <div className="absolute inset-0 bg-black/50" />}

                            {/* Text Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
                                <p className="text-white/95 text-[15px] leading-relaxed font-medium">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Avatar Pill */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center bg-[#FFFbf8] border border-[#D7CCC8] rounded-full px-2 py-2 pr-6 shadow-sm">
                        <div className="flex -space-x-3 mr-4">
                            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200" style={{ backgroundImage: `url('${images.avatars}')`, backgroundSize: 'cover', backgroundPosition: 'center left' }}></div>
                            {/* Using parts of the avatar strip or just duplicate for visual effect as we have one combined image */}
                            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300" style={{ backgroundImage: `url('${images.avatars}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-400" style={{ backgroundImage: `url('${images.avatars}')`, backgroundSize: 'cover', backgroundPosition: 'center right' }}></div>
                        </div>
                        <span className="text-[#8B5E53] font-medium text-sm">Designed for everyone who writes</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Personas;
