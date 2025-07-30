import React, { useState } from 'react';
import axios from 'axios';

const Donate = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleDonation = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/donations', { amount, message });
            setMessage(`Thank you for your donation of ${amount} BDT!`);
        } catch (error) {
            setMessage('There was an error processing your donation. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="donate-container">
            <h1 className="text-2xl font-bold">Make a Donation</h1>
            <form onSubmit={handleDonation} className="donation-form">
                <div>
                    <label htmlFor="amount" className="block">Donation Amount (BDT):</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="border p-2"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block">Message (optional):</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2" disabled={loading}>
                    {loading ? 'Processing...' : 'Donate'}
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
};

export default Donate;