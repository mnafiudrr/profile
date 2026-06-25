import Section from '../components/Section'
import { skills } from '../data/profile'
import './Skills.css'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__items">
              {group.items.map((item) => (
                <li key={item} className="skills__chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
