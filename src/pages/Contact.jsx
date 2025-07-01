import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Let’s build something meaningful together — freelance projects, collaboration, or just tech talk.
      </p>
      <div className="contact-card">
        <a href="mailto:syd.a.mitch@gmail.com" className="contact-link">
          <FaEnvelope /> syd.a.mitch@gmail.com
        </a>
        <a href="https://github.com/sydmitch" target="_blank" className="contact-link">
          <FaGithub /> @sydmitch
        </a>
        <a href="https://linkedin.com/in/syd-mitch" target="_blank" className="contact-link">
          <FaLinkedin /> linkedin.com/in/syd-mitch
        </a>
      </div>
    </section>
  );
}