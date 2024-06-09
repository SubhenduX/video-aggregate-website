import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        axios.get(`/api/videos/${id}`).then(response => {
            setVideo(response.data);
        });
    }, [id]);

    if (!video) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <iframe
                src={video.iframe_link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
            ></iframe>
            <div className="p-4">
                <h3 className="text-2xl font-semibold">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
                <div className="flex items-center mt-4">
                    <button className="mr-4 text-green-500">Like ({video.likes})</button>
                    <button className="text-red-500">Dislike ({video.dislikes})</button>
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
