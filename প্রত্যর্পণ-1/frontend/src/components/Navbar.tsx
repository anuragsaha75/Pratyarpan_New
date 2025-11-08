import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        // Only scroll if we're on the home page
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <img src="/assets/logo.jpg" alt="Pratyarpan Logo" height={45} className="rounded shadow-sm" />
                    <span className="fw-bold text-uppercase">Pratyarpan</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                               href="#" 
                               role="button" 
                               data-bs-toggle="dropdown" 
                               aria-expanded="false">
                                Events
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" 
                                       href="#upcoming-events" 
                                       onClick={(e) => scrollToSection(e, 'upcoming-events')}>
                                        Upcoming Events
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" 
                                       href="#past-events" 
                                       onClick={(e) => scrollToSection(e, 'past-events')}>
                                        Past Events
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/donate' ? 'active' : ''}`} to="/donate">
                                Donate
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="#about" 
                               onClick={(e) => scrollToSection(e, 'about')}>
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery">
                                View Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="#get-involved" 
                               onClick={(e) => scrollToSection(e, 'get-involved')}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;