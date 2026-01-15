import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "What does AI Humanizer do ?",
            answer: "AI Humanizer transforms robotic, AI-generated text from tools like ChatGPT, Claude, or Jasper into natural, human-sounding writing that bypasses AI detectors and resonates with readers."
        },
        {
            question: "Who else can use this tool ?",
            answer: "Our tool is perfect for students, content creators, marketing professionals, researchers, and anyone who wants to polish their writing or ensure their content sounds authentic and original."
        },
        {
            question: "Is my content safe and private ?",
            answer: "Absolutely. We prioritize your privacy with end-to-end encryption. Your text is processed securely, never stored, and automatically deleted immediately after humanization."
        },
        {
            question: "Which file format is supported ?",
            answer: "You can copy-paste text directly or upload common document formats including .txt, .doc, .docx, and .pdf files for instant processing."
        },
        {
            question: "Is there a free version ?",
            answer: "Yes, we offer a free tier that allows you to humanize a limited number of words daily so you can test the quality and effectiveness of our tool."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-[#FFFbf8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start justify-between">

                    {/* Left Side: Title */}
                    <div className="md:w-1/3 mb-12 md:mb-0">
                        <h2 className="text-[#3E1C14] font-mono text-4xl md:text-5xl font-bold tracking-tight">
                            FAQ
                        </h2>
                    </div>

                    {/* Right Side: Accordion List */}
                    <div className="md:w-2/3 w-full">
                        <div className="border-t border-[#EFEBE9]">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-[#EFEBE9]">
                                    <button
                                        className="w-full py-8 flex items-center justify-between text-left group"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span className={`text-lg md:text-xl font-medium transition-colors duration-200 ${openIndex === index ? 'text-[#3E1C14]' : 'text-[#8B5E53] group-hover:text-[#3E1C14]'}`}>
                                            {faq.question}
                                        </span>
                                        <span className="ml-6 flex-shrink-0 text-[#3E1C14]">
                                            {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-[#8B5E53] leading-relaxed pr-8">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
