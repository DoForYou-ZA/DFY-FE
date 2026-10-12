import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const checklist = [
  { title: 'Describe the outcome', text: 'Explain what needs to be done and what a successful result looks like. Include useful context without sharing sensitive information publicly.' },
  { title: 'Set the practical details', text: 'Add the location, preferred timing, budget, access arrangements, and any tools or materials that may be needed.' },
  { title: 'Agree before work begins', text: 'Review the runner and clarify scope, timing, budget, and special requirements before the task gets underway.' },
  { title: 'Review completion', text: 'When a runner marks the task complete, you have 24 hours to confirm completion or raise a dispute through the available platform process.' },
]

export default function ForCreators() {
  usePageMetadata('Post a Task with DoForYou | Get Local Help', 'Learn how to describe a task, set expectations, choose a runner, and review completion on DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Get help with your to-do list</h1><p>Turn the task you have been putting off into a clear plan someone nearby can take on.</p></div></header>
    <div className="container marketing-page-content">
      <section className="section-card marketing-intro-card"><span className="marketing-kicker">FOR TASK CREATORS</span><h2>Post a task with the details that matter</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>A useful task post gives runners enough information to decide whether the work is right for them. Describe the outcome, add the location and timing, set your budget, and include instructions that matter before someone accepts.</p><div className="marketing-callout"><strong>Better details lead to better expectations.</strong><span>Say what needs doing, where, by when, and how you will know it is complete.</span></div></section>
      <section className="marketing-content-section"><div><span className="marketing-kicker">BEFORE YOU POST</span><h2>Set everyone up for a clear start</h2><p className="marketing-muted">Use this quick checklist to make your task easier to understand and easier to agree on.</p></div><div className="marketing-checklist">{checklist.map((item, index) => <article className="section-card marketing-check-item" key={item.title}><span className="marketing-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{item.text}</p></div></article>)}</div></section>
      <section className="section-card marketing-final-cta"><span className="marketing-kicker">YOUR TASK STARTS HERE</span><h2>Ready to get it off your list?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>Create an account to start posting. Review the platform terms and the payment status shown for your task before relying on any payment timeline.</p><div className="marketing-actions"><Link className="btn btn-primary" to="/register">Get started as a creator</Link><Link className="btn btn-secondary" to="/how-it-works">See how it works</Link></div></section>
    </div>
  </div>
}