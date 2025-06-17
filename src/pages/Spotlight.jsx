export default function Spotlight() {
  return (
    <section className="spotlight">
      <h2>Project Spotlight: DiscogMVP</h2>
      <p>
        DiscogMVP is a full-stack e-commerce prototype designed for music collectors to discover and wishlist vinyl releases.
        Users can browse albums, view detailed info, and manage their collection preferences in a personalized interface.
      </p>
      <p>
        Built with the PERN stack (PostgreSQL, Express, React, Node.js), DiscogMVP includes:
      </p>
      <ul>
        <li>Secure JWT authentication</li>
        <li>Admin dashboard with inventory management and user permissions</li>
        <li>Dynamic product catalog with SCSS styling</li>
        <li>Stripe integration for checkout flow</li>
      </ul>
      <h3>Development Process</h3>
      <p>
        Our team used an Agile methodology to manage scope and tasks across a four-week sprint.
        We started with wireframes and ERD planning, followed by setting up our database schema and auth system.
        Each team member was responsible for feature-specific branches, merged via pull requests with code reviews.
      </p>
      <p>
        Collaboration happened daily through GitHub, Jira, and Slack. I personally focused on integrating unit and React testing,
        building reusable React components, and admin permissions.
      </p>
      <h3>Feature Breakdown</h3>
      <ul>
        <li>Wishlist feature to add/remove vinyl releases for logged-in users</li>
        <li>JWT user sessions</li>
        <li>Responsive admin tools for editing and restocking inventory</li>
        <li>Stripe mock integration for cart and checkout behavior</li>
        <li>SCSS-styled UI with dark mode toggle</li>
      </ul>
      <p>
        This collaborative capstone project emphasized clean code practices, responsive UI/UX, and scalable backend architecture.
      </p>
      <a href="https://github.com/2410-Capstone/DiscogMVP" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </section>
  );
}