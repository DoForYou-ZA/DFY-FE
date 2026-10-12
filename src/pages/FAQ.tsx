import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const questions = [
  { q: 'What is DoForYou?', a: 'DoForYou is a South African task marketplace. People who need everyday work done can post tasks, and runners can browse opportunities that match their skills, location, and schedule.' },
  { q: 'How do I post a task?', a: 'Create an account and choose the option to post a task. Describe the expected result, add the location and preferred timing, set your budget, and include any important instructions. Clear details help runners decide whether the task is a good fit.' },
  { q: 'How do I become a runner?', a: 'Create an account and explore available tasks. Read the requirements, budget, location, and timing carefully. Ask questions before accepting, and only take on work you can complete safely and as agreed.' },
  { q: 'What should I agree before a task starts?', a: 'Make sure the scope, expected result, timing, budget, location, access arrangements, and any special requirements are clear to both sides. Discuss changes before proceeding rather than relying on assumptions.' },
  { q: 'What happens after a runner marks a task complete?', a: 'The creator has a 24-hour confirmation period to confirm completion or raise a dispute. Both sides should follow the task status and use the available platform process if something needs attention.' },
  { q: 'Does the 24-hour period guarantee that a payout will arrive immediately?', a: 'No. The 24-hour period is the creator’s opportunity to confirm completion or raise a dispute; it is not a promise that funds will arrive instantly. Payment and payout timing depend on the platform process, payment provider, and the status recorded for the transaction.' },
  { q: 'What if I disagree about whether a task was completed?', a: 'Raise the concern promptly using the available task or support process and provide clear, factual details about what was agreed and what happened. Check the current platform terms for the applicable dispute process, and keep relevant communication and evidence.' },
  { q: 'Where can I check a payment or payout?', a: 'Check the payment or transaction status shown in the platform. A task status and a payment status are not necessarily the same thing. If a status is unclear or appears incorrect, contact support with the relevant task or transaction reference.' },
  { q: 'How can I contact DoForYou?', a: 'Visit the Contact page for the current support channels. If your question concerns a specific task or payment, include its reference where possible. Never send your password, one-time verification code, or full payment credentials to support.' },
]

export default function FAQ() {
  usePageMetadata('DoForYou FAQs | Tasks, Runners and Payments', 'Answers to common questions about posting tasks, becoming a runner, completion confirmation, payments, disputes, and support on DoForYou.')
  return <div className="marketing-page">
    <header className="page-header"><div className="container"><h1>Frequently asked questions</h1><p>Clear answers to help creators and runners use DoForYou with confidence.</p></div></header>
    <div className="container faq-page-content">
      <div className="faq-intro"><span className="marketing-kicker">HELPFUL ANSWERS, CLEAR EXPECTATIONS</span><h2>What would you like to know?</h2><p className="marketing-muted">Quick guidance for creators and runners, from writing a useful task to understanding the completion and payment process.</p></div>
      <div className="faq-list">{questions.map((item, i) => <details key={item.q} className="section-card faq-item">
        <summary><span className="faq-number">{String(i + 1).padStart(2, '0')}</span><span>{item.q}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
        <p>{item.a}</p>
      </details>)}</div>
      <section className="section-card marketing-final-cta"><span className="marketing-kicker">WE CAN HELP</span><h2>Still need help?</h2><p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>Contact the DoForYou team for a question that is not covered here. Include a task or transaction reference if it helps us understand the issue.</p><div className="marketing-actions"><Link to="/contact" className="btn btn-primary">Contact support</Link><Link to="/how-it-works" className="btn btn-secondary">How it works</Link></div></section>
    </div>
  </div>
}