import { FaGithub, FaEnvelope, FaExternalLinkAlt, FaPython, FaReact, FaLaravel } from 'react-icons/fa';
import './index.css';

const App = () => {
  return (
    <div className="portfolio-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">Dina<span>.dev</span></a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero container">
        <div className="hero-wrapper">
          <div className="hero-content animate-fade-in">
            <h1>Hi, I'm Dina Abdelbaset</h1>
            <h2>Full Stack Web Developer</h2>
            <p>
              I specialize in building robust and scalable web applications using React, Laravel, and Python. 
              Passionate about crafting dynamic, modern user interfaces and powerful backend systems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="/cv.pdf" download className="btn btn-outline">
                Download CV
              </a>
              <a href="https://github.com/dinaabdelbaset" target="_blank" rel="noreferrer" className="btn btn-outline">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
          <div className="hero-image animate-fade-in delay-200">
            <div className="image-frame">
              <img src="/profile.jpg" alt="Dina Abdelbaset" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-wrapper animate-fade-in delay-100">
          <div className="about-text">
            <h3>I'm Dina Abdelbaset, a passionate Web Developer</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              I am a Full Stack Web Developer with a strong foundation in modern web technologies. My journey in tech started with a deep curiosity for how things work on the web, which evolved into a professional career building high-quality, scalable applications.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              With expertise in <strong>React, TypeScript, Laravel, and Python</strong>, I bridge the gap between frontend aesthetics and backend functionality. I love tackling complex problems, optimizing database architectures, and creating seamless, intuitive user experiences.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Whether I'm working on a dynamic e-commerce platform, a real-time dashboard, or a complex API, my goal is always to write clean, maintainable code and deliver products that make a real impact.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Years<br/>Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Completed<br/>Projects</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-text">Client<br/>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category animate-fade-in delay-100">
            <h3><FaReact /> Frontend Development</h3>
            <div className="skill-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">HTML5 & CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
            </div>
          </div>
          
          <div className="skill-category animate-fade-in delay-200">
            <h3><FaLaravel /> Backend Development</h3>
            <div className="skill-list">
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">RESTful APIs</span>
            </div>
          </div>

          <div className="skill-category animate-fade-in delay-300">
            <h3><FaPython /> Additional Tech</h3>
            <div className="skill-list">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          
          <div className="project-card animate-fade-in delay-100">
            <div className="project-content">
              <h3 className="project-title">Kemet - Tourism Platform</h3>
              <p className="project-desc">A comprehensive tourism management dashboard and frontend for exploring historical sites, complete with bookings, admin dashboard, and modern UI.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card animate-fade-in delay-200">
            <div className="project-content">
              <h3 className="project-title">Car-Zone</h3>
              <p className="project-desc">An online automotive platform featuring vehicle listings, advanced search filters, user authentication, and an administrative dashboard.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Node.js</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card animate-fade-in delay-300">
            <div className="project-content">
              <h3 className="project-title">Restaurant Full Stack</h3>
              <p className="project-desc">A complete restaurant management system with dynamic menus, order processing, and a beautiful responsive user interface.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Full Stack</span>
                <span className="tech-tag">CSS Modules</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card animate-fade-in delay-300">
            <div className="project-content">
              <h3 className="project-title">Korsat - Educational Platform</h3>
              <p className="project-desc">An online learning platform allowing users to browse and enroll in various educational courses.</p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Frontend</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem' }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info animate-fade-in delay-100">
            <h3>Let's talk about your next project</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-item-details">
                <h4>Email</h4>
                <p>dinaabdelbaset08@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div className="contact-item-details">
                <h4>GitHub</h4>
                <p>github.com/dinaabdelbaset</p>
              </div>
            </div>
          </div>

          <form className="contact-form animate-fade-in delay-200" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ border: 'none' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dina Abdelbaset. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
