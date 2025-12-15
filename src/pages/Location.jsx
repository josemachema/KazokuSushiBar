import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, Facebook, Instagram, Navigation, Car, Users, Star, MessageCircle } from 'lucide-react';

const Location = () => {
    const { language } = useLanguage();
    const t = (obj) => obj[language] || obj['es'];

    // WhatsApp Floating Button Component
    const FloatingWhatsApp = () => (
        <a
            href="https://wa.me/526381103806"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform flex items-center justify-center"
        >
            <MessageCircle size={28} fill="white" />
        </a>
    );

    const content = {
        title: { es: 'Visítanos', en: 'Visit Us' },
        intro: {
            es: 'Estamos ubicados en el corazón de Puerto Peñasco, Sonora, un punto ideal para disfrutar de buena comida, fácil acceso y un ambiente cómodo para todos. En Kazoku Sushi Bar te esperamos con puertas abiertas para que vivas una experiencia gastronómica única.',
            en: 'We are located in the heart of Puerto Peñasco, Sonora, an ideal spot to enjoy good food, easy access, and a comfortable atmosphere for everyone. At Kazoku Sushi Bar, we await you with open doors to live a unique gastronomic experience.'
        },
        address: {
            title: { es: 'Dirección', en: 'Address' },
            lines: ['Kazoku Sushi Bar', 'Puerto Peñasco, Sonora, México', 'Adolfo López Mateo y Blvd. Benito Juárez', 'Plaza New Milenio, Planta Alta']
        },
        arrival: {
            title: { es: 'Cómo llegar', en: 'How to Get Here' },
            text: { es: 'Nuestra ubicación es de fácil acceso y cuenta con zonas cercanas para estacionamiento. Estamos a pocos minutos de los principales puntos de la ciudad.', en: 'Our location is easily accessible with nearby parking zones. We are just minutes away from the city\'s main points.' },
            cta: { es: 'Haz clic en el mapa y llega sin complicaciones.', en: 'Click the map and arrive without complications.' }
        },
        hours: {
            title: { es: 'Horarios', en: 'Opening Hours' },
            days: { es: 'Lunes a Domingo', en: 'Monday to Sunday' },
            time: '13:00 - 23:00'
        },
        contact: {
            title: { es: 'Contacto', en: 'Contact' },
            subtitle: { es: 'Teléfono / WhatsApp', en: 'Phone / WhatsApp' }
        },
        extras: {
            parking: {
                title: { es: 'Estacionamiento', en: 'Parking' },
                text: { es: 'Disponible en zonas cercanas para tu comodidad.', en: 'Available in nearby areas for your comfort.' }
            },
            ideal: {
                title: { es: 'Ideal para', en: 'Ideal For' },
                items: [
                    { es: 'Cenas en pareja', en: 'Couples dining' },
                    { es: 'Reuniones con amigos', en: 'Gatherings with friends' },
                    { es: 'Familias', en: 'Families' },
                    { es: 'Visitantes y turistas', en: 'Visitors and tourists' }
                ]
            }
        },
        tip: {
            es: '“Si estás en Peñasco y buscas sushi fresco, este es el lugar.”',
            en: '“If you are in Peñasco and looking for fresh sushi, this is the place.”'
        }
    };

    return (
        <div className="min-h-screen bg-deep-space pt-12 pb-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px]" />
            </div>

            <FloatingWhatsApp />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
                    >
                        <MapPin className="text-neon-pink w-8 h-8 mx-auto" />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        {t(content.title)}
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {t(content.intro)}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Info Column */}
                    <div className="space-y-8">
                        {/* Address Card */}
                        <div className="bg-surface/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-neon-blue/30 transition-colors group">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <Navigation className="mr-3 text-neon-blue" size={24} /> {t(content.address.title)}
                            </h3>
                            <div className="space-y-1 text-gray-300">
                                {content.address.lines.map((line, i) => (
                                    <p key={i} className={i === 0 ? "font-bold text-white text-lg" : ""}>{line}</p>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <h4 className="text-white font-bold mb-2 flex items-center">
                                    <Car className="mr-2 text-neon-pink" size={20} /> {t(content.arrival.title)}
                                </h4>
                                <p className="text-sm text-gray-400 mb-4">{t(content.arrival.text)}</p>
                                <a
                                    href="https://share.google/wXer5W6FXLQh2Hki5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-neon-blue font-bold text-sm tracking-widest hover:text-white transition-colors uppercase"
                                >
                                    {t(content.arrival.cta)} <Navigation size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>

                        {/* Hours & Contact Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Hours */}
                            <div className="bg-surface/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <Clock className="mr-3 text-gold-accent" size={24} /> {t(content.hours.title)}
                                </h3>
                                <p className="text-gray-300 font-bold mb-1">{t(content.hours.days)}</p>
                                <p className="text-neon-blue font-display text-2xl">{content.hours.time}</p>
                            </div>

                            {/* Contact */}
                            <div className="bg-surface/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <Phone className="mr-3 text-green-400" size={24} /> {t(content.contact.title)}
                                </h3>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{t(content.contact.subtitle)}</p>
                                <a href="tel:6381103806" className="text-white font-display text-xl hover:text-neon-pink transition-colors">638 110 3806</a>

                                <div className="flex gap-4 mt-6">
                                    <a href="https://www.facebook.com/KazokuSushiBarpp/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600/20 rounded-lg text-blue-500 hover:bg-blue-600 hover:text-white transition-all">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="https://www.instagram.com/kazokusushibarpp/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-600/20 rounded-lg text-pink-500 hover:bg-pink-600 hover:text-white transition-all">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.264426868686!2d-113.5316364848464!3d31.31969098143896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x813697a5b3b3b3b3%3A0x8b3b3b3b3b3b3b3b!2sPuerto%20Pe%C3%B1asco%2C%20Son.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1655500000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kazoku Map"
                            className="absolute inset-0"
                        ></iframe>
                        {/* Replacing generic iframe with specific one if possible, or keeping styled generic for visual */}
                        {/* Since I can't generate a real iframe for specific address without API key sometimes, I used a generic Peñasco one styled dark.
                             Ideally user clicks the button. */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <a
                                href="https://share.google/wXer5W6FXLQh2Hki5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-neon-pink text-white font-bold tracking-widest uppercase text-sm rounded-xl shadow-lg hover:shadow-neon-pink/50 transition-all flex items-center justify-center"
                            >
                                {t(content.arrival.cta)} <Navigation className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Extras & Tips */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                        <Car className="text-neon-blue w-8 h-8 mb-4" />
                        <h4 className="text-white font-bold mb-2">{t(content.extras.parking.title)}</h4>
                        <p className="text-gray-400">{t(content.extras.parking.text)}</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                        <Users className="text-neon-pink w-8 h-8 mb-4" />
                        <h4 className="text-white font-bold mb-2">{t(content.extras.ideal.title)}</h4>
                        <ul className="text-gray-400 space-y-1">
                            {content.extras.ideal.items.map((item, i) => (
                                <li key={i}>• {t(item)}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1 bg-gradient-to-br from-neon-pink/20 to-deep-space p-8 rounded-2xl border border-neon-pink/30 flex items-center justify-center relative overflow-hidden">
                        <Star className="text-gold-accent w-12 h-12 absolute -top-2 -right-2 opacity-50" fill="currentColor" />
                        <p className="text-white font-display text-lg italic text-center relative z-10">
                            {t(content.tip)}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Location;
