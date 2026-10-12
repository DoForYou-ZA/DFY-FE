import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { publicApi } from '../api'
import { usePostErrand } from '../hooks/usePostErrand'
import { usePageMetadata } from '../hooks/usePageMetadata'
import './Home.css'

const features = [
  { image: new URL('../assets/images/image1.jpeg', import.meta.url).href, title: 'Post a Task', description: 'Describe what you need, set your budget, and explain when and where the task should happen.' },
  { image: new URL('../assets/images/image2.jpeg', import.meta.url).href, title: 'Choose a Runner', description: 'Review available runners and choose the person who best fits your task.' },
  { image: new URL('../assets/images/image3.jpeg', import.meta.url).href, title: 'Confirm Completion', description: 'Follow the task through completion and confirm the result or raise a concern.' },
]

interface PublicStats {
  tasksCompleted: number
  taskCreators: number
  activeRunners: number
  averageRating: number
}

const formatCount = (value: number) => {
  if (value >= 1000) {
    const thousands = value / 1000
    const formatted = thousands >= 10 ? Math.floor(thousands) : Math.round(thousands * 10) / 10
    return formatted + 'k+'
  }
  return String(value)
}

export default function Home() {
  usePageMetadata('DoForYou — Let’s Get It Done | South Africa Task Marketplace', 'Post a task, connect with local runners, and get everyday jobs done with DoForYou — South Africa's task marketplace.')
  const { handlePostErrand, ProfileIncompleteModal } = usePostErrand()
  const [stats, setStats] = useState<PublicStats | null>(null)

  useEffect(() => {
    let mounted = true
    publicApi.getStats()
      .then(response => {
        const data = response.data?.data || response.data
        if (mounted && data) {
          setStats({
            tasksCompleted: Number(data.tasksCompleted) || 0,
            taskCreators: Number(data.taskCreators) || 0,
            activeRunners: Number(data.activeRunners) || 0,
            averageRating: Number(data.averageRating) || 0,
          })
        }
      })
      .catch(() => {})
    return () => { mounted = false }
  }, [])

  return (
    <>
    <div className="home-page">
      <section className="hero-section" aria-labelledby="home-heading">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge"><i className="fas fa-bolt" aria-hidden="true" /> A South African task marketplace</div>
            <h1 id="home-heading">Let’s get it done<span className="dot">.</span></h1>
            <p>Connect with people in your area to post everyday tasks, get practical help, and earn extra income as a runner.</p>
            <div className="hero-actions">
              <Link to="/tasks/browse" className="btn btn-secondary btn-lg">Browse Tasks</Link>
              <button onClick={handlePostErrand} className="btn btn-primary btn-lg">Post a Task</button>
            </div>
            {stats && (
              <div className="hero-stats" aria-label="DoForYou marketplace statistics">
                {stats.tasksCompleted > 0 && <div><strong>{formatCount(stats.tasksCompleted)}</strong><span>Tasks completed</span></div>}
                {stats.taskCreators > 0 && <div><strong>{formatCount(stats.taskCreators)}</strong><span>Task creators</span></div>}
                {stats.activeRunners > 0 && <div><strong>{formatCount(stats.activeRunners)}</strong><span>Active runners</span></div>}
                {stats.averageRating > 0 && <div><strong>{stats.averageRating.toFixed(1)}/5</strong><span>Average rating</span></div>}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="video-section" aria-label="DoForYou platform introduction">
        <div className="container">
          <video width="100%" height="auto" controls muted playsInline preload="metadata">
            <source src="/assets/videos/DoForYou Freelance Platform Introduction.mp4" type="video/mp4" />
            Your browser does not support the video. You can still browse tasks and learn how DoForYou works.
          </video>
        </div>
      </section>

      <section className="features-section" aria-labelledby="how-it-works-heading">
        <div className="container">
          <h2 id="how-it-works-heading" className="section-title text-center">How DoForYou works</h2>
          <div className="features-grid">
            {features.map((f) => (
              <article key={f.title} className="feature-card">
                <img src={f.image} alt="" loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="runner-section" aria-labelledby="runner-heading">
        <div className="container runner-inner">
          <div className="runner-text">
            <h2 id="runner-heading">Turn your time into opportunity</h2>
            <h4>Find tasks that suit your skills, schedule, and location.</h4>
            <Link to="/tasks/browse" className="btn btn-primary btn-lg">Explore Available Tasks</Link>
          </div>
          <div className="runner-image">
            <img src="/DFY.png" alt="DoForYou logo" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="completion-heading">
        <div className="container">
          <h2 id="completion-heading" className="section-title text-center">A clear task journey</h2>
          <div className="testimonials-grid">
            {[
              { icon: 'fa-clipboard-check', title: 'Agree on the task', text: 'The creator describes the work and budget. The runner reviews the details before accepting.' },
              { icon: 'fa-list-check', title: 'Keep progress visible', text: 'Task status helps both sides understand what has happened and what action comes next.' },
              { icon: 'fa-shield-alt', title: 'Review completion', text: 'After a runner marks a task complete, the creator has 24 hours to confirm completion or raise a dispute.' },
            ].map((step) => (
              <article key={step.title} className="testimonial-card">
                <div className="testimonial-avatar" aria-hidden="true"><i className={`fas ${step.icon}`} /></div>
                <h3 className="testimonial-author-title">{step.title}</h3>
                <p className="testimonial-text">{step.text}</p>
              </article>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>If the creator takes no action during the confirmation period, the platform follows its configured release process. Payment status is determined by the payment provider and platform records.</p>
        </div>
      </section>
    </div>
    {ProfileIncompleteModal}
    </>
  )
}
