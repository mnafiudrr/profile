import Section from '../components/Section'
import { experience } from '../data/profile'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3 className="timeline__role">
                  {item.role} <span className="timeline__at">@ {item.company}</span>
                </h3>
                <span className="timeline__period">{item.period}</span>
              </div>
              <p className="timeline__desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
