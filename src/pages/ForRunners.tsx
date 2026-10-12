import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const runnerSteps = [
  { title: 'Choose tasks carefully', text: 'Read the location, timing, budget, expected outcome, and instructions. Only accept work you understand and can complete safely.' },
  { title: 'Clarify before committing', text: 'Ask questions about access, materials, timing, or anything that could change the effort involved. Make sure the agreed expectations are realistic.' },
  { title: 'Keep the creator updated', text: 'Communicate early if something changes or you need clarification. Do not silently change the agreed scope or substitute a different result.' },
  { title: 'Record the result', text: 'When the agreed work is finished, mark it complete through the platform and provide any requested context. The creator then has a 24-hour period to confirm completion or raise a dispute.' },
]

export default function ForRunners() {
  usePageMetadata('Become a DoForYou Runner | Find Tasks', 'Learn how to choose suitable tasks, communicate clearly, and record completion as a DoForYou runner.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Make your time count</h1><p>Find tasks you can take on and help people in your community get things done.</p></div></header>
    <div className="container marketing-page-content">
      <section className="section-card marketing-intro-card"><span className="marketing-kicker">FOR RUNNERS</span><h2>Choose work that fits you</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>Browse available tasks and look for work that fits your skills, schedule, location, and comfort level. A clear agreement helps protect your time and gives the creator confidence about what to expect.</p><div className="marketing-callout"><strong>Only accept tasks you can safely complete.</strong><span>If the details are unclear, ask questions before you commit.</span></div></section>
      <section className="marketing-content-section"><div><span className="marketing-kicker">A PRACTICAL RUNNER CHECKLIST</span><h2>From first look to completion</h2><p className="marketing-muted">Good communication is part of doing a good job. Use these steps to keep the task journey clear.</p></div><div className="marketing-checklist">{runnerSteps.map((item, index) => <article className="section-card marketing-check-item" key={item.title}><span className="marketing-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{item.text}</p></div></article>)}</div></section>
      <section className="section-card marketing-final-cta"><span className="marketing-kicker">FIND YOUR NEXT TASK</span><h2>Ready to explore?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>Browse what is available, then create an account to take part. Check the task and payment records for current status and payout information.</p><div className="marketing-actions"><Link className="btn btn-primary" to="/register">Join DoForYou</Link><Link className="btn btn-secondary" to="/tasks/browse">Browse tasks</Link></div></section>
    </div>
  </div>
}