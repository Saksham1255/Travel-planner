import React from 'react';
import './Homepage.css';

const Home = () => {
  return (
    <div className="app-container">
   
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Travel Planner</h1>
          <nav>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <h2 className="section-title">Explore Your Next Adventure</h2>
        <div className="cards-container">
        
          <div className="card card-blue">
            <h3 className="card-title">Paris, France</h3>
            <p className="card-description">Discover the City of Light with its iconic Eiffel Tower, charming cafes, and world-class museums like the Louvre.</p>
            <button className="card-button">Plan Now</button>
          </div>
         
          <div className="card card-pink">
            <h3 className="card-title">Tokyo, Japan</h3>
            <p className="card-description">Experience the blend of tradition and modernity, from serene temples to bustling Shibuya crossing.</p>
            <button className="card-button">Plan Now</button>
          </div>
          <div className="card card-green">
            <h3 className="card-title">New York, USA</h3>
            <p className="card-description">Explore the vibrant energy of the Big Apple with Times Square, Central Park, and Broadway shows.</p>
            <button className="card-button">Plan Now</button>
          </div>
        </div>

        <section id="about" className="section">
          <h2 className="section-title">About Us</h2>
          <p>We are passionate about helping you plan your dream vacations. Our travel planner offers personalized itineraries, expert tips, and seamless booking experiences to make your journey unforgettable.</p>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact Us</h2>
          <p>Email: support@travelplanner.com</p>
          <p>Phone: +1-800-555-1234</p>
          <p>Follow us on social media for travel inspiration!</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Travel Planner. All rights reserved.</p>
          <p>Follow us: <a href="#" className="footer-link">Facebook</a> | <a href="#" className="footer-link">Instagram</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;