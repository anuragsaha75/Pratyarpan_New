import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to প্রত্যর্পণ</h1>
                <p>Your support can change lives.</p>
                <Link to="/donate" className="btn">Donate Now</Link>
            </header>
            <section className="about">
                <h2>About Us</h2>
                <p>প্রত্যর্পণ is a charity platform dedicated to distributing clothes and supporting children in need. Join us in making a difference!</p>
            </section>
            <section className="gallery-preview">
                <h2>Gallery Preview</h2>
                <p>Check out the amazing work we are doing!</p>
                <Link to="/gallery" className="btn">View Gallery</Link>
            </section>
        </div>
    );
};

export default Home;