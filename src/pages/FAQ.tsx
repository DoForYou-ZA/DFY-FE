import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const questions = [
  { q: 'What is DoForYou?', a: 'DoForYou is a task marketplace where people can post everyday tasks and local runners can choose tasks they are able to complete.' },
  { q: 'How do I post a task?', a: 'Create an account, describe what needs to be done, include the location and timing, and set your budget. Be as specific as possible so runners can understand what you need.' },
  { q: 'How do I become a runner?', a: 'Create an account and explore available tasks. Read each task carefully and only accept work you can complete safely and within the agreed requirements.' },
  { q: 'What happens after a runner marks a task complete?', a: 'The creator has 24 hours to confirm completion or raise a dispute. Follow the task status and any instructions displayed in the platform.' },
  { q: 'Does the 24-hour period guarantee that a payout will arrive immediately?', a: 'No. The confirmation period describes the creator’s opportunity to confirm or dispute completion. Actual payment and payout status depend on platform processing and the payment provider; check the status shown for your transaction.' },
  { q: 'What if I disagree about whether a task was completed?', a: 'Use the available task or support process to raise the issue promptly and provide clear details. Review the current platform terms for the applicable dispute process.' },
  { q: 'How can I contact DoForYou?', a: 'Use the Contact page for the currently listed support channels. If your question concerns a specific task or payment, include its reference where possible and do not share passwords or one-time codes.' },
  { q: 'What should I agree before a task starts?', a: 'Make sure the task scope, expected result, timing, budget, location, and any special requirements are clear to both sides before proceeding.' },
]

export default function FAQ() {
  usePageMetadata('DoForYou FAQs | Tasks, Runners and Payments', 'Answers to common questions about posting tasks, becoming a runner, completion confirmation, payments, and support on DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Frequently asked questions</h1><p>Clear answers to help creators and runners use DoForYou with confidence.</p></div></header>
    <div className="container" style={{ maxWidth: 900, paddingTop: '2rem', paddingBottom: '3rem' }}>
      {questions.map((item, i) => <details key={item.q} className="section-card" style={{ marginBottom: '.75rem' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 700, lineHeight: 1.6 }}>{item.q}</summary>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '.75rem' }}>{item.a}</p>
      </details>)}
      <section className="section-card" style={{ marginTop: '1.5rem' }}><h2>Still need help?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>Contact the DoForYou team for support with a question that is not covered here.</p><div style={{ marginTop: '1rem' }}><Link to="/contact" className="btn btn-primary">Contact support</Link></div></section>
    </div>
  </div>
}