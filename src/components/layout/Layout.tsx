import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Header from './Header'
import Footer from './Footer'
import BackButton from '../shared/BackButton'
import BottomNav from '../shared/BottomNav'
import AdminShell from './AdminShell'
import UserDashboardShell from './UserDashboardShell'

const PUBLIC_ROUTES = ['/', '/about', '/contact', '/terms', '/how-it-works', '/for-creators', '/for-runners', '/faq', '/payments-and-completion', '/tasks/browse', '/payments/success', '/payments/cancelled']
const USER_WORKSPACE_ROUTES = ['/dashboard', '/tasks/post', '/tasks/browse', '/tasks/my-posted', '/tasks/action-required', '/tasks/my-active', '/tasks/my-completed', '/activity', '/notifications', '/messages', '/user/profile', '/user/bank-accounts']

export default function Layout() {
  const { pathname } = useLocation()
  const { user, loading, loginTransitioning, isAuthenticated, isAdmin } = useAuth()
  const showFooter = PUBLIC_ROUTES.includes(pathname)
  const isAdminRoute = pathname.startsWith('/admin')
  const isUserWorkspaceRoute = USER_WORKSPACE_ROUTES.includes(pathname) || /^\/tasks\/[^/]+\/chat$/.test(pathname)

  if (isAdminRoute) return <div className="page-wrapper admin-page-wrapper"><AdminShell /></div>
  if (isUserWorkspaceRoute && !loading && isAuthenticated() && user && isAdmin()) return <Navigate to="/admin/dashboard" replace />

  if ((pathname === '/login' || pathname === '/register') && loginTransitioning) {
    return <div className="page-wrapper user-dashboard-page-wrapper" aria-busy="true"><div className="loading-screen"><div className="spinner" /></div></div>
  }
  if ((pathname === '/login' || pathname === '/register') && !loading && isAuthenticated() && user) {
    return <Navigate to={isAdmin() ? '/admin/dashboard' : '/dashboard'} replace />
  }
  if (isUserWorkspaceRoute && loading) return <div className="page-wrapper user-dashboard-page-wrapper" aria-busy="true" />
  if (isUserWorkspaceRoute && !loading && isAuthenticated() && user) {
    return <div className="page-wrapper user-dashboard-page-wrapper"><UserDashboardShell><Outlet /></UserDashboardShell></div>
  }

  return <div className="page-wrapper">
    <Header />
    <main id="main-content" className="main-content" tabIndex={-1}><Outlet /></main>
    {showFooter && <Footer />}
    <BottomNav />
    <BackButton />
  </div>
}