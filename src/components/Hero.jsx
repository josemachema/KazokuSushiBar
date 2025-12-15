import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { scrollY } = useScroll();
    const { t } = useLanguage();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 20]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-neon-blue font-display tracking-[0.2em] mb-4 text-sm uppercase">
                        {t.hero.subtitle}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
                        {t.hero.titleStart} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {/*  For En: Experience -> The Taste of -> Kazoku */}
                            {/*  For Es: Vive el Sabor de -> Kazoku */}
                            {/* Simple approach: Just render text from T */}
                            {t.hero.titleEnd}
                        </span> <br />
                        <span className="text-neon-pink italic">KAZOKU</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                        {t.hero.description}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-neon-pink text-white font-bold tracking-widest uppercase text-sm rounded-full hover:shadow-[0_0_20px_rgba(255,0,170,0.5)] transition-shadow"
                    >
                        {t.hero.button}
                    </motion.button>
                </motion.div>

                <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
                    {/* Floating Elements Background Circle */}
                    <div className="absolute inset-0 border border-white/10 rounded-full scale-[0.8] animate-[spin_20s_linear_infinite]" />

                    {/* Main Dish Image Float */}
                    <motion.div
                        style={{ y: y2, rotate }}
                        className="relative z-10"
                    >
                        {/* Placeholder for a nice clipped sushi plate. 
                            Using one of the uploaded images, preferably a plate shot like image 3 or 4 */}
                        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl shadow-neon-blue/20">
                            <img
                                src="/images/hero_sushi_plate_1765831618599.png"
                                alt="Signature Roll"
                                className="w-full h-full object-cover scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Floating fast decorative elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-deep-space/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                        >
                            <span className="text-neon-pink font-bold text-xl">4.9 ★</span>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Rating</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto" />
                <span className="text-[10px] uppercase tracking-widest mt-2 block">Desliza / Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
