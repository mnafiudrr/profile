import StarField from '../components/StarField/StarField'
import { profile } from '../data/profile'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <StarField count={120} />
      <div className="hero__content">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="hero__avatar"
          width="120"
          height="120"
        />
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            View Work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
