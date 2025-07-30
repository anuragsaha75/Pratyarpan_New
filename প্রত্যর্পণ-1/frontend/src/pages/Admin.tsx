import React, { useEffect, useState } from 'react';
import { getMembers, getGalleryItems } from '../utils/api';

const Admin = () => {
    const [members, setMembers] = useState([]);
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const membersData = await getMembers();
            const galleryData = await getGalleryItems();
            setMembers(membersData);
            setGalleryItems(galleryData);
        };
        fetchData();
    }, []);

    return (
        <div className="admin-page">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <section className="members-section">
                <h2 className="text-xl">Members</h2>
                <ul>
                    {members.map(member => (
                        <li key={member.id} className="member-item">
                            {member.name} - {member.email}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="gallery-section">
                <h2 className="text-xl">Gallery Items</h2>
                <ul>
                    {galleryItems.map(item => (
                        <li key={item.id} className="gallery-item">
                            <img src={item.imageUrl} alt={item.description} className="gallery-image" />
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Admin;