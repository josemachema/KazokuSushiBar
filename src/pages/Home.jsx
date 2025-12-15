import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import MenuGrid from '../components/MenuGrid';
import DishDetail from '../components/DishDetail';
import { menuData } from '../data/menu';

const Home = () => {
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <>
            <Hero />
            <MenuGrid
                categories={menuData.categories}
                onSelectDish={setSelectedDish}
            />
            <AnimatePresence>
                {selectedDish && (
                    <DishDetail
                        dish={selectedDish}
                        onClose={() => setSelectedDish(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Home;
