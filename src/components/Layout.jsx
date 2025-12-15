import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = ({ t, language, toggleLanguage }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-deep-space/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="/images/logo-v2.png" alt="Kazoku Sushi Bar" className="h-12 object-contain bg-white/10 rounded-lg backdrop-blur-sm p-1" />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors uppercase text-sm tracking-widest">
                        {t?.nav?.menu || 'Menu'}
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-neon-blue transition-colors uppercase text-sm tracking-widest">
                        {t?.nav?.about || 'About'}
                    </Link>
                    <Link to="/location" className="text-gray-300 hover:text-neon-blue transition-colors uppercase text-sm tracking-widest">
                        {t?.nav?.location || 'Location'}
                    </Link>

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="ml-4 px-3 py-1 rounded-full border border-white/20 text-xs font-bold tracking-widest hover:bg-white/10 transition-colors"
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-white hover:text-neon-pink transition-colors">
                        <ShoppingBag size={24} />
                    </button>
                    <button className="md:hidden p-2 text-white">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/5 blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-pink/5 blur-[120px] animate-pulse-slow" />
            {/* Stars or particles could go here */}
        </div>
    );
};

import { useLanguage } from '../context/LanguageContext';
import CosmicDust from './CosmicDust';

const Layout = ({ children }) => {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <div className="min-h-screen bg-deep-space text-white font-sans selection:bg-neon-pink selection:text-white relative">
            <Background />
            <CosmicDust />
            <Navbar t={t} language={language} toggleLanguage={toggleLanguage} />
            <main className="pt-20 relative z-10">
                {children}
            </main>
            <footer className="py-12 border-t border-white/10 mt-20">
                <div className="container mx-auto px-6 text-center text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} Kazoku Sushi Bar. {t.footer.text}
                </div>
            </footer>
        </div>
    );
};

export default Layout;
