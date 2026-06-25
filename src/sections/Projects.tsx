import Section from '../components/Section'
import { projects } from '../data/profile'
import './Projects.css'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <ul className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project-card__links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live →
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
