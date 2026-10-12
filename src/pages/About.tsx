import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function About() {
  usePageMetadata('About DoForYou', 'Learn how DoForYou connects people across South Africa to post everyday tasks, find local runners, and create local earning opportunities.')
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <div className="page-header"><div className="container"><h1>About DoForYou</h1><p>A practical way for people to help people get things done.</p></div></div>
      <div className="container" style={{ maxWidth: 900, paddingTop: '2rem' }}>
        <section className="section-card">
          <h2 style={{ marginBottom: '1rem' }}>A marketplace built around everyday tasks</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>DoForYou brings together people who need a task done and people who are willing and able to do it. A creator can describe a task and budget; a runner can review the details and decide whether it is right for them.</p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Tasks may include errands, shopping assistance, household help, and other everyday jobs that are suitable for the platform. The task details should always make the expected result, timing, location, and budget clear.</p>
        </section>
        <section className="section-card" style={{ marginTop: '1rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>What we want the experience to feel like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
            <div><h3 style={{ marginBottom: '.5rem' }}>Clear expectations</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>People should understand the task, budget, timing, and next step before they commit.</p></div>
            <div><h3 style={{ marginBottom: '.5rem' }}>Visible progress</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Task status and communication help creators and runners stay aligned throughout the task.</p></div>
            <div><h3 style={{ marginBottom: '.5rem' }}>A clear review step</h3><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>After completion is marked, the creator has 24 hours to confirm the result or raise a dispute.</p></div>
          </div>
        </section>
        <section className="section-card" style={{ marginTop: '1rem' }}>
          <h2 style={{ marginBottom: '.75rem' }}>Find your next step</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Need a hand with a task, or looking for tasks you can complete? Start with the journey that fits you.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginTop: '1rem' }}>
            <Link className="btn btn-primary" to="/for-creators">I need a task done</Link>
            <Link className="btn btn-secondary" to="/for-runners">I want to be a runner</Link>
            <Link className="btn btn-secondary" to="/contact">Contact DoForYou</Link>
          </div>
        </section>
      </div>
    </div>
  )
}