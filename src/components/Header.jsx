import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold tracking-tight text-white">
                            aihumanizer
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#pricing" className="text-white hover:text-red-100 font-medium">Pricing</a>
                        <a href="#how-it-works" className="text-white hover:text-red-100 font-medium">How it works</a>
                        <a href="#login" className="text-white hover:text-red-100 font-medium">Log In</a>
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center">
                        <Button variant="outline" className="ml-4 px-6 py-2 !rounded-lg text-sm !border-white !text-white hover:!bg-white/10">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
