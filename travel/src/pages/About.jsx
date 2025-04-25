import React from 'react';
import './About.css'; // Optional: agar styling bhi kare

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Travel Planner</h1>
      <p className="about-content">
        Welcome to <strong>Travel Planner</strong> – your personal assistant for unforgettable journeys! 🌍✈️
      </p>
      <p className="about-content">
        Whether you're planning a weekend getaway or a month-long adventure, our app helps you create a detailed itinerary, manage bookings, and discover exciting destinations all in one place.
      </p>
      <p className="about-content">
        Our mission is to simplify your travel planning experience by offering a clean, user-friendly interface and powerful tools like day-wise schedules, packing checklists, and budget tracking.
      </p>
      <p className="about-content">
        With <strong>Travel Planner</strong>, say goodbye to chaotic spreadsheets and hello to stress-free travel. Start planning your next trip today and make every journey count!
      </p>
    </div>
  );
};

export default About;
