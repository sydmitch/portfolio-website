import { FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiPostgresql, SiRedux, SiVite, SiJest } from 'react-icons/si';

export default function Tech() {
  return (
    <section className="tech">
      <h2>Tech Stack</h2>
      <p className="tech-intro">
        These are the technologies and tools I’ve worked with and continue to build with:
      </p>

      <div className="tech-grid">
        <div className="tech-card"><FaJs /> JavaScript</div>
        <div className="tech-card"><FaHtml5 /> HTML5</div>
        <div className="tech-card"><FaCss3Alt /> CSS3</div>
        <div className="tech-card"><FaDatabase /> SQL</div>
        <div className="tech-card"><FaReact /> React</div>
        <div className="tech-card"><SiRedux /> Redux</div>
        <div className="tech-card"><FaNodeJs /> Node.js</div>
        <div className="tech-card"><SiPostgresql /> PostgreSQL</div>
        <div className="tech-card"><FaGitAlt /> Git + GitHub</div>
        <div className="tech-card"><SiVite /> Vite</div>
        <div className="tech-card"><SiJest /> Jest</div>
      </div>
    </section>
  );
}
