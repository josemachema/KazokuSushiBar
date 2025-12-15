import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DishDetail = ({ dish, onClose }) => {
    const { t, language } = useLanguage();

    if (!dish) return null;

    const getText = (content) => {
        if (!content) return '';
        if (typeof content === 'string') return content;
        return content[language] || content['en'] || content['es'] || '';
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-4xl bg-midnight border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-neon-blue/10 flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-neon-pink text-white rounded-full transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <motion.img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center space-x-2 text-neon-pink mb-2">
                            <Star size={16} fill="currentColor" />
                            <span className="text-xs font-bold tracking-widest uppercase">
                                {language === 'es' ? 'Platillo Especial' : 'Signature Dish'}
                            </span>
                        </div>

                        <h2 className="text-4xl font-display font-bold text-white mb-2">{dish.name}</h2>
                        <div className="text-2xl text-neon-blue font-display mb-6">${dish.price}</div>

                        <p className="text-gray-300 leading-relaxed mb-8">
                            {getText(dish.description)}
                            <br /><br />
                            {language === 'es'
                                ? 'Experimenta el equilibrio perfecto de sabores y texturas, elaborado con los ingredientes más frescos.'
                                : 'Experience the perfect balance of flavors and textures, crafted with the freshest ingredients.'}
                        </p>

                        <div className="flex items-center space-x-4">
                            <button className="flex-1 bg-white text-midnight font-bold py-4 rounded-xl hover:bg-neon-blue transition-colors flex items-center justify-center space-x-2">
                                <ShoppingBag size={20} />
                                <span>{t.menu.addToOrder}</span>
                            </button>
                            <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white font-display">
                                1
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default DishDetail;
