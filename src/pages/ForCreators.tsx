import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function ForCreators() {
  usePageMetadata('Post a Task with DoForYou | Get Local Help', 'Explain the task, set your budget, review runner details, and track completion with DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Get help with your to-do list</h1><p>Turn the task you have been putting off into a clear plan someone nearby can take on.</p></div></header>
    <div className="container" style={{ maxWidth: 960, paddingTop: '2rem', paddingBottom: '3rem' }}>
      <section className="section-card"><h2>Post a task with the details that matter</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Describe the work, add the location and timing, set your budget, and include any instructions a runner should know before accepting. A clear task helps everyone start with the same expectations.</p></section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginTop: '1rem' }}>
        <article className="section-card"><h3>Explain the outcome</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Describe what “done” means, including any relevant requirements or constraints.</p></article>
        <article className="section-card"><h3>Review before agreeing</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>Discuss timing, budget, access, and other details before the task gets underway.</p></article>
        <article className="section-card"><h3>Review completion</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>When a runner marks the task complete, you have 24 hours to confirm completion or raise a dispute.</p></article>
      </div>
      <div className="section-card" style={{ marginTop: '1rem' }}><h2>Your next step</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Create an account to start posting tasks. Review the platform terms and the payment status shown for your task before relying on any payment timeline.</p><div style={{ marginTop: '1rem' }}><Link className="btn btn-primary" to="/register">Get started as a creator</Link></div></div>
    </div>
  </div>
}