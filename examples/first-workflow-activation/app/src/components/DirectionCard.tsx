import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Direction } from '../data/directions'
import PreviewPromptFirst from './previews/PreviewPromptFirst'
import PreviewTemplateFirst from './previews/PreviewTemplateFirst'
import PreviewCopilot from './previews/PreviewCopilot'
import styles from './DirectionCard.module.css'

interface DirectionCardProps {
  direction: Direction
}

const previews: Record<string, ReactNode> = {
  '01': <PreviewPromptFirst />,
  '02': <PreviewTemplateFirst />,
  '03': <PreviewCopilot />,
}

export default function DirectionCard({ direction }: DirectionCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>{previews[direction.id]}</div>
      <div className={styles.body}>
        <span className={styles.number}>{direction.number}</span>
        <h2 className={styles.title}>{direction.title}</h2>
        <p className={styles.value}>{direction.valueProposition}</p>
        <ul className={styles.list}>
          {direction.pros.map((item) => (
            <li key={item} className={styles.pro}>
              <span className={styles.iconPro} aria-hidden>+</span>
              {item}
            </li>
          ))}
          {direction.cons.map((item) => (
            <li key={item} className={styles.con}>
              <span className={styles.iconCon} aria-hidden>−</span>
              {item}
            </li>
          ))}
        </ul>
        <Link to={direction.path} className={styles.button}>
          Try This Prototype
        </Link>
      </div>
    </article>
  )
}
