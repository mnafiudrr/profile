import Section from '../components/Section'
import { about, profile } from '../data/profile'
import './About.css'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="about__avatar"
          width="160"
          height="160"
        />
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}
