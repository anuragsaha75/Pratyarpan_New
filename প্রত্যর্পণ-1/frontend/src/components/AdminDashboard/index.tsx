import React, { useEffect, useState } from 'react';
import { getMembers, getGalleryItems } from '../../utils/api';

interface Member {
    id: string;
    name: string;
    // Add other fields as needed
}

interface GalleryItem {
    id: string;
    title: string;
    // Add other fields as needed
}

const AdminDashboard = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

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
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Members</h2>
                <ul>
                    {members.map(member => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Gallery Items</h2>
                <ul>
                    {galleryItems.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminDashboard;