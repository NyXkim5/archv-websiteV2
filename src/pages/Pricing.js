import React from "react";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  const included = [
    {
      feature: "Unlimited users",
      desc: "Scale your team without per-seat costs",
    },
    {
      feature: "Document generation",
      desc: "Create compliant documents in seconds",
    },
    {
      feature: "Microsoft Office integration",
      desc: "Word, Excel, PowerPoint — all connected",
    },
    {
      feature: "Full audit logging",
      desc: "Every action tracked and exportable",
    },
    {
      feature: "Role-based access control",
      desc: "Granular permissions for your team",
    },
    { feature: "SSO & MFA", desc: "Enterprise-grade authentication" },
    { feature: "API access", desc: "Build custom integrations" },
    { feature: "Priority support", desc: "Direct line to our team" },
  ];

  const upgrades = [
    {
      name: "On-premise deployment",
      desc: "Run Archv on your own infrastructure",
    },
    { name: "Custom integrations", desc: "Connect to your existing systems" },
    {
      name: "Dedicated success manager",
      desc: "White-glove onboarding and support",
    },
    {
      name: "Custom compliance modules",
      desc: "Industry-specific configurations",
    },
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <span className="section-label">Pricing</span>
        <h1 className="section-title">One platform. One price.</h1>
        <p className="section-description">
          No per-seat fees. No feature gating. Get everything you need to run
          compliant AI workflows across your entire organization.
        </p>
      </section>

      {/* Main Pricing Card */}
      <section>
        <div
          style={{
            background: "#000",
            padding: "clamp(40px, 6vw, 80px)",
            color: "#fff",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                padding: "8px 16px",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "11px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "32px",
              }}
            >
              All-inclusive
            </span>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: "400",
                marginBottom: "24px",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                fontStyle: "italic",
              }}
            >
              Custom pricing for your organization
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.7",
                marginBottom: "48px",
                maxWidth: "400px",
              }}
            >
              We tailor pricing to your team size, usage, and compliance needs.
              No surprises, no hidden fees.
            </p>
            <button
              onClick={() => navigate("/contact")}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                padding: "18px 36px",
                fontSize: "13px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.2s ease",
              }}
            >
              Get a Quote
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              paddingLeft: "48px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "24px",
              }}
            >
              Everything included
            </span>
            {included.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom:
                    index < included.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                >
                  <path d="M3 8l4 4 6-8" />
                </svg>
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  {item.feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Detail */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">What You Get</span>
            <h2 className="section-title">Everything to run compliant AI</h2>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.08)",
          }}
        >
          {included.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "32px",
                background: "#fff",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#999",
                  marginBottom: "16px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "12px",
                }}
              >
                {item.feature}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrades */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Add-ons</span>
            <h2 className="section-title">Available upgrades</h2>
          </div>
          <p className="section-description">
            Need more? These enterprise add-ons are available for organizations
            with specific requirements.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.08)",
          }}
        >
          {upgrades.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "32px",
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "6px",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666",
                  }}
                >
                  {item.desc}
                </p>
              </div>
              <span
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  fontSize: "11px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#666",
                }}
              >
                Add-on
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common questions</h2>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {[
            {
              q: "How does pricing work?",
              a: "We price based on your organization size and usage patterns. No per-seat fees — your whole team gets access.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes. We offer a 14-day pilot program so you can test Archv with your actual workflows before committing.",
            },
            {
              q: "What about compliance certifications?",
              a: "All plans include our full compliance suite — SOC 2, HIPAA-ready, GDPR compliant. No extra charge.",
            },
            {
              q: "Can I switch plans later?",
              a: "Absolutely. As your needs grow, we'll adjust your plan. Upgrades are seamless with no downtime.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "32px",
                background: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  marginBottom: "12px",
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.7",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 24px",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          marginTop: "80px",
        }}
      >
        <span className="section-label">Get Started</span>
        <h2 className="section-title">Ready to see Archv in action?</h2>
        <p
          className="section-description"
          style={{ maxWidth: "460px", margin: "0 auto 40px" }}
        >
          Book a demo and we'll show you how Archv can transform your workflows.
        </p>
        <button
          onClick={() => navigate("/contact")}
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "18px 40px",
            fontSize: "13px",
            fontWeight: "500",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          Request a Demo
          <svg
            width="14"
            height="14"
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

export default Pricing;
