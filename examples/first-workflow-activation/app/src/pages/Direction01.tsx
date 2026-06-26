import { useState } from 'react'
import RelayShell from '../components/RelayShell'
import ExitPrototype from '../components/ExitPrototype'
import styles from './DirectionPages.module.css'

const GENERATED_STEPS = [
  { id: 1, label: 'Trigger', detail: 'When HubSpot form "Demo request" is submitted' },
  { id: 2, label: 'Condition', detail: 'If company size is 50+ employees' },
  { id: 3, label: 'Action', detail: 'Post message to #enterprise-sales in Slack' },
  { id: 4, label: 'Action', detail: 'Create deal in HubSpot CRM' },
]

const PROPOSED_PLAN = [
  { id: 1, label: 'Listen', detail: 'Watch for a new inbound demo request' },
  { id: 2, label: 'Decide', detail: 'Check whether the company looks sales-ready' },
  { id: 3, label: 'Notify', detail: 'Send the right context to the sales team' },
  { id: 4, label: 'Create', detail: 'Add the record to CRM so follow-up can start' },
]

type DirectionStage = 'prompt' | 'plan' | 'workflow' | 'live'

export default function Direction01() {
  const [prompt, setPrompt] = useState('')
  const [stage, setStage] = useState<DirectionStage>('prompt')
  const [loading, setLoading] = useState(false)

  const handleGenerate = () => {
    if (!prompt.trim() || loading) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStage('plan')
    }, 900)
  }

  const resetPrototype = () => {
    setStage('prompt')
    setPrompt('')
  }

  return (
    <>
      <ExitPrototype />
      <RelayShell activeNav="workflows">
        <div className={styles.page}>
          <header className={styles.topBar}>
            <div>
              <h1 className={styles.pageTitle}>
                {stage === 'workflow' || stage === 'live' ? 'Lead routing workflow' : 'New workflow'}
              </h1>
              <p className={styles.pageSub}>
                {stage === 'live'
                  ? 'Your workflow is live and ready to run.'
                  : 'Describe your automation — Relay will build the first draft.'}
              </p>
            </div>
            {stage === 'workflow' && (
              <button type="button" className={styles.primaryBtn} onClick={() => setStage('live')}>
                Publish workflow
              </button>
            )}
          </header>

          {stage === 'prompt' ? (
            <div className={styles.promptScene}>
              <label htmlFor="workflow-prompt" className={styles.promptLabel}>
                What do you want to automate?
              </label>
              <textarea
                id="workflow-prompt"
                className={styles.promptInput}
                rows={5}
                placeholder="Example: When a new lead fills out our demo form, notify the sales team in Slack and create a contact in HubSpot…"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className={styles.promptActions}>
                <button
                  type="button"
                  className={styles.primaryBtn}
                  disabled={!prompt.trim() || loading}
                  onClick={handleGenerate}
                >
                  {loading ? 'Generating…' : 'Generate workflow'}
                </button>
                <span className={styles.hint}>Relay will draft steps you can review and edit.</span>
              </div>
            </div>
          ) : stage === 'plan' ? (
            <div className={styles.resultScene}>
              <div className={styles.resultHeader}>
                <div>
                  <h2 className={styles.resultTitle}>Proposed workflow plan</h2>
                  <p className={styles.resultMeta}>Based on: {prompt}</p>
                </div>
                <button type="button" className={styles.ghostBtn} onClick={() => setStage('prompt')}>
                  Edit prompt
                </button>
              </div>
              <div className={styles.steps}>
                {PROPOSED_PLAN.map((step, index) => (
                  <div key={step.id} className={styles.stepRow}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepCard}>
                      <span className={styles.stepLabel}>{step.label}</span>
                      <span className={styles.stepDetail}>{step.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.actionRow}>
                <button type="button" className={styles.primaryBtn} onClick={() => setStage('workflow')}>
                  Approve and build
                </button>
                <span className={styles.hint}>Relay will turn this plan into editable workflow steps.</span>
              </div>
            </div>
          ) : (
            <div className={styles.resultScene}>
              {stage === 'live' && (
                <div className={styles.liveNotice}>
                  <span className={styles.badge}>Live</span>
                  <span>Workflow published. New demo requests will now route automatically.</span>
                </div>
              )}
              <div className={styles.resultHeader}>
                <div>
                  <h2 className={styles.resultTitle}>Lead routing workflow</h2>
                  <p className={styles.resultMeta}>Built from the approved plan · 4 steps</p>
                </div>
                <button type="button" className={styles.ghostBtn} onClick={resetPrototype}>
                  Start over
                </button>
              </div>
              <div className={styles.workflowCanvas}>
                <div className={styles.workflowNodes}>
                  {GENERATED_STEPS.map((step, index) => (
                    <div key={step.id} className={styles.workflowNode}>
                      <span className={styles.nodePortStart} />
                      <div className={styles.workflowNodeHeader}>
                        <span className={styles.nodeNumber}>{index + 1}</span>
                        <span className={styles.stepLabel}>{step.label}</span>
                      </div>
                      <span className={styles.stepDetail}>{step.detail}</span>
                      <span className={styles.nodePortEnd} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </RelayShell>
    </>
  )
}
