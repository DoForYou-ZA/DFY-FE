import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { authApi } from '../../api'
import './Auth.css'

export default function VerifyEmail() {
  const [params] = useSearchParams()
  const token = params.get('token') || ''
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(token ? 'loading' : 'error')
  const [message, setMessage] = useState(token ? 'Verifying your email address…' : 'This verification link is missing its token.')

  useEffect(() => {
    if (!token) return
    window.history.replaceState(window.history.state, '', window.location.pathname)
    let active = true
    authApi.verifyEmail(token).then((response) => {
      if (!active) return
      if (response.data?.success) {
        setStatus('success')
        setMessage(response.data.message || 'Your email is verified. You can sign in.')
      } else {
        setStatus('error')
        setMessage(response.data?.message || 'This verification link is invalid or has expired.')
      }
    }).catch((error: any) => {
      if (!active) return
      setStatus('error')
      setMessage(error.response?.data?.message || 'This verification link is invalid or has expired. Request a new one.')
    })
    return () => { active = false }
  }, [token])

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-single">
        <div className="auth-form-side">
          <h1>{status === 'success' ? 'Email verified' : status === 'loading' ? 'Verifying email' : 'Verification needed'}</h1>
          <p className="auth-subtitle" role="status">{message}</p>
          {status === 'error' && <p className="auth-switch"><Link to="/login">Return to sign in</Link> or request another verification email.</p>}
          {status === 'success' && <Link className="btn btn-primary btn-block btn-lg" to="/login">Continue to sign in</Link>}
          {status === 'error' && <Link className="btn btn-primary btn-block btn-lg" to="/login">Go to sign in</Link>}
        </div>
      </div>
    </div>
  )
}
