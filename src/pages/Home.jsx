import React from 'react';
import Typed from 'react-typed';

export default function Home() {
  return (
    <section className="home">
      <div className="home-intro">
        <img src="/Sydney-Headshot.jpg" alt="Sydney Mitchell" className="profile-image" />

        <h1>
          Hi, I'm{' '}
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
        </h1>
        <p className="tagline">
          Based in OKC • Lover of clean code, coffee, and camera rolls.
        </p>

        <p>
          A software developer passionate about building clean, functional, and accessible web applications.
        </p>

        <div className="cta-buttons">
          <a href="/projects" className="btn outline">View Projects</a>
          <a href="/contact" className="btn outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
