import React, { useState } from 'react';
import { donate } from '../../utils/api';

const Donation = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleDonation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await donate(amount);
            if (response.success) {
                setMessage('Thank you for your donation!');
            } else {
                setMessage('Donation failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="donation-container">
            <h2>Make a Donation</h2>
            <form onSubmit={handleDonation}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter donation amount"
                    required
                />
                <button type="submit">Donate</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Donation;