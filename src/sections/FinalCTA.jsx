import React from 'react';
import Button from '../components/Button';
import { Wand2 } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-20 bg-salmon">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to make your AI text human?
                </h2>
                <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                    Turn AI-generated content into natural, authentic, and plagiarism-safe text in seconds.
                </p>
                <Button variant="secondary" className="text-salmon hover:bg-gray-50 text-lg px-8 py-4">
                    <Wand2 className="mr-2" size={20} />
                    Humanize Text Now
                </Button>
            </div>
        </section>
    );
};

export default FinalCTA;
