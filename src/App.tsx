import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Track from './pages/Track'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Login from './pages/Login'
import Send from './pages/Send'
import Careers from './pages/Careers'
import Locations from './pages/Locations'
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
import ProhibitedItems from './pages/ProhibitedItems'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import Overview from './pages/dashboard/Overview'

const publicLayoutStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={publicLayoutStyle}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/track"
          element={
            <PublicLayout>
              <Track />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          }
        />
        <Route
          path="/privacy"
          element={
            <PublicLayout>
              <PrivacyPolicy />
            </PublicLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <PublicLayout>
              <TermsAndConditions />
            </PublicLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />
        <Route
          path="/send"
          element={
            <PublicLayout>
              <Send />
            </PublicLayout>
          }
        />

        <Route
          path="/careers"
          element={
            <PublicLayout>
              <Careers />
            </PublicLayout>
          }
        />

        <Route
          path="/locations"
          element={
            <PublicLayout>
              <Locations />
            </PublicLayout>
          }
        />

        <Route
          path="/blog"
          element={
            <PublicLayout>
              <Blog />
            </PublicLayout>
          }
        />

        <Route
          path="/pricing"
          element={
            <PublicLayout>
              <Pricing />
            </PublicLayout>
          }
        />

        <Route
          path="/prohibited-items"
          element={
            <PublicLayout>
              <ProhibitedItems />
            </PublicLayout>
          }
        />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
