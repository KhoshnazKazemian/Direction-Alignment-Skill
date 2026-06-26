import { directions } from '../data/directions'
import DirectionCard from '../components/DirectionCard'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Direction alignment example · Relay</p>
        <h1 className={styles.title}>First workflow activation</h1>
        <p className={styles.problem}>
          New users at Relay struggle to create their first workflow and leave before reaching
          activation. These three directions explore different ways to help them get started —
          each making a distinct product bet about speed, confidence, and control.
        </p>
      </header>

      <section className={styles.grid} aria-label="Solution directions">
        {directions.map((direction) => (
          <DirectionCard key={direction.id} direction={direction} />
        ))}
      </section>

      <footer className={styles.footer}>
        Example output of the Direction Alignment Skill · See{' '}
        <code>examples/first-workflow-activation/directions.md</code> in the repo
      </footer>
    </div>
  )
}
