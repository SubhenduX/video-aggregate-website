import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarPage = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        axios.get('/api/stars').then(response => {
            setStars(response.data);
        });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stars.map(star => (
                    <div key={star._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={star.thumbnail} alt={star.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{star.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StarPage;
