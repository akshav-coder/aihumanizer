import React, { useState } from 'react';
import { Copy, Download, Upload, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
    const [activeLang, setActiveLang] = useState('English');
    const [inputText, setInputText] = useState('');

    const languages = ['English', 'Spanish', 'German', 'All'];

    return (
        <section className="bg-brand-red min-h-[90vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-7xl w-full mx-auto">

                {/* Header Text */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                        Turn AI-Generated Text into Natural,
                        <span className="block mt-2">Human-Sounding Writing</span>
                    </h1>
                    <p className="text-lg text-red-100 max-w-2xl mx-auto leading-relaxed">
                        Transform robotic AI outputs into clear, authentic, and emotionally resonant content—ready to use in seconds, without losing your original intent.
                    </p>
                </div>

                {/* The Dual Card Interface */}
                <div className="grid md:grid-cols-2 gap-6 items-stretch">

                    {/* LEFT CARD - INPUT */}
                    <div className="bg-off-white rounded-xl shadow-xl overflow-hidden flex flex-col h-[600px] border-4 border-white/10">
                        {/* Card Header */}
                        <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100 bg-white">
                            <div className="flex items-center space-x-3">
                                <span className="text-gray-900 font-bold flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    Your content
                                </span>
                                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">0 words</span>
                            </div>
                        </div>

                        {/* Tabs & Content */}
                        <div className="p-6 flex-1 flex flex-col bg-off-white relative">
                            <div className="flex space-x-6 border-b-2 border-transparent border-b-gray-100 mb-4 pb-2">
                                {languages.map(lang => (
                                    <button
                                        key={lang}
                                        onClick={() => setActiveLang(lang)}
                                        className={`text-sm font-medium pb-2 -mb-2.5 transition-colors flex items-center ${activeLang === lang
                                                ? 'text-gray-900 border-b-2 border-salmon'
                                                : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        {lang}
                                        {lang === 'All' && <ChevronDown size={14} className="ml-1" />}
                                    </button>
                                ))}
                            </div>

                            <textarea
                                className="flex-1 w-full bg-transparent resize-none border-none focus:ring-0 p-0 text-gray-700 placeholder-gray-400 text-lg leading-relaxed"
                                placeholder="Enter or Paste the text you want to humanize"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {!inputText && (
                                    <Button variant="outline" className="bg-white hover:bg-red-50 text-salmon border-salmon font-normal">
                                        Try a Sample
                                    </Button>
                                )}
                            </div>

                            {/* Bottom Controls */}
                            <div className="mt-4 flex justify-between items-center">
                                <div className="relative">
                                    <button className="flex items-center justify-between w-40 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
                                        Neutral <ChevronDown size={16} className="ml-2 text-gray-400" />
                                    </button>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg bg-white">
                                    <Upload size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Main Action Button (Inside Left Card at Bottom?) Or below? 
                    In the image it looks like there is a button below the text area inside the card.
                    Actually, looking closely at the image, there is a prominent "Humanize Text" button 
                    layout at the bottom of the card.
                */}
                        <div className="p-6 pt-0 bg-off-white">
                            <button className="w-full bg-salmon hover:bg-[#FF7A6B] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-red-200 transition-all transform active:scale-[0.98]">
                                Humanize Text
                            </button>
                        </div>
                    </div>


                    {/* RIGHT CARD - OUTPUT */}
                    <div className="bg-off-white rounded-xl shadow-xl overflow-hidden flex flex-col h-[600px] border-4 border-white/10">
                        {/* Card Header */}
                        <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100 bg-white">
                            <div className="flex items-center space-x-3">
                                <span className="text-gray-900 font-bold flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                    Humanized Text
                                </span>
                                <span className="bg-red-50 text-salmon text-xs px-2 py-1 rounded-full">0 words</span>
                            </div>
                        </div>

                        {/* Tabs & Content */}
                        <div className="p-6 flex-1 flex flex-col bg-off-white">
                            <div className="flex space-x-6 border-b-2 border-transparent border-b-gray-100 mb-4 pb-2">
                                {languages.map(lang => (
                                    <button
                                        key={lang}
                                        className={`text-sm font-medium pb-2 -mb-2.5 transition-colors flex items-center ${activeLang === lang
                                                ? 'text-gray-900 border-b-2 border-salmon'
                                                : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        {lang}
                                        {lang === 'All' && <ChevronDown size={14} className="ml-1" />}
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 flex items-center justify-center">
                                <p className="text-gray-300 text-lg font-medium">Humanized Text appears Here</p>
                            </div>

                            <div className="flex space-x-2 mt-auto pt-4">
                                <button className="p-2 text-gray-300 hover:text-salmon transition-colors">
                                    <Copy size={24} />
                                </button>
                                <button className="p-2 text-gray-300 hover:text-salmon transition-colors">
                                    <Download size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
