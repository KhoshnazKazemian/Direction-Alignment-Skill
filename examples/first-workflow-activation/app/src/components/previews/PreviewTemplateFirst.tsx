import styles from './PreviewShared.module.css'

const templates = ['Lead routing', 'Invoice approval', 'Onboarding']

export default function PreviewTemplateFirst() {
  return (
    <div className={styles.frame}>
      <div className={styles.miniSidebar}>
        <div className={styles.miniLogo}>R</div>
        <div className={styles.miniNav} />
        <div className={styles.miniNavActive} />
        <div className={styles.miniNav} />
      </div>
      <div className={styles.miniMain}>
        <div className={styles.miniHeader}>Choose a template</div>
        <div className={styles.templateGrid}>
          {templates.map((name) => (
            <div key={name} className={styles.templateCard}>
              <div className={styles.templateIcon} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
