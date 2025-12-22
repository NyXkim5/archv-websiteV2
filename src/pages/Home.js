import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPlaceholder from "../components/VideoPlaceholder";

function Home() {
  const navigate = useNavigate();

  const industries = [
    {
      id: "legal",
      number: "01",
      name: "Legal",
      description:
        "Draft briefs, review contracts, research case law, generate client letters — all compliant with attorney-client privilege and bar requirements.",
      features: [
        "Contract drafting & review",
        "Legal research & citations",
        "Client communication",
        "Privilege-protected workflows",
      ],
      icon: (
        <svg className="industry-icon" viewBox="0 0 48 48">
          <rect x="8" y="12" width="32" height="28" rx="1" />
          <path d="M16 12V8h16v4" />
          <path d="M16 24h16M16 32h10" />
        </svg>
      ),
    },
    {
      id: "healthcare",
      number: "02",
      name: "Healthcare",
      description:
        "Clinical documentation, patient summaries, research synthesis, intake forms — HIPAA-compliant from input to export.",
      features: [
        "Clinical notes & summaries",
        "Patient intake automation",
        "Medical research synthesis",
        "PHI-protected processing",
      ],
      icon: (
        <svg className="industry-icon" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="16" />
          <path d="M24 16v16M16 24h16" />
        </svg>
      ),
    },
    {
      id: "education",
      number: "03",
      name: "Education",
      description:
        "Lesson plans, student reports, curriculum development, administrative documents — FERPA-compliant with academic integrity built in.",
      features: [
        "Curriculum & lesson planning",
        "Student progress reports",
        "Administrative workflows",
        "Academic integrity protection",
      ],
      icon: (
        <svg className="industry-icon" viewBox="0 0 48 48">
          <path d="M8 20l16-8 16 8-16 8-16-8z" />
          <path d="M12 22v10c0 2 5.4 6 12 6s12-4 12-6V22" />
          <path d="M40 20v12" />
        </svg>
      ),
    },
    {
      id: "finance",
      number: "04",
      name: "Finance",
      description:
        "Reports, analysis, presentations, client communications — SEC, FINRA, and SOX compliant with full audit trails.",
      features: [
        "Financial report generation",
        "Regulatory compliance docs",
        "Client presentations",
        "Audit trail exports",
      ],
      icon: (
        <svg className="industry-icon" viewBox="0 0 48 48">
          <rect x="6" y="22" width="8" height="18" />
          <rect x="20" y="14" width="8" height="26" />
          <rect x="34" y="8" width="8" height="32" />
        </svg>
      ),
    },
  ];

  const capabilities = [
    {
      number: "01",
      title: "Create Any Document",
      description:
        "Word documents, PDFs, contracts, briefs, reports — generate professional documents in seconds. Export to any format, ready for clients or regulators.",
    },
    {
      number: "02",
      title: "Build Presentations",
      description:
        "Slide decks, pitch materials, board presentations — create polished PowerPoint and Google Slides directly in Archv. One click to export.",
    },
    {
      number: "03",
      title: "Process Any File",
      description:
        "Upload documents, images, spreadsheets, PDFs. Archv reads, analyzes, extracts, and transforms any file type into actionable output.",
    },
    {
      number: "04",
      title: "Microsoft Integration",
      description:
        "Native components for Word, PowerPoint, Outlook. Work inside the tools you already use with full compliance protection.",
    },
    {
      number: "05",
      title: "Complete Audit Logs",
      description:
        "Every action logged, timestamped, and exportable. Generate compliance reports for regulators in one click. Your audit trail, always ready.",
    },
    {
      number: "06",
      title: "One Platform, Everything",
      description:
        "Stop switching between tools. Research, draft, design, analyze, export — all in one place with one compliance layer protecting everything.",
    },
  ];

  const trustBadges = [
    { label: "SOC 2", sublabel: "In Progress" },
    { label: "HIPAA", sublabel: "Ready" },
    { label: "GDPR", sublabel: "Compliant" },
    { label: "AES-256", sublabel: "Encryption" },
  ];

  return (
    <div className="page">
      {/* Hero */}
      <section
        className="hero"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div
          className="hero-content"
          style={{ position: "relative", zIndex: 2 }}
        >
          <span className="hero-label">
            The Operating System for Regulated Industries
          </span>
          <h1 className="hero-title">
            One platform.
            <br />
            Everything you need.
            <br />
            Always compliant.
          </h1>
          <p className="hero-subtitle">
            Archv is the AI operating system for legal, healthcare, education,
            and finance. Create documents, build presentations, process files,
            export audit logs — all in one place, all compliant, all the time.
          </p>
          <button className="hero-cta" onClick={() => navigate("/contact")}>
            Request a Demo
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
          <div className="trust-badges">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <span className="trust-badge-label">{badge.label}</span>
                <span className="trust-badge-sublabel">{badge.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="hero-image"
          style={{
            position: "absolute",
            right: "-1150px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <img
            src="/visualcontent/HeroImg.svg"
            alt="Archv Platform"
            style={{
              width: "1350px",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* Data Promise */}
      <section className="data-promise">
        <div className="data-promise-content">
          <div className="data-promise-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" />
              <path d="M16 24l6 6 12-12" />
            </svg>
          </div>
          <h2 className="data-promise-title">
            Your data never trains AI models. Ever.
          </h2>
          <p className="data-promise-text">
            This isn't a toggle. It's how we built the platform. Your documents,
            communications, and outputs are never used to train any AI model —
            ours or anyone else's. Your data is yours alone.
          </p>
          <button
            className="data-promise-link"
            onClick={() => navigate("/security")}
          >
            Read our security promise
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </section>

      {/* Capabilities */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">Everything in one place</h2>
          </div>
          <p className="section-description">
            Whatever you need to do, Archv does it — with compliance built into
            every action. No more juggling tools. No more compliance gaps.
          </p>
        </div>
        <div className="features-list">
          {capabilities.map((capability) => (
            <div key={capability.number} className="feature-item">
              <span className="feature-number">{capability.number}</span>
              <h3 className="feature-title">{capability.title}</h3>
              <p className="feature-desc">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Industries</span>
            <h2 className="section-title">
              Built for your compliance requirements
            </h2>
          </div>
          <p className="section-description">
            One platform, configured for your industry. Same powerful OS,
            tailored compliance for your specific regulatory environment.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="industry-card"
              onClick={() => navigate(`/faq/${industry.id}`)}
            >
              {industry.icon}
              <span className="industry-number">{industry.number}</span>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-desc">{industry.description}</p>
              <ul className="industry-features">
                {industry.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <span className="industry-link">
                Learn more
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 6h8M7 3l3 3-3 3" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Demo */}
      <section className="demo-section">
        <div className="section-header">
          <div>
            <span className="section-label">See It In Action</span>
            <h2 className="section-title">The Archv OS</h2>
          </div>
        </div>
        <div className="demo-container">
          <div className="demo-video">
            <VideoPlaceholder label="Demo Video Coming Soon" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <span className="section-label">Get Started</span>
        <h2 className="section-title">Ready to do everything in one place?</h2>
        <p className="section-description">
          Join organizations running their entire workflow on Archv — the
          operating system built for regulated industries.
        </p>
        <button className="hero-cta" onClick={() => navigate("/contact")}>
          Request a Demo
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default Home;
