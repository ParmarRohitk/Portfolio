import React from 'react';
import { motion } from 'framer-motion';

const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PRKDesigns: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Responsive Grid with Download Button</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid items */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={gridItemVariants}
                            className="bg-white p-4 shadow-md rounded-md"
                        >
                            <h2 className="text-lg font-semibold mb-2">Item {index + 1}</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Download
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PRKDesigns;
