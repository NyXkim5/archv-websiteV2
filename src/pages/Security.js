import React from "react";
import { useNavigate } from "react-router-dom";

function Security() {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      number: "01",
      title: "Your Data Never Trains AI",
      description:
        "Zero training on your data. Ever. Your documents, communications, and outputs are never used to train any AI model — ours or anyone else's. This is non-negotiable.",
    },
    {
      number: "02",
      title: "Data Isolation",
      description:
        "Complete tenant isolation. Your data is logically and physically separated from other customers. No cross-contamination, no shared resources, no exceptions.",
    },
    {
      number: "03",
      title: "Encryption Everywhere",
      description:
        "AES-256 encryption at rest. TLS 1.3 in transit. Your data is encrypted from the moment it enters Archv until the moment it leaves.",
    },
    {
      number: "04",
      title: "Access Controls",
      description:
        "Role-based access control (RBAC) with granular permissions. SSO integration with your identity provider. MFA enforced.",
    },
    {
      number: "05",
      title: "Audit Everything",
      description:
        "Every action logged. Every access recorded. Every output tracked. Tamper-evident audit logs exportable on demand.",
    },
    {
      number: "06",
      title: "Data Residency",
      description:
        "Choose where your data lives. US, EU, or your own infrastructure. On-premise deployment available for organizations that require it.",
    },
  ];

  const compliance = [
    {
      name: "SOC 2 Type II",
      status: "Ready",
      description:
        "Security, availability, and confidentiality controls audited by independent third party.",
    },
    {
      name: "HIPAA",
      status: "Ready",
      description:
        "BAA available. PHI detection and protection built in. Healthcare-ready from day one.",
    },
    {
      name: "GDPR",
      status: "Compliant",
      description:
        "Data processing agreements available. EU data residency option. Right to deletion supported.",
    },
    {
      name: "CCPA",
      status: "Compliant",
      description:
        "California privacy requirements met. Consumer data rights fully supported.",
    },
  ];

  const faq = [
    {
      question: "Where does my data live?",
      answer:
        "By default, data is stored in secure US data centers (AWS). EU data residency and on-premise deployment are available for enterprise customers.",
    },
    {
      question: "Who has access to my data?",
      answer:
        "Only authorized users in your organization. Archv employees cannot access your data without explicit permission for support purposes, and all access is logged.",
    },
    {
      question: "What happens if I delete my account?",
      answer:
        "All your data is permanently deleted within 30 days. We provide data export tools so you can take everything with you.",
    },
    {
      question: "Do you have a SOC 2 report?",
      answer:
        "SOC 2 Type II certification is active. Contact us for our current security documentation and audit reports.",
    },
  ];

  // Security Visual Component
  const SecurityVisual = () => (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
      }}
    >
      {/* Outer rotating ring */}
      <div
        style={{
          position: "absolute",
          inset: "0",
          border: "1px dashed rgba(0,0,0,0.1)",
          borderRadius: "50%",
          animation: "spin 30s linear infinite",
        }}
      >
        {/* Orbiting dots */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              background: "#000",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(200px) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      {/* Middle ring */}
      <div
        style={{
          position: "absolute",
          inset: "60px",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "50%",
          animation: "spin 20s linear infinite reverse",
        }}
      >
        {[45, 135, 225, 315].map((deg, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(140px) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      {/* Inner ring */}
      <div
        style={{
          position: "absolute",
          inset: "120px",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "50%",
        }}
      />

      {/* Center shield */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120px",
          height: "120px",
          background: "#000",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      {/* Floating security badges */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "40px",
          padding: "8px 16px",
          background: "white",
          borderRadius: "100px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        AES-256
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "20px",
          padding: "8px 16px",
          background: "white",
          borderRadius: "100px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          animation: "float 3s ease-in-out infinite 0.5s",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        SOC 2
      </div>

      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "10px",
          padding: "8px 16px",
          background: "white",
          borderRadius: "100px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          animation: "float 3s ease-in-out infinite 1s",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
        >
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        HIPAA Ready
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );

  return (
    <div className="page">
      <section
        className="page-hero"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          minHeight: "500px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
          marginLeft: "-100vw",
          marginRight: "-100vw",
          paddingLeft: "100vw",
          paddingRight: "100vw",
        }}
      >
        <div
          style={{ flex: "0 0 500px", maxWidth: "500px", marginLeft: "70px" }}
        >
          <span className="section-label">Security</span>
          <h1 className="section-title">
            Your data is yours.
            <br />
            Period.
          </h1>
          <p className="section-description">
            We built Archv for the most security-conscious organizations in the
            world. Your data never trains AI models. Every action is logged.
            Every byte is encrypted.
          </p>
        </div>
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "calc(100vw - 1200px)",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <SecurityVisual />
        </div>
      </section>

      {/* Security Features */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Security Architecture</span>
            <h2 className="section-title">Built for regulated industries</h2>
          </div>
        </div>
        <div className="features-list">
          {securityFeatures.map((feature) => (
            <div key={feature.number} className="feature-item">
              <span className="feature-number">{feature.number}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Compliance</span>
            <h2 className="section-title">Certifications & Standards</h2>
          </div>
        </div>
        <div className="compliance-grid">
          {compliance.map((item, index) => (
            <div key={index} className="compliance-card">
              <div className="compliance-header">
                <h3 className="compliance-name">{item.name}</h3>
                <span
                  className={`compliance-status ${item.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="compliance-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security FAQ */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Security FAQ</span>
            <h2 className="section-title">Questions your team will ask</h2>
          </div>
        </div>
        <div className="security-faq">
          {faq.map((item, index) => (
            <div key={index} className="security-faq-item">
              <h3 className="security-faq-question">{item.question}</h3>
              <p className="security-faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <span className="section-label">Talk to Us</span>
        <h2 className="section-title">Security questions?</h2>
        <p className="section-description">
          We're happy to walk through our security architecture or complete your
          security questionnaire.
        </p>
        <button className="hero-cta" onClick={() => navigate("/contact")}>
          Contact Security Team
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

export default Security;
