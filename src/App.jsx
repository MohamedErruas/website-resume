import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  ShieldCheck,
  Code2,
  Network,
  Database,
  Terminal,
  BriefcaseBusiness,
  GraduationCap,
  ExternalLink,
  X,
} from "lucide-react";
import { useState } from "react";

// Keep project details here so they are easy to update without changing the layout.
const projects = [
  {
    number: "01",
    type: "Python · Networking",
    title: "Terminal-Based Network Chat",
    description:
      "A command-line application designed to let two computers exchange messages over a network, exploring client-server communication and socket programming.",
    tags: ["Python", "Sockets", "TCP/IP"],
    icon: Network,
    github: "https://github.com/MohamedErruas",
    status: "Personal project",
  },
  {
    number: "02",
    type: "Web Development · Database",
    title: "Attendance Management System",
    description:
      "A web application concept for managing attendance with separate student and teacher workflows and a relational database.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    icon: Database,
    github: "https://github.com/YOUR_USERNAME/YOUR_ATTENDANCE_PROJECT",
    status: "Academic project",
  },
  {
    number: "03",
    type: "C++ · Cryptography",
    title: "Classical Cipher Application",
    description:
      "A C++ project implementing Rail Fence and polyalphabetic cipher techniques to explore text transformation and foundational cryptography concepts.",
    tags: ["C++", "Algorithms", "Cryptography"],
    icon: ShieldCheck,
    github: "https://github.com/YOUR_USERNAME/YOUR_CIPHER_PROJECT",
    status: "Academic project",
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C++", "JavaScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    title: "Networking & Systems",
    icon: Network,
    skills: ["TCP/IP", "DNS", "DHCP", "NAT", "Routing & Switching", "Linux", "Windows"],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: ["Git", "GitHub", "Wireshark", "Cisco Packet Tracer", "Splunk", "MySQL"],
  },
];

const experienceHighlights = [
  "Troubleshoot fiber connectivity and network service incidents in a high-volume support environment.",
  "Investigate routing, addressing, DNS, and customer-premises equipment configuration issues.",
  "Document findings clearly and coordinate escalations to support service restoration.",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Mohamed Erruas home">
          <span className="brand-mark">ME</span>
          <span>Mohamed Erruas<span className="brand-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} aria-label="Main navigation">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" />
          Computer Science Graduate · Technical Professional
        </div>
        <p className="hero-kicker">Hello, I'm Mohamed.</p>
        <h1>
          I build, troubleshoot, and understand <span>technology.</span>
        </h1>
        <p className="hero-description">
          Computer Science graduate with hands-on experience in technical support,
          networking, and software projects. I enjoy solving practical problems
          and building a stronger foundation in software engineering and cloud technologies.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowDown size={16} />
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/MohamedErruas" target="_blank" rel="noreferrer">
          <ExternalLink size={17} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mohamed-e-8b610b12a/" target="_blank" rel="noreferrer">
          <ExternalLink size={17} /> LinkedIn
          </a>
          <span className="hero-divider" />
          <span className="hero-location">Nashville, Tennessee</span>
        </div>
      </div>

      <aside className="hero-card" aria-label="Professional summary">
        <div className="hero-card-top">
          <span className="terminal-dot terminal-red" />
          <span className="terminal-dot terminal-yellow" />
          <span className="terminal-dot terminal-green" />
          <span className="terminal-label">profile.txt</span>
        </div>
        <div className="hero-card-body">
          <p className="code-muted">{"// A little about my approach"}</p>
          <p><span className="code-key">const</span> <span className="code-name">focus</span> = [</p>
          <p className="code-indent"><span className="code-string">"Software development"</span>,</p>
          <p className="code-indent"><span className="code-string">"Networks & systems"</span>,</p>
          <p className="code-indent"><span className="code-string">"Continuous learning"</span></p>
          <p>];</p>
          <div className="code-divider" />
          <div className="profile-fact"><span>Degree</span><strong>B.S. Computer Science</strong></div>
          <div className="profile-fact"><span>Certification</span><strong>CompTIA Security+</strong></div>
          <div className="profile-fact"><span>Experience</span><strong>Technical Support</strong></div>
        </div>
      </aside>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  );
}

function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Projects that put ideas into practice."
        description="A selection of academic and personal work. Open the repositories for source code and implementation details."
      />
      <div className="project-grid">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <div className="project-icon"><Icon size={21} /></div>
                <span className="project-number">{project.number}</span>
              </div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              <div className="project-card-bottom">
                <span className="project-status">{project.status}</span>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  Repository <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="edit-note">
        Before publishing: replace the sample GitHub links, verify each description, and remove any project that is not ready to show.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionHeading
        eyebrow="TECHNICAL TOOLKIT"
        title="Tools I work with."
        description="A practical overview of languages, systems, and tools I have studied or used. I keep this list focused on technologies I can discuss honestly."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-heading">
                <span className="skill-icon"><Icon size={19} /></span>
                <h3>{group.title}</h3>
              </div>
              <div className="tag-list skill-tags">
                {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </article>
          );
        })}
      </div>
      <div className="learning-strip">
        <div className="learning-icon"><Code2 size={20} /></div>
        <div>
          <h3>Currently building</h3>
          <p>Strengthening Java, Spring Boot, REST APIs, database design, and cloud fundamentals through hands-on projects.</p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-wrap section-block" id="experience">
      <SectionHeading eyebrow="EXPERIENCE" title="Professional experience." />
      <article className="timeline-card">
        <div className="timeline-marker"><BriefcaseBusiness size={19} /></div>
        <div className="timeline-main">
          <div className="timeline-title-row">
            <div>
              <h3>Fiber Technical Support Analyst</h3>
              <p className="timeline-company">T-Mobile</p>
            </div>
            <span className="timeline-date">Aug 2023 – Present</span>
          </div>
          <p className="timeline-summary">
            Support fiber connectivity and investigate technical issues across customer network environments.
          </p>
          <ul className="experience-list">
            {experienceHighlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="tag-list">
            {["Troubleshooting", "TCP/IP", "DNS / DHCP", "Documentation", "Escalation"].map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function Education() {
  return (
    <section className="section-wrap section-block" id="education">
      <SectionHeading eyebrow="EDUCATION & CERTIFICATION" title="Foundations and credentials." />
      <div className="credentials-grid">
        <article className="credential-card">
          <div className="credential-icon"><GraduationCap size={22} /></div>
          <div>
            <p className="credential-label">EDUCATION</p>
            <h3>Bachelor of Science, Computer Science</h3>
            <p className="credential-place">Middle Tennessee State University</p>
            <p className="credential-date">Graduated May 2026</p>
          </div>
        </article>
        <article className="credential-card">
          <div className="credential-icon"><ShieldCheck size={22} /></div>
          <div>
            <p className="credential-label">CERTIFICATION</p>
            <h3>CompTIA Security+</h3>
            <p className="credential-place">CompTIA</p>
            <p className="credential-date">Earned June 2026</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's talk about what you're building.</h2>
          <p className="contact-description">
            I'm interested in opportunities where I can solve technical problems, contribute to a team, and keep growing as an engineer.
          </p>
        </div>
        <a className="button button-primary contact-button" href="mailto:YOUR_EMAIL@example.com">
          <Mail size={17} /> Email me <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">ME</span>
          <span>Mohamed Erruas<span className="brand-period">.</span></span>
        </a>
        <p>Designed and built with React.</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}