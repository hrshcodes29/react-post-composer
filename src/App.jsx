import React from 'react';
import PostComposer from './PostComposer.jsx';
import { PenSquare, Sparkles, CheckCheck, ShieldCheck, Zap } from 'lucide-react';

function App() {
  return (
    <div className="app-wrapper">
      {/* Background Glows */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* Navigation / Header */}
      <header className="app-header">
        <div className="header-container">
          <div className="logo-group">
            <div className="logo-icon-box">
              <PenSquare className="logo-icon" size={24} />
            </div>
            <div>
              <h1 className="app-title">PostComposer <span className="version-pill">v1.0</span></h1>
              <p className="app-subtitle">Multi-Platform Social Media Content Studio</p>
            </div>
          </div>
          <div className="header-badges">
            <span className="pill-badge">
              <Zap size={14} /> Real-Time Validation
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="hero-intro">
          <h2 className="hero-heading">Craft Perfectly Sized Social Posts</h2>
          <p className="hero-subtext">
            Switch between <strong>Twitter (280 chars)</strong> and <strong>LinkedIn (3,000 chars)</strong>. 
            Track character limits dynamically and preview your post in real time before publishing.
          </p>
        </div>

        {/* Post Composer Component */}
        <PostComposer />

        {/* Feature Highlights section */}
        <section className="features-grid" aria-label="Feature Highlights">
          <div className="feature-card">
            <div className="feature-icon icon-blue">
              <Zap size={20} />
            </div>
            <div className="feature-text">
              <h3>Dynamic Character Limits</h3>
              <p>Instant limit updates when switching between Twitter (280) and LinkedIn (3000).</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-purple">
              <Sparkles size={20} />
            </div>
            <div className="feature-text">
              <h3>Live Social Preview</h3>
              <p>Simulate how your content looks with authentic Twitter and LinkedIn post cards.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon icon-emerald">
              <CheckCheck size={20} />
            </div>
            <div className="feature-text">
              <h3>Zero-Friction Copy</h3>
              <p>One-click clipboard copy, quick tag insertions, and sample starter templates.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <p>
            Built with <strong>React</strong> &amp; <strong>Vite</strong> • Controlled Component State Architecture
          </p>
          <div className="footer-links">
            <span>Twitter (280 chars)</span>
            <span className="dot-sep">•</span>
            <span>LinkedIn (3,000 chars)</span>
            <span className="dot-sep">•</span>
            <span>Responsive Design</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
