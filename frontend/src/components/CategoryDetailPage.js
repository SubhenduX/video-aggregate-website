import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryDetailPage = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(`/api/videos?category_id=${id}`).then(response => {
            setVideos(response.data);
        });
    }, [id]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {videos.map(video => (
                    <div key={video._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <iframe
                            src={video.iframe_link}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-48"
                        ></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{video.title}</h3>
                            <p className="text-gray-600">{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetailPage;
