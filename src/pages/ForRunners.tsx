import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function ForRunners() {
  usePageMetadata('Become a DoForYou Runner | Find Tasks', 'Explore tasks that fit your skills and schedule, understand the requirements, and track your work through DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Make your time count</h1><p>Find tasks you can take on and help people in your community get things done.</p></div></header>
    <div className="container" style={{ maxWidth: 960, paddingTop: '2rem', paddingBottom: '3rem' }}>
      <section className="section-card"><h2>Choose work that fits you</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Browse available tasks, read the requirements carefully, and consider the location, timing, budget, and skills involved before accepting. Only agree to tasks you can complete safely and as described.</p></section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginTop: '1rem' }}>
        <article className="section-card"><h3>Check the details</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Understand the expected result, budget, timing, and any special instructions before you commit.</p></article>
        <article className="section-card"><h3>Communicate clearly</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Keep the creator informed and raise questions early if the task requirements change.</p></article>
        <article className="section-card"><h3>Record completion</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Mark the task complete through the platform when the agreed work is finished. Payout timing and status depend on the platform process and payment records.</p></article>
      </div>
      <div className="section-card" style={{ marginTop: '1rem' }}><h2>Ready to explore tasks?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Browse what is available, then create an account to take part.</p><div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginTop: '1rem' }}><Link className="btn btn-primary" to="/register">Join DoForYou</Link><Link className="btn btn-secondary" to="/tasks/browse">Browse tasks</Link></div></div>
    </div>
  </div>
}