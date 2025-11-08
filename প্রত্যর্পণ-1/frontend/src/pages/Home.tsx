import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    const history = useHistory();
    const [activeSection, setActiveSection] = useState('home');
    const donationAmountRef = useRef<HTMLInputElement | null>(null);
    const contactFormRef = useRef<HTMLFormElement | null>(null);
    const formFeedbackRef = useRef<HTMLDivElement | null>(null);

    const handleNavigation = (e: React.MouseEvent, path: string) => {
        e.preventDefault();
        history.push(path);
    };

    const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70; // Account for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };

    useEffect(() => {
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    }, []);

    const openRazorpay = () => {
        const amount = Number(donationAmountRef.current?.value) || 500;
        const options: any = {
            key: 'rzp_test_1234567890abcdef',
            amount: amount * 100,
            currency: 'INR',
            name: 'Pratyarpan',
            description: 'Donation towards charitable cause',
            handler: function (response: any) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: { name: '', email: '' },
            theme: { color: '#f97316' }
        };
        const R = (window as any).Razorpay;
        if (!R) {
            alert('Razorpay SDK not loaded');
            return;
        }
        const rzp = new R(options);
        rzp.open();
    };

    const submitContact = (e: React.FormEvent) => {
        e.preventDefault();
        if (formFeedbackRef.current) formFeedbackRef.current.textContent = "Thank you! We'll be in touch soon.";
        (contactFormRef.current as HTMLFormElement).reset();
    };

    return (
        <div>

            <section id="home" className="hero vh-100 d-flex align-items-center text-white text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">Empowering Change, One Donation at a Time.</h1>
                    <p className="lead mt-3">Pratyarpan connects donors and charities with transparency, events, and real community impact.</p>
                    <div className="mt-4">
                        <button className="btn btn-warning btn-lg me-2" id="donate-btn-hero" onClick={openRazorpay}>Donate Now</button>
                        <a className="btn btn-outline-light btn-lg" href="#get-involved">Get Involved</a>
                    </div>
                </div>
            </section>

            <section id="upcoming-events" className="py-5">
                <div className="container">
                    <h2 className="mb-4">Upcoming Events</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Food Donation Drive" />
                                <div className="card-body">
                                    <h5 className="card-title">Food Donation Drive</h5>
                                    <p className="card-text">📅 Nov 15, 2025 • 📍 Malda<br />Help feed 1000 underprivileged families with our community kitchen initiative.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <img src="https://images.unsplash.com/photo-1593113598332-cd6f3e85e8c9?auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Winter Clothing Drive" />
                                <div className="card-body">
                                    <h5 className="card-title">Winter Clothing Drive</h5>
                                    <p className="card-text">📅 Dec 1, 2025 • 📍 Malda <br />Join us in distributing warm clothes to those in need this winter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="past-events" className="py-5 bg-light">
                <div className="container">
                    <h2 className="mb-4">Past Events</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Health Camp 2025" />
                                <div className="card-body">
                                    <h5 className="card-title">Health Camp 2025</h5>
                                    <p className="card-text">Provided free medical checkups to 300+ people in rural areas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <img src="https://images.unsplash.com/photo-1593113606392-19b7d79d3c87?auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="Tree Plantation Drive" />
                                <div className="card-body">
                                    <h5 className="card-title">Tree Plantation Drive</h5>
                                    <p className="card-text">Planted over 2,000 trees with the help of our amazing volunteers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="donate" className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-3">Donate to Make an Impact</h2>
                    <p className="mb-4">Your contribution helps fund healthcare, education, and community empowerment projects.</p>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <input type="number" id="donation-amount" ref={donationAmountRef} className="form-control form-control-lg mb-3 w-50 mx-auto" placeholder="Enter amount (₹)" />
                        <button className="btn btn-warning btn-lg" id="razorpay-btn" onClick={openRazorpay}>Donate via Razorpay</button>
                    </div>
                </div>
            </section>

            <section id="gallery" className="py-5 bg-light">
                <div className="container">
                    <h2 className="mb-4">Gallery</h2>
                    <div className="row g-4">
                        <div className="col-sm-6 col-lg-4">
                            <div className="card overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="caption mb-0">Children receiving books at our education drive 📚</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="caption mb-0">Volunteers distributing food packets 🍱</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="card overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1515162305285-68a8e2fbfcd3?auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <p className="caption mb-0">Tree plantation initiative 🌳</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="mb-3">About Us</h2>
                    <p>Pratyarpan is a charitable initiative and community platform dedicated to spreading kindness, hope, and opportunity. Our name, Pratyarpan, means “to give back” — and that’s the heart of everything we do.</p>
                </div>
            </section>

            <section id="get-involved" className="py-5 bg-light">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h2 className="mb-3">Get Involved</h2>
                            <form id="contactForm" ref={contactFormRef} onSubmit={submitContact}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" required placeholder="Your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" required placeholder="you@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message (How you'd like to help)</label>
                                    <textarea name="message" id="message" className="form-control" rows={4} required placeholder="I can help with..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <div className="form-feedback mt-3" id="formFeedback" ref={formFeedbackRef}></div>
                        </div>
                        <div className="col-md-6">
                            <h3>Contact Us</h3>
                            <p>Email: <a href="mailto:info@pratyarpan.org">info@pratyarpan.org</a></p>
                            <p>Phone: <a href="tel:+911234567890">+91 12 3456 7890</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="site-footer bg-dark text-white py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <p className="mb-0">© <span id="year"></span> Pratyarpan — Empowering Kindness</p>
                    <nav>
                        <a className="text-white me-3" href="#">Privacy</a>
                        <a className="text-white" href="#">Terms</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Home;