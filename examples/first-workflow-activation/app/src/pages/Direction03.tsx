import { useState } from 'react'
import RelayShell from '../components/RelayShell'
import ExitPrototype from '../components/ExitPrototype'
import styles from './DirectionPages.module.css'

const SUGGESTIONS = [
  'Notify #sales in Slack',
  'Create HubSpot contact',
  'Assign to enterprise rep if score > 80',
]

export default function Direction03() {
  const [steps, setSteps] = useState<string[]>(['Trigger: HubSpot form submitted'])
  const [dismissed, setDismissed] = useState<string[]>([])
  const [published, setPublished] = useState(false)

  const visibleSuggestions = SUGGESTIONS.filter((s) => !dismissed.includes(s) && !steps.includes(s))

  const addStep = (step: string) => {
    setSteps((prev) => [...prev, step])
    setPublished(false)
  }

  const dismissSuggestion = (step: string) => {
    setDismissed((prev) => [...prev, step])
  }

  const complete = steps.length >= 4

  return (
    <>
      <ExitPrototype />
      <RelayShell activeNav="workflows">
        <div className={styles.page}>
          <header className={styles.topBar}>
            <div>
              <h1 className={styles.pageTitle}>Lead routing workflow</h1>
              <p className={styles.pageSub}>
                {published
                  ? 'Your workflow is live and ready to run.'
                  : 'Build step by step — Relay suggests what to add next.'}
              </p>
            </div>
            {complete && !published && (
              <button type="button" className={styles.primaryBtn} onClick={() => setPublished(true)}>
                Publish workflow
              </button>
            )}
          </header>

          <div className={styles.copilotScene}>
            <div className={styles.builderPanel}>
              {published && (
                <div className={styles.liveNotice}>
                  <span className={styles.badge}>Live</span>
                  <span>Workflow published. Relay will now route new demo requests.</span>
                </div>
              )}
              <h2 className={styles.panelHeading}>Workflow steps</h2>
              {published ? (
                <div className={styles.workflowCanvas}>
                  <div className={styles.workflowNodes}>
                    {steps.map((step, index) => {
                      const [label, ...detailParts] = step.split(': ')
                      const detail = detailParts.join(': ') || step

                      return (
                        <div key={`${step}-${index}`} className={styles.workflowNode}>
                          <span className={styles.nodePortStart} />
                          <div className={styles.workflowNodeHeader}>
                            <span className={styles.nodeNumber}>{index + 1}</span>
                            <span className={styles.stepLabel}>{detailParts.length ? label : 'Step'}</span>
                          </div>
                          <span className={styles.stepDetail}>{detail}</span>
                          <span className={styles.nodePortEnd} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <div className={styles.steps}>
                  {steps.map((step, index) => (
                    <div key={`${step}-${index}`} className={styles.stepRow}>
                      <div className={styles.stepNumber}>{index + 1}</div>
                      <div className={styles.stepCard}>
                        <span className={styles.stepDetail}>{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                className={styles.addStepBtn}
                onClick={() => addStep('Filter: Lead score > 50')}
                disabled={steps.length >= 4}
              >
                + Add step manually
              </button>
            </div>

            <aside className={styles.assistantSide}>
              <h2 className={styles.panelHeading}>Relay assistant</h2>
              <p className={styles.assistantIntro}>
                Based on your trigger, here are suggested next steps:
              </p>
              {published ? (
                <p className={styles.assistantEmpty}>Workflow is complete and published.</p>
              ) : visibleSuggestions.length === 0 ? (
                <p className={styles.assistantEmpty}>No more suggestions — workflow looks complete.</p>
              ) : (
                <ul className={styles.suggestionList}>
                  {visibleSuggestions.map((suggestion) => (
                    <li key={suggestion} className={styles.suggestionItem}>
                      <span>{suggestion}</span>
                      <div className={styles.suggestionActions}>
                        <button
                          type="button"
                          className={styles.suggestionAdd}
                          onClick={() => addStep(suggestion)}
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          className={styles.suggestionDismiss}
                          onClick={() => dismissSuggestion(suggestion)}
                        >
                          Dismiss
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </div>
      </RelayShell>
    </>
  )
}
