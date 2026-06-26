import { Link } from 'react-router-dom'
import styles from './ExitPrototype.module.css'

export default function ExitPrototype() {
  return (
    <Link to="/" className={styles.exit}>
      ← Exit Prototype
    </Link>
  )
}
