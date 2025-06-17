import React from 'react';
import { FaPaintBrush, FaCode, FaHeart, FaUsers, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about">
      <h2 className="about-heading">About Me</h2>

      <div className="about-content"></div>
      <p>
        I'm a full-stack web developer with a background in hospitality and administrative operations,
        now building clean and scalable web applications. I enjoy turning complex problems into simple,
        accessible user experiences.
      </p>
      <p>
        My journey into tech began with a curiosity about how websites work, which quickly turned into a passion
        for bringing ideas to life with code. After years of navigating fast-paced roles in hospitality and law,
        I realized I wanted to build systems that empowered people rather than overwhelmed them.
      </p>
      <p>
        I recently earned a Software Engineering Certificate from University of Oklahoma, where I built a capstone
        project with full authentication, PostgreSQL schema design, Stripe integration, and React UI components.
        I'm currently looking for opportunities to join a mission-driven engineering team where I can continue to learn
        and contribute clean, meaningful code.
      </p>
      <p>
        I’m passionate about inclusive tech and creating space for people from marginalized communities to thrive —
        especially queer and BIPOC individuals. Whether it's collaborating on team projects, attending meetups, or learning from
        others, I believe in tech as a tool for connection and social change.
      </p>
      <p>
        Outside of tech, I enjoy cooking, photography, bartending, and traveling. I’m especially fond of early 2000s digital cameras,
        curating playlists, and attending community-centered events. I value collaboration, lifelong learning, and
        inclusive spaces — both online and in real life.
      </p>

      <div className="about-values">
        <h3 className="subheading">What I Value</h3>
        <ul className="values-list">
          <li><FaGlobe className="icon" /> Clear, accessible design</li>
          <li><FaCode className="icon" /> Detail-oriented development</li>
          <li><FaUsers className="icon" /> Collaborative teamwork</li>
          <li><FaPaintBrush className="icon" /> Continuous learning</li>
          <li><FaHeart className="icon" /> Uplifting community spaces for queer and POC individuals</li>
        </ul>
      </div>

      <div className="about-hobbies">
        <h3 className="subheading">A Few Fun Facts</h3>
        <ul className="hobbies-list">
          <li>🎵 I love electronic music and going to concerts</li>
          <li>📷 I'm into photography — film and digital</li>
          <li>📍 I'm based in Oklahoma City</li>
          <li>🐇 I threw a bunny-themed birthday party</li>
        </ul>
      </div>
    </section>
  );
}