import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function Terms() {
  usePageMetadata('Terms and Conditions', 'Read the DoForYou platform terms and conditions for task creators and runners.')
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <div className="page-header"><div className="container"><h1>Terms & Conditions</h1><p>Important information for task creators and runners.</p></div></div>
      <div className="container" style={{ maxWidth: 800, paddingTop: '2rem' }}>
        <div className="section-card" style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
          {[
            { title: '1. Acceptance of Terms', body: 'By using DoForYou, you agree to the applicable platform terms. If you do not agree, please do not use the platform.' },
            { title: '2. User Responsibilities', body: 'Users are responsible for providing accurate information, agreeing on task requirements before work begins, completing agreed tasks, and treating other users with respect.' },
            { title: '3. Payments, Fees & Transaction Status', body: 'Review the amount, applicable platform fee, and transaction details shown before proceeding. Payment processing and runner payouts can remain pending or fail. A task completion confirmation does not by itself prove that a payout has reached a runner’s bank account. Check the status recorded in the platform and contact support if a transaction needs attention.' },
            { title: '4. Completion Review & Disputes', body: 'After a runner marks a task complete, the creator has 24 hours to confirm completion or raise a dispute. Raise concerns promptly and provide relevant details through the available platform process. This summary does not guarantee a particular dispute outcome.' },
            { title: '5. Privacy', body: 'For questions about how personal information is handled, contact info@doforyou.co.za. The platform’s privacy information should be reviewed before submitting personal information.' },
            { title: '6. Prohibited Activities', body: 'Users may not use the platform for illegal activities, harassment, fraud, or activity that violates South African law.' },
            { title: '7. Questions & Support', body: 'For questions about these terms or a specific task, contact DoForYou support. Do not share passwords, full card details, or one-time security codes.' },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem', fontSize: '1rem' }}>{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
          <p style={{ marginTop: '2rem' }}>For payment questions, see <Link to="/payments-and-completion">Task Completion & Payment Status</Link>. For assistance, <Link to="/contact">contact DoForYou</Link>.</p>
          <p style={{ fontSize: '0.875rem', marginTop: '1rem' }}>Website wording updated: October 2026. This page needs review against the full legal terms and privacy documentation before production use.</p>
        </div>
      </div>
    </div>
  )
}