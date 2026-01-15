import React from 'react';

const Footer = () => {
    const links = {
        Product: ['Pricing', 'How it works', 'Features', 'FAQ'],
        Company: ['About', 'Blog', 'Contact', 'Careers'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    };

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                            ai<span className="text-salmon">humanizer</span>
                        </span>
                        <p className="mt-4 text-gray-500 text-sm">
                            Transforming AI content into natural, human-like writing in seconds.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-500 hover:text-salmon text-sm transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} AI Humanizer. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {/* Social placeholders */}
                        {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                            <a key={social} href="#" className="text-gray-400 hover:text-salmon text-sm">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
