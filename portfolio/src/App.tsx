import bashImage from './assets/bash.png'
import ccnaImage from './assets/ccna_large.jpg'
import confluenceImage from './assets/confluence.jpeg'
import courseraImage from './assets/coursera.png'
import cppImage from './assets/cplusplus.png'
import csharpImage from './assets/csharp.png'
import excelImage from './assets/excel.jpeg'
import fc24Image from './assets/fc24.jpeg'
import fifa22Image from './assets/fifa22.jpeg'
import fifa23Image from './assets/fifa23.jpeg'
import gitImage from './assets/git.png'
import githubImage from './assets/github.png'
import javaImage from './assets/java.png'
import javascriptImage from './assets/javascript.png'
import jenkinsImage from './assets/jenkins.png'
import p4Image from './assets/p4.jpeg'
import playstationImage from './assets/playstation.png'
import postmanImage from './assets/postman.png'
import powershellImage from './assets/powershell.jpeg'
import pythonImage from './assets/python.jpeg'
import switchImage from './assets/switch.png'
import testrailImage from './assets/testrail.png'
import universityImage from './assets/uni_logo.png'
import xboxImage from './assets/xbox.png'
import './App.css'

const education = [
  {
    title: 'University of Waterloo',
    detail: 'Bachelor of Mathematics in Honours Computer Science',
    image: universityImage,
    alt: 'University logo',
  },
  {
    title: 'CCNA',
    detail: 'Cisco Certified Network Associate',
    image: ccnaImage,
    alt: 'CCNA logo',
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    detail: 'Coursera',
    image: courseraImage,
    alt: 'Coursera logo',
  },
]

const skills = [
  { name: 'Bash', image: bashImage },
  { name: 'Confluence', image: confluenceImage },
  { name: 'C++', image: cppImage },
  { name: 'C#', image: csharpImage },
  { name: 'Excel', image: excelImage },
  { name: 'Git', image: gitImage },
  { name: 'GitHub', image: githubImage },
  { name: 'Java', image: javaImage },
  { name: 'JavaScript', image: javascriptImage },
  { name: 'Jenkins', image: jenkinsImage },
  { name: 'Perforce', image: p4Image },
  { name: 'PlayStation', image: playstationImage },
  { name: 'Postman', image: postmanImage },
  { name: 'PowerShell', image: powershellImage },
  { name: 'Python', image: pythonImage },
  { name: 'Nintendo Switch', image: switchImage },
  { name: 'TestRail', image: testrailImage },
  { name: 'Xbox', image: xboxImage },
]

const projects = [
  {
    title: 'EA SPORTS FC 24',
    image: fc24Image,
    alt: 'EA SPORTS FC 24 project artwork',
  },
  {
    title: 'FIFA 23',
    image: fifa23Image,
    alt: 'FIFA 23 project artwork',
  },
  {
    title: 'FIFA 22',
    image: fifa22Image,
    alt: 'FIFA 22 project artwork',
  },
]

function App() {
  return (
    <main className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Ganesh Thiagarajan, home">
          GT
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro" id="home">
        <p className="eyebrow">GAME QUALITY ASSURANCE</p>
        <h1>Ganesh<br />Thiagarajan</h1>
        <p className="intro-copy">
          QA tester with 2 years of experience working in AAA video games.
          I focus on helping teams deliver polished, reliable player
          experiences.
        </p>
        <a className="text-link" href="#projects">
          Explore my projects <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="content-section" id="projects">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <img
                className="project-image"
                src={project.image}
                alt={project.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="project-copy">
                <p className="project-number">0{index + 1} / Development Support</p>
                <h3>{project.title}</h3>
                <p>

                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curious by nature.<br />Careful by trade.</h2>
        <p>
          I enjoy exploring how games play, finding issues that affect the
          player experience, and communicating clear, actionable bug reports.
        </p>
      </section>

      <section className="content-section" id="education">
        <p className="eyebrow">EDUCATION &amp; CERTIFICATIONS</p>
        <h2>What I&apos;ve learned</h2>
        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.title}>
              <div className="education-logo-wrap">
                <img
                  className="education-logo"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="skills">
        <p className="eyebrow">TOOLS &amp; PLATFORMS</p>
        <h2>Skills</h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li className="skill-item" key={skill.name}>
              <img src={skill.image} alt="" loading="lazy" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section contact-section" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Let&apos;s make great games.</h2>
        <p className="contact-copy">Connect with me on GitHub and LinkedIn.</p>
        <div className="social-links">
          <a
            className="social-link"
            href="https://github.com/gthiagar"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.306.763-1.607-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.175.77.84 1.236 1.91 1.236 3.22 0 4.61-2.806 5.625-5.48 5.92.43.372.814 1.102.814 2.222 0 1.605-.014 2.898-.014 3.293 0 .322.216.696.825.576A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
              />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/ganesh-thiagar"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
              />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Ganesh Thiagarajan</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App
