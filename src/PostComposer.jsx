import React, { useState } from 'react';
import {
  Twitter,
  Linkedin,
  AlertCircle,
  CheckCircle2,
  Copy,
  Trash2,
  Sparkles,
  Share2,
  Eye,
  Edit3,
  ThumbsUp,
  MessageSquare,
  Repeat,
  Heart,
  Bookmark
} from 'lucide-react';

// Platform configuration with respective character limits and branding
const PLATFORM_CONFIG = {
  twitter: {
    id: 'twitter',
    name: 'Twitter / X',
    shortName: 'Twitter',
    limit: 280,
    accentColor: '#1DA1F2',
    bgLight: 'rgba(29, 161, 242, 0.08)',
    handle: '@developer_pro',
    author: 'Alex Morgan',
    role: 'Frontend Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    placeholder: "What's happening? Share a quick update, thought, or thread starter...",
    sampleText: '🚀 Just launched our brand new React Post Composer! Built with React useState, real-time character counters for Twitter & LinkedIn, and responsive live previews. Check it out! #ReactJS #WebDev #BuildInPublic'
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    shortName: 'LinkedIn',
    limit: 3000,
    accentColor: '#0A66C2',
    bgLight: 'rgba(10, 102, 194, 0.08)',
    handle: 'in/alexmorgan',
    author: 'Alex Morgan',
    role: 'Staff Software Engineer • Building scalable web systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    placeholder: 'What do you want to talk about? Share an insight, story, job update, or case study...',
    sampleText: '💡 3 Key Lessons I Learned While Building Responsive React Applications\n\n1. State Management Simplicity: Keeping state close to where it is used (like useState for form controls) makes code cleaner and easier to test.\n\n2. Real-Time Feedback Matters: Giving users dynamic visual feedback—such as character count progress bars and instant validation—dramatically improves the authoring experience.\n\n3. Responsive Design First: Always design for mobile screens and scale up gracefully.\n\nWhat are your favorite practices when designing UI forms?\n\n#SoftwareEngineering #React #Frontend #WebDevelopment #CareerAdvice'
  }
};

const PostComposer = () => {
  // State management using React useState as required
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('twitter');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('compose'); // 'compose' | 'preview'

  const activeConfig = PLATFORM_CONFIG[platform];
  const charLimit = activeConfig.limit;
  const charCount = content.length;
  const remainingChars = charLimit - charCount;
  const isLimitExceeded = charCount > charLimit;
  const percentageUsed = Math.min(100, Math.round((charCount / charLimit) * 100));

  // Handle textarea changes (Controlled component pattern)
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Handle platform change
  const handlePlatformChange = (newPlatform) => {
    setPlatform(newPlatform);
  };

  // Handle copy to clipboard
  const handleCopy = async () => {
    if (!content.trim()) return;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Clear text
  const handleClear = () => {
    setContent('');
  };

  // Insert sample template
  const handleLoadSample = () => {
    setContent(activeConfig.sampleText);
  };

  // Insert hashtag helper
  const handleInsertTag = (tag) => {
    setContent((prev) => (prev ? `${prev} ${tag}` : tag));
  };

  return (
    <div className="composer-container">
      {/* Platform Selector */}
      <section className="platform-selection-area" aria-label="Select Platform">
        <label className="section-label">Select Target Platform</label>
        <div className="platform-toggle-group">
          {/* Twitter Option */}
          <button
            type="button"
            className={`platform-btn twitter-btn ${platform === 'twitter' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('twitter')}
            aria-pressed={platform === 'twitter'}
            id="platform-twitter-btn"
          >
            <div className="platform-btn-icon">
              <Twitter size={20} className="icon-twitter" />
            </div>
            <div className="platform-btn-info">
              <span className="platform-name">Twitter</span>
              <span className="platform-badge">280 max</span>
            </div>
          </button>

          {/* LinkedIn Option */}
          <button
            type="button"
            className={`platform-btn linkedin-btn ${platform === 'linkedin' ? 'active' : ''}`}
            onClick={() => handlePlatformChange('linkedin')}
            aria-pressed={platform === 'linkedin'}
            id="platform-linkedin-btn"
          >
            <div className="platform-btn-icon">
              <Linkedin size={20} className="icon-linkedin" />
            </div>
            <div className="platform-btn-info">
              <span className="platform-name">LinkedIn</span>
              <span className="platform-badge">3,000 max</span>
            </div>
          </button>
        </div>
      </section>

      {/* Main Composer & Preview Grid */}
      <div className="composer-grid">
        {/* Editor Box */}
        <section className={`editor-card ${isLimitExceeded ? 'border-danger' : ''}`}>
          {/* Card Header with Tab switcher on mobile & actions */}
          <div className="card-header">
            <div className="header-left">
              <div className="platform-indicator" style={{ color: activeConfig.accentColor }}>
                {platform === 'twitter' ? <Twitter size={18} /> : <Linkedin size={18} />}
                <span>Composing for <strong>{activeConfig.name}</strong></span>
              </div>
            </div>

            <div className="header-actions">
              <button
                type="button"
                className="btn-text"
                onClick={handleLoadSample}
                title="Load sample post template"
                id="load-sample-btn"
              >
                <Sparkles size={14} />
                <span>Sample</span>
              </button>
              {content && (
                <button
                  type="button"
                  className="btn-text btn-text-danger"
                  onClick={handleClear}
                  title="Clear text"
                  id="clear-btn"
                >
                  <Trash2 size={14} />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          {/* Controlled Textarea */}
          <div className="textarea-wrapper">
            <textarea
              id="post-content-input"
              className={`post-textarea ${isLimitExceeded ? 'textarea-error' : ''}`}
              placeholder={activeConfig.placeholder}
              value={content}
              onChange={handleContentChange}
              rows={8}
              aria-label="Post Content Input"
            />
          </div>

          {/* Quick tags bar */}
          <div className="quick-tags-bar">
            <span className="quick-tags-title">Quick Tags:</span>
            {platform === 'twitter' ? (
              <>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#ReactJS')}>#ReactJS</button>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#WebDev')}>#WebDev</button>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#BuildInPublic')}>#BuildInPublic</button>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#TechTrends')}>#TechTrends</button>
              </>
            ) : (
              <>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#Leadership')}>#Leadership</button>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#SoftwareEngineering')}>#SoftwareEngineering</button>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#TechCareer')}>#TechCareer</button>
                <button type="button" className="tag-chip" onClick={() => handleInsertTag('#Innovation')}>#Innovation</button>
              </>
            )}
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div
              className={`progress-bar-fill ${
                isLimitExceeded ? 'fill-danger' : percentageUsed > 85 ? 'fill-warning' : 'fill-primary'
              }`}
              style={{ width: `${percentageUsed}%` }}
            />
          </div>

          {/* Card Footer: Dynamic Counter and Status */}
          <div className="card-footer">
            <div className="counter-container">
              <span className={`counter-badge ${isLimitExceeded ? 'counter-danger' : ''}`}>
                <span className="current-count">{charCount.toLocaleString()}</span>
                <span className="count-divider"> / </span>
                <span className="max-count">{charLimit.toLocaleString()}</span>
              </span>

              <span className={`remaining-indicator ${isLimitExceeded ? 'text-danger' : ''}`}>
                {isLimitExceeded ? (
                  `(${Math.abs(remainingChars).toLocaleString()} over limit)`
                ) : (
                  `${remainingChars.toLocaleString()} left`
                )}
              </span>
            </div>

            <div className="footer-action-buttons">
              <button
                type="button"
                className={`btn-action btn-copy ${copied ? 'btn-copied' : ''}`}
                onClick={handleCopy}
                disabled={!content.trim()}
                id="copy-post-btn"
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Post</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Explicit Error Banner when limit is exceeded */}
          {isLimitExceeded && (
            <div className="alert-banner alert-danger" role="alert" id="character-limit-alert">
              <AlertCircle size={18} className="alert-icon" />
              <div className="alert-text">
                <strong>Character limit exceeded!</strong>
                <p>
                  Your post is <strong>{charCount - charLimit}</strong> characters over the{' '}
                  {activeConfig.shortName} limit of {charLimit.toLocaleString()} characters. Please trim your content before publishing.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Live Social Preview Card */}
        <section className="preview-card" aria-label="Live Preview">
          <div className="preview-card-header">
            <div className="preview-title">
              <Eye size={16} />
              <span>Live {activeConfig.shortName} Preview</span>
            </div>
            <span className="preview-badge">Live Mockup</span>
          </div>

          {platform === 'twitter' ? (
            /* Twitter Mockup */
            <div className="twitter-preview-box">
              <div className="tweet-header">
                <img src={activeConfig.avatar} alt="Profile" className="user-avatar" />
                <div className="tweet-user-info">
                  <div className="user-names">
                    <span className="display-name">{activeConfig.author}</span>
                    <span className="user-handle">{activeConfig.handle}</span>
                    <span className="tweet-dot">·</span>
                    <span className="tweet-time">Just now</span>
                  </div>
                  <span className="user-role-badge">{activeConfig.role}</span>
                </div>
              </div>

              <div className="tweet-body">
                {content ? (
                  <p className="tweet-text">{content}</p>
                ) : (
                  <p className="tweet-text placeholder-text">
                    Your tweet will appear here in real-time as you type in the editor...
                  </p>
                )}
              </div>

              <div className="tweet-actions">
                <span className="tweet-action"><MessageSquare size={16} /> <span>12</span></span>
                <span className="tweet-action"><Repeat size={16} /> <span>8</span></span>
                <span className="tweet-action"><Heart size={16} /> <span>48</span></span>
                <span className="tweet-action"><Bookmark size={16} /></span>
                <span className="tweet-action"><Share2 size={16} /></span>
              </div>
            </div>
          ) : (
            /* LinkedIn Mockup */
            <div className="linkedin-preview-box">
              <div className="linkedin-post-header">
                <img src={activeConfig.avatar} alt="Profile" className="user-avatar" />
                <div className="linkedin-user-details">
                  <div className="author-row">
                    <span className="display-name">{activeConfig.author}</span>
                    <span className="connection-degree">• 1st</span>
                  </div>
                  <span className="linkedin-headline">{activeConfig.role}</span>
                  <span className="linkedin-meta">Just now • 🌐</span>
                </div>
              </div>

              <div className="linkedin-post-body">
                {content ? (
                  <p className="linkedin-text">{content}</p>
                ) : (
                  <p className="linkedin-text placeholder-text">
                    Your LinkedIn post will appear here in real-time as you type in the editor...
                  </p>
                )}
              </div>

              <div className="linkedin-reactions-stats">
                <span className="reactions-icons">👍 💡 ❤️ <span>42 reactions</span></span>
                <span>8 comments • 3 reposts</span>
              </div>

              <div className="linkedin-action-bar">
                <button type="button" className="linkedin-action-btn"><ThumbsUp size={16} /> <span>Like</span></button>
                <button type="button" className="linkedin-action-btn"><MessageSquare size={16} /> <span>Comment</span></button>
                <button type="button" className="linkedin-action-btn"><Repeat size={16} /> <span>Repost</span></button>
                <button type="button" className="linkedin-action-btn"><Share2 size={16} /> <span>Send</span></button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PostComposer;
