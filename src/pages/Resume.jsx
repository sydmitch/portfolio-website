import React from 'react';
// import '../styles/Resume.scss';
import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>

      <p>
        I'm currently seeking full-time opportunities as a software developer where I can contribute clean, scalable code and continue learning alongside a collaborative team. Below, you'll find my resume and a snapshot of the tools and technologies I enjoy working with.
      </p>

      <h3>Technical Skills</h3>
      <ul className="skills">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>SCSS</li>
        <li>JWT & OAuth</li>
        <li>Stripe API</li>
        <li>REST APIs</li>
        <li>Netlify, Render, and Vercel</li>
        <li>Git & GitHub</li>
      </ul>

      <a
        href="/Sydney-Mitchell-Resume.pdf"
        className="resume-download"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload /> Download My Resume (PDF)
      </a>
    </section>
  );
}