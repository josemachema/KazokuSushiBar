import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    es: {
        nav: {
            menu: 'Menú',
            about: 'Nosotros',
            location: 'Ubicación'
        },
        hero: {
            subtitle: 'Cena Cero Gravedad',
            titleStart: 'Vive el Sabor de',
            titleEnd: 'Experience the Taste of', // Keeping this artistic mix or translated? Let's translate fully as requested.
            titleEndTrans: 'KAZOKU',
            description: 'Tradición japonesa y arte culinario moderno en una atmósfera que desafía las expectativas.',
            button: 'Ver Menú',
            scroll: 'Desliza',
            rating: 'Calificación'
        },
        menu: {
            selection: 'Nuestra Selección',
            title: 'Menú Cósmico',
            price: 'Precio',
            addToOrder: 'Ordenar',
            close: 'Cerrar'
        },
        footer: {
            text: 'Experiencia Antigravedad.'
        }
    },
    en: {
        nav: {
            menu: 'Menu',
            about: 'About',
            location: 'Location'
        },
        hero: {
            subtitle: 'Zero Gravity Dining',
            titleStart: 'Experience',
            titleEndTrans: 'The Taste of',
            description: 'Japanese tradition meets modern culinary art in an atmosphere that defies expectations.',
            button: 'View Menu',
            scroll: 'Scroll',
            rating: 'Rating'
        },
        menu: {
            selection: 'Our Selection',
            title: 'Cosmic Menu',
            price: 'Price',
            addToOrder: 'Add to Order',
            close: 'Close'
        },
        footer: {
            text: 'Antigravity Experience.'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es'); // Default to Spanish

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
