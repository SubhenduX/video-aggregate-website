import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/categories').then(response => {
            setCategories(response.data);
        });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map(category => (
                    <div key={category._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={category.thumbnail} alt={category.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
