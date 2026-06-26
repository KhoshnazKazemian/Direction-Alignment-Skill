import styles from './PreviewShared.module.css'

export default function PreviewCopilot() {
  return (
    <div className={styles.frame}>
      <div className={styles.miniSidebar}>
        <div className={styles.miniLogo}>R</div>
        <div className={styles.miniNavActive} />
        <div className={styles.miniNav} />
        <div className={styles.miniNav} />
      </div>
      <div className={styles.miniMainSplit}>
        <div className={styles.builderArea}>
          <div className={styles.step}>Trigger: Form submitted</div>
          <div className={styles.stepLine} />
          <div className={styles.step}>Filter: Lead score &gt; 50</div>
          <div className={styles.stepLine} />
          <div className={styles.stepAdd}>+ Add step</div>
        </div>
        <div className={styles.assistantPanel}>
          <div className={styles.assistantTitle}>Assistant</div>
          <div className={styles.suggestion}>Notify #sales in Slack</div>
          <div className={styles.suggestion}>Create HubSpot contact</div>
        </div>
      </div>
    </div>
  )
}
