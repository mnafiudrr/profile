import Section from '../components/Section'
import { profile, socials } from '../data/profile'
import './Contact.css'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p className="contact__lead">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
        </a>
        <ul className="contact__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </Section>
  )
}
