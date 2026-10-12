import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const steps = [
  { number: '01', title: 'Describe the task', text: 'Explain the result you need, where it needs to happen, when you need it, and the budget you have in mind. Add practical instructions and any constraints so runners can judge whether it suits them.', tip: 'Be specific about what “finished” looks like.' },
  { number: '02', title: 'Review and agree', text: 'Review available runner and task information, then make sure the scope, timing, budget, access arrangements, and important instructions are clear before work begins.', tip: 'Resolve questions before anyone commits.' },
  { number: '03', title: 'Keep progress clear', text: 'Use the task status and available communication tools to share updates, ask questions early, and make sure both sides understand any change to the original plan.', tip: 'Keep important changes in the platform where possible.' },
  { number: '04', title: 'Review completion', text: 'When the runner marks the task complete, the creator has 24 hours to confirm completion or raise a dispute. Check the task and payment records for the current status.', tip: 'The confirmation window is not a guarantee of instant payout.' },
]

export default function HowItWorks() {
  usePageMetadata('How DoForYou Works | Post Tasks and Find Local Runners', 'Learn how to post a task, agree on the details, work with a local runner, and review completion on DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>How DoForYou works</h1><p>One clear journey from a task you need done to a result you can review.</p></div></header>
    <div className="container" style={{ maxWidth: 1040, paddingTop: '2.5rem', paddingBottom: '4rem' }}>
      <section className="section-card"><span className="marketing-kicker">ONE MARKETPLACE, TWO SIDES</span><h2>For task creators and runners</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>DoForYou connects people who need everyday tasks completed with people willing to take them on. A good task journey starts with clear expectations, continues with communication, and ends with a chance to review the result.</p><div className="marketing-two-column"><div><h3>Creating a task?</h3><p>Describe the outcome, set a fair budget, and make the timing and location clear.</p><Link to="/for-creators">Guide for creators →</Link></div><div><h3>Taking on a task?</h3><p>Read the requirements carefully, ask questions, and accept only work you can safely complete.</p><Link to="/for-runners">Guide for runners →</Link></div></div></section>
      <div className="marketing-step-list">
        {steps.map(step => <article key={step.number} className="section-card marketing-step"><div className="marketing-step-number" aria-hidden="true">{step.number}</div><div><h2>{step.title}</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>{step.text}</p><p className="marketing-tip"><strong>Helpful tip</strong> {step.tip}</p></div></article>)}
      </div>
      <section className="section-card marketing-final-cta"><span className="marketing-kicker">READY WHEN YOU ARE</span><h2>Take the next step</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>Explore open tasks or create an account to start posting work of your own.</p><div className="marketing-actions"><Link className="btn btn-primary" to="/register">Create an account</Link><Link className="btn btn-secondary" to="/tasks/browse">Browse tasks</Link></div></section>
    </div>
  </div>
}