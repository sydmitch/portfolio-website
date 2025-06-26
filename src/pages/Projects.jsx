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
    },
    {
      title: 'Hunter Battery Website',
      description: 'A modernized website for a regional battery distributor built using Wix. I updated product pages, improved mobile responsiveness, and optimized layout and copy for seasonal promotions. The site now supports Google Ads campaigns and includes targeted landing pages for golf cart and automotive batteries.',
      role: 'Web Designer & Site Editor – updated layout, product copy, mobile styling, and promotional content',
      tech: 'Wix, SEO, Google Ads, Copywriting, Responsive Design',
      live: 'https://www.hunterbattery.net/'
    }

  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            {project.image && (
              <img src={project.image} alt={`${project.title} screenshot`} />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.role && <p><strong>Role:</strong> {project.role}</p>}
            <p><strong>Tech:</strong> {project.tech}</p>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}