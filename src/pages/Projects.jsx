export default function Projects() {
  const projects = [
    {
      title: 'DiscogMVP',
      description: 'A full-stack e-commerce prototype for discovering and collecting music releases. Users can browse a catalog of albums, view detailed release info, and build a personalized wishlist. Built with the PERN stack (PostgreSQL, Express, React, Node.js), the app includes secure user authentication (JWT), admin inventory controls, and a Stripe-integrated checkout experience. Developed collaboratively as a capstone project focused on clean UI and scalable backend architecture.',
      tech: 'React, Node.js, Express, PostgreSQL, JWT Auth',
      link: 'https://github.com/2410-Capstone/DiscogMVP'
    },
    {
      title: 'Puppy Bowl API App',
      description: 'A React app that fetches and displays data from the Puppy Bowl API with search and filtering.',
      tech: 'React, JavaScript, CSS',
      link: 'https://github.com/sydmitch/Unit2.PuppyBowl.Core.Starter'
    },
    {
      title: 'Book Buddy',
      description: 'Library management system with full CRUD, authentication, and PostgreSQL database.',
      tech: 'Node.js, Express, PostgreSQL',
      link: 'https://github.com/sydmitch/Unit2.PuppyBowl.Core.Starter'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}