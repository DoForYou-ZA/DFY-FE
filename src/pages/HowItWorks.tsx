import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const steps = [
  { number: '01', title: 'Describe the task', text: 'Explain what needs doing, where it needs to happen, when you need it, and what budget you have in mind. Clear details help runners decide whether the task suits them.' },
  { number: '02', title: 'Choose a runner', text: 'Review the available task and runner information before agreeing to proceed. Make sure the scope, timing, budget, and any important instructions are clear.' },
  { number: '03', title: 'Stay in the loop', text: 'Use the task journey and available communication tools to keep track of progress and clarify details when needed.' },
  { number: '04', title: 'Review completion', text: 'When the runner marks the task complete, the creator has a 24-hour confirmation period to confirm completion or raise a dispute. Payment and payout status should be checked in the platform.' },
]

export default function HowItWorks() {
  usePageMetadata('How DoForYou Works | Post Tasks and Find Local Runners', 'Learn how to post a task, choose a local runner, track progress, and review task completion on DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>How DoForYou works</h1><p>One clear journey from a task you need done to a result you can review.</p></div></header>
    <div className="container" style={{ maxWidth: 960, paddingTop: '2rem', paddingBottom: '3rem' }}>
      <section className="section-card"><h2>For task creators and runners</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>DoForYou connects people who need everyday tasks completed with people willing to take them on. Agree on the task details before work begins, communicate clearly, and use the task status to understand what happens next.</p></section>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {steps.map(step => <article key={step.number} className="section-card" style={{ display: 'grid', gridTemplateColumns: '64px minmax(0,1fr)', gap: '1rem', alignItems: 'start' }}>
          <div aria-hidden="true" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>{step.number}</div>
          <div><h2 style={{ marginBottom: '.5rem' }}>{step.title}</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{step.text}</p></div>
        </article>)}
      </div>
      <div className="section-card" style={{ marginTop: '1rem' }}><h2>Ready to get started?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Start by exploring available tasks or create an account to post a task of your own.</p><div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginTop: '1rem' }}><Link className="btn btn-primary" to="/register">Create an account</Link><Link className="btn btn-secondary" to="/tasks/browse">Browse tasks</Link></div></div>
    </div>
  </div>
}