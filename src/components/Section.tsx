import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ''}`}>
      <div className="section__inner">
        {title && (
          <h2 className="section__title">
            <span className="section__bar" />
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
