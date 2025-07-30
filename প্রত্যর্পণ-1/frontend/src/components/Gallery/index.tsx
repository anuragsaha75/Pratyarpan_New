import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GalleryImage {
    _id: string;
    url: string;
    description?: string;
}

const Gallery = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);

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
            <h2>Gallery</h2>
            <div className="gallery-grid">
                {images.map((image) => (
                    <div key={image._id} className="gallery-item">
                        <img src={image.url} alt={image.description || 'Gallery Image'} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;