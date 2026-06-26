export interface Direction {
  id: string
  number: string
  title: string
  valueProposition: string
  pros: string[]
  cons: string[]
  path: string
}

export const directions: Direction[] = [
  {
    id: '01',
    number: '01',
    title: 'Describe It, Relay Builds It',
    valueProposition: 'Tell Relay your goal in plain language and get a working workflow in seconds.',
    pros: ['Fastest time-to-value', 'Lowest cognitive load', 'Strong activation story'],
    cons: ['Less transparency', 'Harder to trust output', 'Limited learning'],
    path: '/direction-01',
  },
  {
    id: '02',
    number: '02',
    title: 'Start From Proven Templates',
    valueProposition: 'Pick a template that matches your use case and customize it in minutes.',
    pros: ['Reduces blank-page anxiety', 'Proven starting patterns', 'Balanced speed and control'],
    cons: ['May not fit edge cases', 'Wrong template risk', 'Less unique differentiation'],
    path: '/direction-02',
  },
  {
    id: '03',
    number: '03',
    title: 'Build With an Assistant',
    valueProposition: 'Construct your workflow step by step while Relay suggests what to add next.',
    pros: ['Users learn while building', 'Full structural control', 'AI without replacing builder'],
    cons: ['Slowest setup', 'Higher initial burden', 'Suggestions must feel helpful'],
    path: '/direction-03',
  },
]
