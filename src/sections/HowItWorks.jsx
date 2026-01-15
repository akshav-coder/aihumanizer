import React from 'react';
import { Upload, Copy, Download, Sparkles, FileText, Mail, File } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="py-32 bg-[#FFFbf8] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-32">
                    <h2 className="font-mono text-3xl md:text-5xl text-gray-900 tracking-tight">
                        How does aihumanizer work ?
                    </h2>
                </div>

                {/* Vertical Timeline Container */}
                <div className="relative">
                    {/* Central Dashed Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300 transform -translate-x-1/2 hidden md:block" />

                    {/* STEP 1: CREATE (Blue) */}
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-48">
                        {/* Center Number Bubble */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#FFFbf8] py-4 hidden md:flex flex-col items-center z-10">
                            <span className="text-sm font-bold text-gray-500 mb-2">1</span>
                            <span className="text-lg font-medium text-gray-900">Create</span>
                        </div>

                        {/* Left Content (Text) */}
                        <div className="text-center md:text-right md:pr-12">
                            <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Add the content you want to humanize</h3>
                            <p className="text-gray-500 leading-relaxed max-w-sm ml-auto">
                                Paste essays, assignments, emails, or AI-generated text or upload a document to get started.
                            </p>
                        </div>

                        {/* Right Content (Blue Wireframe Graphic) - SMALLER SIZE */}
                        <div className="md:pl-12 flex justify-center md:justify-start">
                            <div className="bg-blue-50/30 p-4 rounded-xl border-2 border-dashed border-blue-200 relative max-w-xs w-full">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFFbf8] px-3 text-blue-400 font-mono text-xs">
                                    Paste your text
                                </div>

                                {/* Inner Graphic Elements */}
                                <div className="flex justify-between mb-6 gap-3">
                                    <div className="border border-blue-200 text-blue-400 rounded-lg px-3 py-1.5 text-[10px] font-mono bg-white shadow-sm flex-1 text-center">Essay</div>
                                    <div className="border border-blue-200 text-blue-400 rounded-lg px-3 py-1.5 text-[10px] font-mono bg-white shadow-sm flex-1 text-center">Mail</div>
                                </div>

                                <div className="h-20 border border-blue-100 rounded-xl bg-white/50 mb-3 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 shadow-sm">
                                        <Upload size={18} />
                                    </div>
                                </div>
                                <div className="border border-dashed border-blue-300 text-blue-400 rounded-lg py-1.5 text-center text-[10px] font-mono bg-white">
                                    Document
                                </div>

                                {/* Decorative Corner Handles */}
                                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-blue-300" />
                                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-blue-300" />
                                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-blue-300" />
                                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-blue-300" />
                            </div>
                        </div>
                    </div>


                    {/* STEP 2: HUMANIZE (Pink) */}
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-48">
                        {/* Center Number Bubble */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#FFFbf8] py-4 hidden md:flex flex-col items-center z-10">
                            <span className="text-sm font-bold text-gray-500 mb-2">2</span>
                            <span className="text-lg font-medium text-gray-900">Humanize</span>
                        </div>

                        {/* Left Content (Pink Wireframe Graphic) - SMALLER SIZE */}
                        <div className="md:pr-12 md:order-1 order-2 flex justify-center md:justify-end">
                            <div className="relative max-w-xs w-full">
                                {/* Center Action Icon */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[150%] z-20 flex flex-col items-center">
                                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 shadow-md border border-pink-200 mb-1">
                                        <Sparkles size={18} />
                                    </div>
                                    <span className="font-mono text-pink-500 text-[10px] font-bold tracking-widest bg-[#FFFbf8] px-2">Processing</span>
                                </div>

                                <div className="flex justify-between items-center gap-3">
                                    {/* Box 1 (Robotic) */}
                                    <div className="border-2 border-pink-200 rounded-xl p-4 w-1/2 relative min-h-[120px] flex flex-col justify-between bg-pink-50/20">
                                        <div className="font-mono text-[9px] text-gray-800 mb-1">AI Text</div>
                                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white border border-pink-200 text-[9px] text-pink-500 px-1.5 py-0.5 rounded shadow-sm">
                                            Detectable
                                        </div>
                                        <div className="mt-auto bg-white border border-pink-200 text-pink-500 text-[9px] text-center py-0.5 rounded-md">Robotic</div>

                                        {/* Handles */}
                                        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-pink-300" />
                                        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-pink-300" />
                                    </div>

                                    {/* Box 2 (Natural) */}
                                    <div className="border-2 border-pink-200 rounded-xl p-4 w-1/2 relative min-h-[120px] flex flex-col justify-between bg-pink-50/20 shadow-[0_0_15px_rgba(255,192,203,0.3)]">
                                        <div className="font-mono text-[9px] text-gray-800 mb-1 font-bold">Humanized</div>
                                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white border border-pink-200 text-[9px] text-pink-500 px-1.5 py-0.5 rounded shadow-sm">
                                            UnDetectable
                                        </div>
                                        <div className="mt-auto bg-white border border-pink-200 text-pink-500 text-[9px] text-center py-0.5 rounded-md shadow-sm">Natural</div>

                                        {/* Handles */}
                                        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-pink-300" />
                                        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-pink-300" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content (Text) */}
                        <div className="text-center md:text-left md:pl-12 md:order-2 order-1">
                            <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Humanize your content naturally</h3>
                            <p className="text-gray-500 leading-relaxed max-w-sm mr-auto">
                                Our system refines your writing to sound more natural, clear, and original — without changing your meaning.
                            </p>
                        </div>
                    </div>


                    {/* STEP 3: USE/DOWNLOAD (Green) */}
                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Center Number Bubble */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#FFFbf8] py-4 hidden md:flex flex-col items-center z-10">
                            <span className="text-sm font-bold text-gray-500 mb-2">3</span>
                            <span className="text-lg font-medium text-gray-900">Use/Download</span>
                        </div>

                        {/* Left Content (Text) */}
                        <div className="text-center md:text-right md:pr-12">
                            <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Use it anywhere you need</h3>
                            <p className="text-gray-500 leading-relaxed max-w-sm ml-auto">
                                Your humanized content is ready to copy, download, or submit — confidently and safely.
                            </p>
                        </div>

                        {/* Right Content (Green Wireframe Graphic) - SMALLER SIZE */}
                        <div className="md:pl-12 flex justify-center md:justify-start">
                            <div className="bg-green-50/30 p-1.5 rounded-xl border-2 border-dashed border-green-200 relative max-w-xs w-full">
                                <div className="border border-green-300 rounded-lg p-4 bg-[#F0FFF4] relative h-32 shadow-sm">
                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#F0FFF4] px-3 text-green-500 font-mono text-xs font-bold">
                                        Humanized
                                    </div>

                                    {/* Content Area Placeholder */}
                                    <div className="w-full h-full bg-green-50/50 rounded border border-green-100/50" />

                                    {/* Action Buttons Float */}
                                    <div className="absolute bottom-3 right-3 flex space-x-1.5">
                                        <div className="p-1.5 bg-white rounded shadow-sm text-green-500 border border-green-200"><Copy size={14} /></div>
                                        <div className="p-1.5 bg-white rounded shadow-sm text-green-500 border border-green-200"><Download size={14} /></div>
                                    </div>

                                    {/* Handles */}
                                    <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-green-400 bg-white" />
                                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-green-400 bg-white" />
                                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-green-400 bg-white" />
                                    <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-green-400 bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
