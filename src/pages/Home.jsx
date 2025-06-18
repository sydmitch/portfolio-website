import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home">
      <div className="home-intro">
        <img src="/Sydney-Headshot.jpg" alt="Sydney Mitchell" className="profile-image" />

        <h1 className='brand'>
          Hi, I'm{' '}
          <span className="typed-gradient">
            <Typed
              strings={[
                'Sydney Mitchell',
                'a Full-Stack Developer',
                'a Creative Technologist'
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </span>
        </h1>
        <p className="tagline">
          Based in OKC • Lover of clean code, coffee, and camera rolls.
        </p>

        <p>
          A software developer passionate about building clean, functional, and accessible web applications.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn outline">View Projects</Link>
          <Link to="/contact" className="btn outline">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
