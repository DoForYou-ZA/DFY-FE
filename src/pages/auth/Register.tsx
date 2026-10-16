import { useState } from 'react'
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { authApi } from '../../api'
import './Auth.css'

const STEPS = ['Personal Info', 'Role & Details', 'Security']
const TERMS_VERSION = 'terms-v1'
const PRIVACY_VERSION = 'privacy-v1'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function extractDobFromId(id: string): string {
  if (id.length < 6) return ''
  const yy = id.substring(0, 2)
  const mm = id.substring(2, 4)
  const dd = id.substring(4, 6)
  const year = parseInt(yy) > 25 ? `19${yy}` : `20${yy}`
  return `${year}-${mm}-${dd}`
}

export default function Register() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const returnToTaskId = (location.state as any)?.returnToTaskId || searchParams.get('returnToTaskId') || null
  const [step, setStep] = useState(1)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phoneNumber: '',
    userType: '', idNumber: '', dateOfBirth: '', address: '',
    password: '', confirmPassword: '',
  })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 13)
    setForm(f => ({ ...f, idNumber: digits, dateOfBirth: extractDobFromId(digits) }))
  }

  const canNext = () => {
    if (step === 1) return !!form.firstName.trim() && !!form.lastName.trim() && EMAIL_RE.test(form.email.trim()) && !!form.phoneNumber.trim()
    if (step === 2) return !!form.userType && /^\d{13}$/.test(form.idNumber) && !!form.dateOfBirth && !!form.address.trim()
    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) { setError('Passwords do not match'); return }
    setError(''); setLoading(true)
    if (!termsAccepted || !privacyAccepted) {
      setError('Please accept the Terms & Conditions and Privacy Policy to create an account.')
      setLoading(false)
      return
    }
    try {
      const res = await authApi.register({
        firstName: form.firstName.trim(), lastName: form.lastName.trim(),
        email: form.email.trim().toLowerCase(), phoneNumber: form.phoneNumber.trim(),
        userType: form.userType, idNumber: form.idNumber,
        dateOfBirth: form.dateOfBirth, address: form.address.trim(),
        password: form.password,
        termsAccepted, privacyAccepted,
        termsVersion: TERMS_VERSION, privacyVersion: PRIVACY_VERSION,
        marketingConsent,
      })
      if (res.data.success) {
        const query = returnToTaskId ? `?returnToTaskId=${encodeURIComponent(returnToTaskId)}` : ''
        navigate(`/login${query}`, { state: { registered: true, returnToTaskId } })
      }
      else setError(res.data.message || 'Registration failed')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-wide">
        <div className="auth-panel">
          <div className="auth-panel-content">
            <h1>Join DoForYou</h1>
            <p>Connect with your community through tasks and services</p>
            <div className="auth-features">
              <div className="auth-feature"><i className="fas fa-plus-circle" /><span>Post Tasks</span></div>
              <div className="auth-feature"><i className="fas fa-handshake" /><span>Earn Money</span></div>
            </div>
          </div>
        </div>
        <div className="auth-form-side">
          <h2>Create Account</h2>
          <div className="step-indicator">
            {STEPS.map((s, i) => (
              <div key={i} className={`step-item ${step > i + 1 ? 'done' : ''} ${step === i + 1 ? 'active' : ''}`}>
                <div className="step-circle">{step > i + 1 ? <i className="fas fa-check" /> : i + 1}</div>
                <span>{s}</span>
              </div>
            ))}
          </div>

          {error && <div className="alert alert-error mb-4"><i className="fas fa-exclamation-circle" /> {error}</div>}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="step-content">
                <div className="form-row">
                  <div className="form-group">
                    <input className="form-input" placeholder="First Name *" value={form.firstName} onChange={set('firstName')} required />
                  </div>
                  <div className="form-group">
                    <input className="form-input" placeholder="Last Name *" value={form.lastName} onChange={set('lastName')} required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" placeholder="Email Address *" value={form.email} onChange={set('email')} required />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-input" placeholder="Phone Number *" value={form.phoneNumber} onChange={set('phoneNumber')} required />
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={() => canNext() && setStep(2)} disabled={!canNext()}>
                  Continue <i className="fas fa-arrow-right" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="step-content">
                <div className="role-options">
                  {[
                    { value: 'creator', icon: 'fa-plus-circle', label: 'Task Creator', desc: 'Post tasks for others' },
                    { value: 'runner', icon: 'fa-running', label: 'Task Runner', desc: 'Complete tasks & earn' },
                    { value: 'both', icon: 'fa-handshake', label: 'Both', desc: 'Post & complete tasks' },
                  ].map(r => (
                    <label key={r.value} className={`role-card ${form.userType === r.value ? 'selected' : ''}`}>
                      <input type="radio" name="userType" value={r.value} checked={form.userType === r.value} onChange={set('userType')} />
                      <i className={`fas ${r.icon}`} />
                      <strong>{r.label}</strong>
                      <span>{r.desc}</span>
                    </label>
                  ))}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input className="form-input" placeholder="ID Number *" maxLength={13} value={form.idNumber} onChange={handleIdChange} required />
                    <small className="text-muted text-xs">Date of birth auto-fills from ID</small>
                  </div>
                  <div className="form-group">
                    <input type="date" className="form-input" placeholder="Date of Birth *" value={form.dateOfBirth} onChange={set('dateOfBirth')} required />
                  </div>
                </div>
                <div className="form-group">
                  <input className="form-input" placeholder="Address *" value={form.address} onChange={set('address')} required />
                </div>
                <div className="step-buttons">
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}><i className="fas fa-arrow-left" /> Back</button>
                  <button type="button" className="btn btn-primary" onClick={() => canNext() && setStep(3)} disabled={!canNext()}>Continue <i className="fas fa-arrow-right" /></button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="step-content">
                <div className="form-group">
                  <div className="input-with-icon password-input">
                    <i className="fas fa-lock" />
                    <input type={showPassword ? 'text' : 'password'} className="form-input" placeholder="Password *" value={form.password} onChange={set('password')} required minLength={12} maxLength={128} autoComplete="new-password" />
                    <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                      <i className={`fas fa-eye${showPassword ? '-slash' : ''}`} />
                    </button>
                  </div>
                  <small className="text-muted text-xs">Use 12–128 characters. A unique passphrase is recommended.</small>
                </div>
                <div className="form-group">
                  <div className="input-with-icon password-input">
                    <i className="fas fa-lock" />
                    <input type={showConfirm ? 'text' : 'password'} className="form-input" placeholder="Confirm Password *" value={form.confirmPassword} onChange={set('confirmPassword')} required />
                    <button type="button" className="toggle-password" onClick={() => setShowConfirm(!showConfirm)}>
                      <i className={`fas fa-eye${showConfirm ? '-slash' : ''}`} />
                    </button>
                  </div>
                  {form.confirmPassword && form.password !== form.confirmPassword && (
                    <span className="form-error">Passwords don't match</span>
                  )}
                </div>
                <div className="form-group consent-group">
                  <label className="consent-label">
                    <input type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} />
                    <span>I accept the <Link to="/terms" target="_blank" rel="noreferrer">Terms & Conditions</Link>.</span>
                  </label>
                  <label className="consent-label">
                    <input type="checkbox" checked={privacyAccepted} onChange={e => setPrivacyAccepted(e.target.checked)} />
                    <span>I acknowledge the <Link to="/privacy" target="_blank" rel="noreferrer">Privacy Policy</Link>.</span>
                  </label>
                  <label className="consent-label">
                    <input type="checkbox" checked={marketingConsent} onChange={e => setMarketingConsent(e.target.checked)} />
                    <span>Send me optional DoForYou product updates and offers.</span>
                  </label>
                </div>
                <div className="step-buttons">
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}><i className="fas fa-arrow-left" /> Back</button>
                  <button type="submit" className="btn btn-primary" disabled={loading || form.password.length < 12 || form.password.length > 128 || form.password !== form.confirmPassword || !termsAccepted || !privacyAccepted}>
                    {loading ? <><span className="spinner spinner-sm" /> Creating...</> : 'Create Account'}
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="auth-switch">
            Already have an account?{' '}
            <Link
              to={returnToTaskId ? `/login?returnToTaskId=${encodeURIComponent(returnToTaskId)}` : '/login'}
              state={returnToTaskId ? { returnToTaskId } : undefined}
            >Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
