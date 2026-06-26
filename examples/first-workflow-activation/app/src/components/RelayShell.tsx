import type { ReactNode } from 'react'
import styles from './RelayShell.module.css'

interface RelayShellProps {
  children: ReactNode
  activeNav?: 'workflows' | 'templates' | 'settings'
}

export default function RelayShell({ children, activeNav = 'workflows' }: RelayShellProps) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>R</span>
          Relay
        </div>
        <nav className={styles.nav}>
          <span className={activeNav === 'workflows' ? styles.navActive : styles.navItem}>
            Workflows
          </span>
          <span className={activeNav === 'templates' ? styles.navActive : styles.navItem}>
            Templates
          </span>
          <span className={activeNav === 'settings' ? styles.navActive : styles.navItem}>
            Settings
          </span>
        </nav>
        <div className={styles.user}>
          <div className={styles.avatar}>JK</div>
          <div>
            <div className={styles.userName}>Jordan Kim</div>
            <div className={styles.userRole}>Ops Lead</div>
          </div>
        </div>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
