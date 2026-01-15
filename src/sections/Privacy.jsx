import React from 'react';
import { Check, Shield, Lock, Trash2, ArrowDown } from 'lucide-react';

const Privacy = () => {
    return (
        <section className="py-24 bg-[#FFFbf8]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Content */}
                <div className="text-center mb-16">
                    <h2 className="font-mono text-3xl md:text-5xl text-[#3E1C14] mb-6 font-bold tracking-tight">
                        Your writing stays yours.
                    </h2>
                    <p className="text-[#8B5E53] max-w-2xl mx-auto leading-relaxed">
                        Your text is processed securely and never stored longer than necessary. We don't read, save, or reuse your content — ever.
                    </p>
                </div>

                {/* Split Card Container */}
                <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-sm border border-gray-100 min-h-[500px]">

                    {/* LEFT SIDE: Red Background + Checklist */}
                    <div className="bg-[#EE4B2B] p-12 md:p-16 flex-1 flex flex-col justify-center">
                        <div className="space-y-8">
                            {[
                                "No saved documents or writing history",
                                "Secure processing during humanization",
                                "Your content is deleted after use",
                                "No sharing with third parties"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                                        <Check size={14} className="text-[#EE4B2B] stroke-[3]" />
                                    </div>
                                    <span className="text-white font-medium text-lg leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: White Background + Icon Flow */}
                    <div className="bg-white p-12 md:p-16 flex-1 flex flex-col items-center justify-center border-l border-gray-100 relative">
                        <div className="flex flex-col items-center space-y-2">
                            {/* Step 1: Secure */}
                            <div className="w-16 h-16 rounded-full border border-dashed border-[#8B4513] flex items-center justify-center mb-2">
                                <Shield className="text-[#8B4513]" size={24} />
                            </div>
                            <h3 className="text-[#3E1C14] font-bold text-lg font-mono">Secure</h3>
                            <p className="text-[#A1887F] text-xs font-mono uppercase tracking-widest mb-4">End to end encryption</p>

                            {/* Arrow Down */}
                            <ArrowDown className="text-[#A1887F] animate-bounce" size={20} />

                            {/* Step 2: Private */}
                            <div className="w-16 h-16 rounded-lg border border-dashed border-[#8B4513] flex items-center justify-center mb-2 mt-4">
                                <Lock className="text-[#8B4513]" size={24} />
                            </div>
                            <h3 className="text-[#3E1C14] font-bold text-lg font-mono mb-4">Private</h3>

                            {/* Arrow Down */}
                            <ArrowDown className="text-[#A1887F] animate-bounce delay-100" size={20} />

                            {/* Step 3: Deleted */}
                            <div className="w-16 h-16 rounded-lg border border-dashed border-[#8B4513] flex items-center justify-center mb-2 mt-4">
                                <Trash2 className="text-[#8B4513]" size={24} />
                            </div>
                            <h3 className="text-[#3E1C14] font-bold text-lg font-mono">Deleted</h3>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Privacy;
