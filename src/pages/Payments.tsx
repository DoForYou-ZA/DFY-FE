import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function Payments() {
  usePageMetadata('Task Completion and Payment Status | DoForYou', 'Understand the creator confirmation period, disputes, and how to check payment status for a DoForYou task.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Task completion and payment status</h1><p>Understand the review step and know where to check the status of your transaction.</p></div></header>
    <div className="container" style={{ maxWidth: 900, paddingTop: '2rem', paddingBottom: '3rem' }}>
      <section className="section-card"><h2>1. The runner records completion</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>When the runner marks a task complete, the creator should review the result against the task details agreed at the start.</p></section>
      <section className="section-card" style={{ marginTop: '1rem' }}><h2>2. The creator has 24 hours to respond</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>The creator can confirm completion or raise a dispute during the 24-hour confirmation period. If something is not right, describe the issue promptly and use the available dispute process.</p></section>
      <section className="section-card" style={{ marginTop: '1rem' }}><h2>3. Check the transaction status</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>A confirmation period is not the same as a guarantee that money has reached a bank account. Payment processing, payout status, and any failed or pending transactions must be checked in the platform and relevant transaction records.</p></section>
      <section className="section-card" style={{ marginTop: '1rem' }}><h2>Need help with a payment?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Contact support with the task or transaction reference and the status you see. Never send your password, full card details, or one-time security codes.</p><div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '1rem' }}><Link to="/contact" className="btn btn-primary">Contact support</Link><Link to="/terms" className="btn btn-secondary">Read the terms</Link></div></section>
    </div>
  </div>
}