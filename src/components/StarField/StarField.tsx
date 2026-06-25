import { useEffect, useRef } from 'react'
import './StarField.css'

interface StarFieldProps {
  count?: number
}

interface StarStyle {
  top: string
  left: string
  width: string
  height: string
  animationDuration: string
  animationDelay: string
  opacity: number
  ['--dx']?: string
  ['--dy']?: string
}

function buildStarStyle(): StarStyle {
  const size = Math.random() * 2 + 1 // 1px - 3px
  const driftX = (Math.random() - 0.5) * 40
  const driftY = (Math.random() - 0.5) * 40
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${Math.random() * 4 + 2}s`, // 2s - 6s
    animationDelay: `${Math.random() * 5}s`, // 0s - 5s
    opacity: Math.random() * 0.5 + 0.5,
    ['--dx']: `${driftX}px`,
    ['--dy']: `${driftY}px`,
  }
}

export default function StarField({ count = 120 }: StarFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Reduce star count on small screens for performance.
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const total = isMobile ? Math.round(count / 2) : count

    const fragment = document.createDocumentFragment()
    for (let i = 0; i < total; i++) {
      const star = document.createElement('span')
      star.className = 'star'
      Object.assign(star.style, buildStarStyle())
      fragment.appendChild(star)
    }
    container.replaceChildren(fragment)
  }, [count])

  return <div ref={containerRef} className="starfield" aria-hidden="true" />
}
