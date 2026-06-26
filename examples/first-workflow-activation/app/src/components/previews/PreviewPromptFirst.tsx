import styles from './PreviewShared.module.css'

export default function PreviewPromptFirst() {
  return (
    <div className={styles.frame}>
      <div className={styles.miniSidebar}>
        <div className={styles.miniLogo}>R</div>
        <div className={styles.miniNavActive} />
        <div className={styles.miniNav} />
        <div className={styles.miniNav} />
      </div>
      <div className={styles.miniMain}>
        <div className={styles.miniHeader}>New workflow</div>
        <div className={styles.promptBox}>
          <div className={styles.promptLabel}>Describe what you want to automate</div>
          <div className={styles.promptText}>
            When a new lead fills out our form, notify sales and add them to CRM…
          </div>
          <div className={styles.promptBtn}>Generate workflow</div>
        </div>
      </div>
    </div>
  )
}
