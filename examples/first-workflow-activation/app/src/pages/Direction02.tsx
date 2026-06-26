import { useState } from 'react'
import RelayShell from '../components/RelayShell'
import ExitPrototype from '../components/ExitPrototype'
import styles from './DirectionPages.module.css'

const TEMPLATES = [
  {
    id: 'lead-routing',
    name: 'Lead routing',
    desc: 'Route inbound leads to the right rep based on territory and score.',
    steps: 4,
  },
  {
    id: 'invoice-approval',
    name: 'Invoice approval',
    desc: 'Route invoices over $5k to finance manager for sign-off.',
    steps: 5,
  },
  {
    id: 'onboarding',
    name: 'Customer onboarding',
    desc: 'Send welcome sequence and assign CSM when deal closes.',
    steps: 6,
  },
  {
    id: 'support-triage',
    name: 'Support triage',
    desc: 'Classify tickets and assign priority based on customer tier.',
    steps: 4,
  },
]

const TEMPLATE_STEPS: Record<string, string[]> = {
  'lead-routing': [
    'Trigger: HubSpot form submitted',
    'Score lead based on company size',
    'Notify {channel} in Slack',
    'Create contact in HubSpot CRM',
  ],
  'invoice-approval': [
    'Trigger: New invoice received',
    'Check amount and vendor details',
    'Route invoices over $5k to finance manager',
    'Notify {channel} when approval is complete',
  ],
  onboarding: [
    'Trigger: Deal marked closed won',
    'Create customer onboarding task list',
    'Notify {channel} with handoff summary',
    'Assign customer success manager',
  ],
  'support-triage': [
    'Trigger: New support ticket created',
    'Classify urgency and customer tier',
    'Notify {channel} for high-priority tickets',
    'Assign ticket to the right support queue',
  ],
}

const getTemplateSteps = (templateId: string | null, channel: string) =>
  (TEMPLATE_STEPS[templateId ?? 'lead-routing'] ?? TEMPLATE_STEPS['lead-routing']).map((step) =>
    step.replace('{channel}', channel),
  )

export default function Direction02() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [customized, setCustomized] = useState(false)
  const [published, setPublished] = useState(false)
  const [templateMode, setTemplateMode] = useState<'as-is' | 'customized' | null>(null)
  const [slackChannel, setSlackChannel] = useState('#sales')
  const [customWorkflowSteps, setCustomWorkflowSteps] = useState<string[]>([])

  const selected = TEMPLATES.find((t) => t.id === selectedId)
  const selectedName = selected?.name ?? 'Lead routing'
  const workflowSteps =
    templateMode === 'customized' && customWorkflowSteps.length > 0
      ? customWorkflowSteps
      : getTemplateSteps(selectedId, slackChannel)

  const handleUseTemplate = () => {
    if (!selectedId) return
    if (customWorkflowSteps.length === 0) {
      setCustomWorkflowSteps(getTemplateSteps(selectedId, slackChannel))
    }
    setCustomized(true)
    setPublished(false)
    setTemplateMode('customized')
  }

  const handleUseAsIs = (templateId: string) => {
    setSelectedId(templateId)
    setCustomized(true)
    setPublished(false)
    setTemplateMode('as-is')
    setCustomWorkflowSteps([])
  }

  const handleCustomize = (templateId: string) => {
    setSelectedId(templateId)
    setPublished(false)
    setTemplateMode(null)
    setCustomWorkflowSteps(getTemplateSteps(templateId, slackChannel))
  }

  const handleSlackChannelChange = (value: string) => {
    setCustomWorkflowSteps((steps) => steps.map((step) => step.replace(slackChannel, value)))
    setSlackChannel(value)
  }

  return (
    <>
      <ExitPrototype />
      <RelayShell activeNav="templates">
        <div className={styles.page}>
          <header className={styles.topBar}>
            <div>
              <h1 className={styles.pageTitle}>
                {customized ? `${selectedName} workflow` : 'Choose a template'}
              </h1>
              <p className={styles.pageSub}>
                {published
                  ? 'Your workflow is live and ready to run.'
                  : customized
                  ? 'Template applied — adjust settings before publishing.'
                  : 'Start from a proven pattern and customize for your team.'}
              </p>
            </div>
            {customized && !published && (
              <button type="button" className={styles.primaryBtn} onClick={() => setPublished(true)}>
                Publish workflow
              </button>
            )}
          </header>

          {!customized ? (
            <div className={styles.templateScene}>
              <div className={styles.templateGridFull}>
                {TEMPLATES.map((template) => (
                  <div
                    key={template.id}
                    className={
                      selectedId === template.id
                        ? styles.templateCardFullActive
                        : styles.templateCardFull
                    }
                  >
                    <div className={styles.templateThumb} />
                    <h3 className={styles.templateName}>{template.name}</h3>
                    <p className={styles.templateDesc}>{template.desc}</p>
                    <span className={styles.templateMeta}>{template.steps} steps</span>
                    <div className={styles.templateCardActions}>
                      <button
                        type="button"
                        className={styles.templateActionPrimary}
                        onClick={() => handleUseAsIs(template.id)}
                      >
                        Use as-is
                      </button>
                      <button
                        type="button"
                        className={styles.templateActionSecondary}
                        onClick={() => handleCustomize(template.id)}
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {selected && (
                <aside className={styles.customizePanel}>
                  <h3 className={styles.panelTitle}>Customize {selected.name}</h3>
                  <label className={styles.fieldLabel} htmlFor="slack-channel">
                    Notify Slack channel
                  </label>
                  <input
                    id="slack-channel"
                    className={styles.fieldInput}
                    value={slackChannel}
                    onChange={(e) => handleSlackChannelChange(e.target.value)}
                  />
                  <div className={styles.customStepList}>
                    <span className={styles.fieldLabel}>Workflow steps</span>
                    {customWorkflowSteps.map((step, index) => (
                      <label key={`${selected.id}-${index}`} className={styles.customStepItem}>
                        <span className={styles.customStepNumber}>{index + 1}</span>
                        <input
                          className={styles.customStepInput}
                          value={step}
                          onChange={(e) => {
                            const nextSteps = [...customWorkflowSteps]
                            nextSteps[index] = e.target.value
                            setCustomWorkflowSteps(nextSteps)
                          }}
                        />
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={styles.primaryBtn}
                    onClick={handleUseTemplate}
                  >
                    Confirm workflow
                  </button>
                </aside>
              )}
            </div>
          ) : (
            <div className={styles.resultScene}>
              {published && (
                <div className={styles.liveNotice}>
                  <span className={styles.badge}>Live</span>
                  <span>{selectedName} is published and using {slackChannel} for notifications.</span>
                </div>
              )}
              <div className={styles.templateApplied}>
                <span className={styles.badge}>From template</span>
                <span>
                  {selectedName} · {templateMode === 'as-is' ? 'used as-is' : `customized for ${slackChannel}`}
                </span>
              </div>
              <div className={styles.workflowCanvas}>
                <div className={styles.workflowNodes}>
                  {workflowSteps.map((step, index) => {
                    const [label, ...detailParts] = step.split(': ')
                    const detail = detailParts.join(': ') || step

                    return (
                      <div key={step} className={styles.workflowNode}>
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
              <button
                type="button"
                className={styles.ghostBtn}
                onClick={() => {
                  setCustomized(false)
                  setSelectedId(null)
                  setPublished(false)
                  setTemplateMode(null)
                }}
              >
                Back to templates
              </button>
            </div>
          )}
        </div>
      </RelayShell>
    </>
  )
}
