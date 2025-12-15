import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { menuData } from '../data/menu';
import { MapPin, Heart, Star, Users, Utensils, Award } from 'lucide-react';
import TiltCard from './TiltCard';

const About = () => {
    const { language } = useLanguage();

    // Helper to get text
    const t = (obj) => obj[language] || obj['es'];

    // Content Data
    const content = {
        story: {
            title: { es: 'Nuestra Historia', en: 'Our Story' },
            text: {
                es: "Kazoku Sushi Bar nace con una idea clara: traer a Puerto Peñasco una experiencia de sushi auténtica, fresca y bien hecha, sin perder el toque local que nos define. Creemos que el sushi no es solo comida, es un momento para compartir, disfrutar y sentirse en casa. “Kazoku” significa familia en japonés, y eso es exactamente lo que somos: un lugar donde amigos, parejas y familias se reúnen alrededor de buena comida.",
                en: "Kazoku Sushi Bar was born with a clear idea: to bring an authentic, fresh, and well-made sushi experience to Puerto Peñasco, without losing the local touch that defines us. We believe sushi is not just food, it's a moment to share, enjoy, and feel at home. 'Kazoku' means family in Japanese, and that is exactly what we are: a place where friends, couples, and families gather around good food."
            }
        },
        philosophy: {
            title: { es: 'Nuestra Filosofía', en: 'Our Philosophy' },
            items: [
                {
                    icon: <Utensils className="w-8 h-8 text-neon-pink" />,
                    text: { es: 'Ingredientes frescos y de calidad, seleccionados cuidadosamente cada día', en: 'Fresh and quality ingredients, carefully selected every day' }
                },
                {
                    icon: <Award className="w-8 h-8 text-neon-blue" />,
                    text: { es: 'Respeto por la tradición japonesa, combinada con sabores que conectan con el gusto local', en: 'Respect for Japanese tradition, combined with flavors that connect with local taste' }
                },
                {
                    icon: <Heart className="w-8 h-8 text-gold-accent" />,
                    text: { es: 'Servicio cercano, porque aquí no eres un cliente más, eres parte de la familia', en: 'Friendly service, because here you are not just a customer, you are part of the family' }
                }
            ]
        },
        different: {
            title: { es: 'Lo que nos hace diferentes', en: 'What Makes Us Different' },
            subtitle: { es: 'No solo servimos sushi, creamos experiencias.', en: 'We don\'t just serve sushi, we create experiences.' },
            items: [
                { es: 'Menú amplio que va desde lo tradicional hasta rolls especiales', en: 'Extensive menu ranging from traditional to special rolls' },
                { es: 'Opciones para todos: amantes del sushi clásico, empanizados o platillos calientes', en: 'Options for everyone: classic sushi lovers, breaded rolls, or hot dishes' },
                { es: 'Ambiente cómodo, moderno y relajado', en: 'Comfortable, modern, and relaxed atmosphere' },
                { es: 'Atención cálida, rápida y auténtica', en: 'Warm, fast, and authentic service' }
            ]
        },
        kitchen: {
            title: { es: 'Nuestra Cocina', en: 'Our Kitchen' },
            text: {
                es: 'Nuestra cocina combina técnicas japonesas con un enfoque creativo y moderno. Desde el sashimi más puro hasta nuestros rolls especiales, cada platillo se prepara al momento, cuidando textura, temperatura y sabor. La frescura es nuestra regla principal.',
                en: 'Our kitchen combines Japanese techniques with a creative and modern approach. From the purest sashimi to our special rolls, every dish is prepared in the moment, caring for texture, temperature, and flavor. Freshness is our main rule.'
            }
        },
        commitment: {
            title: { es: 'Compromiso con Peñasco', en: 'Commitment to Peñasco' },
            text: {
                es: 'Kazoku Sushi Bar es parte de Puerto Peñasco. Apostamos por la comunidad, por el crecimiento local y por ofrecer un lugar que represente con orgullo lo mejor de la ciudad. No solo servimos comida, servimos momentos.',
                en: 'Kazoku Sushi Bar is part of Puerto Peñasco. We bet on the community, on local growth, and on offering a place that proudly represents the best of the city. We don\'t just serve food, we serve moments.'
            }
        },
        motto: { es: 'Kazoku Sushi Bar\nLo mejor de Peñasco.', en: 'Kazoku Sushi Bar\nThe Best of Peñasco.' },
        gallery: [
            // Using placeholders or existing images for now
            '/images/hero_sushi_plate_1765831618599.png',
            '/images/delicious_sushi_roll_1765831631725.png',
            '/images/fresh_sashimi_platter_1765831646648.png',
            '/images/appetizer_gyoza_edamame_1765831661085.png'
        ],
        testimonial: {
            text: { es: '“El mejor sushi de Peñasco, siempre fresco y con un servicio increíble.”', en: '“The best sushi in Peñasco, always fresh and with incredible service.”' }
        },
        cta: {
            title: { es: 'Ven y forma parte de la familia Kazoku.', en: 'Come and be part of the Kazoku family.' },
            buttons: [
                { text: { es: 'Ver menú', en: 'View Menu' }, link: '/', primary: true },
                { text: { es: 'Visítanos', en: 'Visit Us' }, link: '/location', primary: false }
            ]
        }
    };

    // Recommended dishes IDs
    const recommendedIds = ['sr1', 'br1', 'sr7', 'dp1']; // Kazoku, Guamuchilito, Shrimp Killer, Grilled Salmon
    const recommendedDishes = [];

    // Flatten menu items to find recommendations
    const allItems = menuData.categories.flatMap(c => c.items);
    recommendedIds.forEach(id => {
        const item = allItems.find(i => i.id === id);
        if (item) recommendedDishes.push(item);
    });


    return (
        <section id="about" className="relative py-20 bg-deep-space overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neon-blue/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-pink/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header / Story */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-neon-pink text-sm tracking-[0.3em] uppercase font-bold mb-4 block animate-pulse">
                        {t({ es: 'Sobre Nosotros', en: 'About Us' })}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                        {t(content.story.title)}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {t(content.story.text)}
                    </p>
                </div>

                {/* Philosophy Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {content.philosophy.items.map((item, idx) => (
                        <div key={idx} className="bg-surface/30 backdrop-blur-sm border border-white/5 p-8 rounded-2xl text-center hover:bg-surface/50 transition-colors group">
                            <div className="mb-6 inline-flex p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <p className="text-gray-300 font-medium leading-relaxed">
                                {t(item.text)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Different + Kitchen Split */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-2">{t(content.different.title)}</h3>
                        <p className="text-neon-blue mb-8 italic text-lg">{t(content.different.subtitle)}</p>
                        <ul className="space-y-4">
                            {content.different.items.map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                    <Star className="w-5 h-5 text-neon-pink mr-3 mt-1 flex-shrink-0" fill="currentColor" />
                                    <span>{t(item)}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 p-6 bg-surface/30 rounded-xl border-l-4 border-neon-blue">
                            <h4 className="text-xl font-bold text-white mb-4">{t(content.kitchen.title)}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {t(content.kitchen.text)}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img src={content.gallery[0]} className="rounded-2xl w-full h-64 object-cover transform translate-y-8" alt="Gallery 1" />
                            <img src={content.gallery[1]} className="rounded-2xl w-full h-64 object-cover" alt="Gallery 2" />
                            <img src={content.gallery[2]} className="rounded-2xl w-full h-64 object-cover" alt="Gallery 3" />
                            <img src={content.gallery[3]} className="rounded-2xl w-full h-64 object-cover transform translate-y-8" alt="Gallery 4" />
                        </div>
                        {/* Center Badge */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-full border border-white/20 text-center shadow-2xl">
                            <div className="whitespace-pre-line font-display font-bold text-white">
                                {t(content.motto)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommended Dishes */}
                <div className="mb-24">
                    <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">{t({ es: 'Recomendados de la Casa', en: 'House Recommendations' })}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {recommendedDishes.map((dish) => (
                            <TiltCard key={dish.id} className="bg-surface/40 rounded-xl p-4 cursor-pointer hover:bg-surface/60 transition-colors group">
                                <div className="aspect-square rounded-lg overflow-hidden mb-3 relative">
                                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h4 className="text-white font-bold text-sm truncate">{dish.name}</h4>
                                <span className="text-neon-blue text-xs font-bold">${dish.price}</span>
                            </TiltCard>
                        ))}
                    </div>
                </div>

                {/* Commitment & Testimonial */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h3 className="text-3xl font-display font-bold text-white mb-6">{t(content.commitment.title)}</h3>
                    <p className="text-gray-300 mb-12">
                        {t(content.commitment.text)}
                    </p>

                    <div className="relative p-10 bg-white/5 rounded-3xl">
                        <span className="text-6xl text-neon-pink absolute top-4 left-4 font-serif">"</span>
                        <p className="text-xl md:text-2xl text-white font-light italic relative z-10">
                            {t(content.testimonial.text)}
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10">
                        {t(content.cta.title)}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        {content.cta.buttons.map((btn, idx) => (
                            <Link
                                key={idx}
                                to={btn.link}
                                className={`px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm transition-all ${btn.primary
                                    ? 'bg-neon-pink text-white hover:shadow-[0_0_20px_rgba(255,0,170,0.5)] hover:scale-105'
                                    : 'border border-white/20 text-white hover:bg-white/10'
                                    }`}
                            >
                                {t(btn.text)}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
