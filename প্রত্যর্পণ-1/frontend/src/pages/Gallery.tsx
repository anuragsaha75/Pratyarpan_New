import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('/api/gallery');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="gallery">
            <h1 className="text-center text-2xl font-bold mb-4">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image) => (
                    <div key={image._id} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={image.url} alt={image.description} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="font-semibold">{image.title}</h2>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;