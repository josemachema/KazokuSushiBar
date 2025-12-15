import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MenuGrid = ({ categories, onSelectDish }) => {
    const { t, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const navRef = useRef(null);

    const getText = (content) => {
        if (!content) return '';
        if (typeof content === 'string') return content;
        return content[language] || content['en'] || content['es'] || '';
    };

    // Auto-scroll nav when active category changes
    useEffect(() => {
        if (navRef.current) {
            const activeBtn = navRef.current.querySelector(`[data-id="${activeCategory}"]`);
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeCategory]);

    const activeSection = categories.find(c => c.id === activeCategory);

    return (
        <section id="menu" className="relative z-20 pb-20 min-h-screen">
            {/* Sticky Navigation Tabs */}
            <div className="sticky top-[72px] z-40 bg-deep-space/95 backdrop-blur-xl border-b border-white/10 shadow-lg mb-8 transition-all">
                <div
                    ref={navRef}
                    className="flex overflow-x-auto py-4 px-4 gap-3 no-scrollbar scroll-smooth"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            data-id={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold tracking-widest transition-all duration-300 flex-shrink-0 border ${activeCategory === cat.id
                                ? 'bg-neon-pink text-white border-neon-pink shadow-[0_0_15px_rgba(244,114,182,0.5)] scale-105'
                                : 'bg-surface/50 text-gray-400 border-white/5 hover:border-white/30 hover:text-white hover:bg-surface/80'
                                }`}
                        >
                            {getText(cat.title)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <h3 className="text-2xl md:text-5xl font-bold font-display bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-pulse">
                        {t.menu.title}
                    </h3>
                </div>

                <AnimatePresence mode="wait">
                    {activeSection && (
                        <motion.div
                            key={activeSection.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="min-h-[500px]"
                        >
                            <h4 className="flex items-center text-xl md:text-3xl font-display text-white mb-8 border-l-4 border-neon-blue pl-4">
                                {getText(activeSection.title)}
                                <span className="ml-4 h-[1px] flex-grow bg-white/10 opacity-50"></span>
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                {activeSection.items.map((item) => (
                                    <TiltCard
                                        key={item.id}
                                        onClick={() => onSelectDish(item)}
                                        className="group relative bg-surface/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 cursor-pointer active:scale-95 transition-all shadow-lg hover:shadow-neon-pink/20 h-[110px] md:h-[400px]"
                                    >
                                        <div className="flex md:block w-full h-full">
                                            {/* Mobile: Compact Image Left */}
                                            <div className="w-28 md:w-full h-full md:h-52 flex-shrink-0 relative overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors text-white hidden md:block"></div>
                                            </div>

                                            <div className="p-3 md:p-6 flex flex-col justify-center flex-grow md:justify-start">
                                                <div className="flex justify-between items-start mb-1 md:mb-3">
                                                    <h5 className="text-base md:text-xl font-bold text-white group-hover:text-neon-pink transition-colors line-clamp-2 leading-tight">
                                                        {item.name}
                                                    </h5>
                                                    <span className="text-neon-blue font-display font-bold text-sm md:text-lg ml-2 bg-deep-space/50 px-2 py-1 rounded-md">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
                                                    {getText(item.description)}
                                                </p>
                                            </div>

                                            <div className="md:hidden pr-3 flex items-center text-white/10 group-hover:text-neon-pink/50 transition-colors">
                                                <ChevronRight size={18} />
                                            </div>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default MenuGrid;
