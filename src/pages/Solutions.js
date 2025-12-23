import React from "react";
import { useNavigate } from "react-router-dom";

function Solutions() {
  const navigate = useNavigate();

  const workflows = [
    {
      number: "01",
      title: "Contract Review & Analysis",
      description:
        "Upload any contract. Archv extracts key terms, identifies risks, compares against your standards, and generates a summary memo — all logged for compliance.",
    },
    {
      number: "02",
      title: "Research & Brief Drafting",
      description:
        "Research case law, synthesize findings, draft briefs with proper citations. Every source tracked, every draft versioned, every output audit-ready.",
    },
    {
      number: "03",
      title: "Client Communications",
      description:
        "Generate client letters, status updates, and reports. Maintain consistent voice, ensure accuracy, and keep complete records of all communications.",
    },
    {
      number: "04",
      title: "Document Generation",
      description:
        "Create any document from templates or from scratch. Word, PDF, PowerPoint — export in any format with one click.",
    },
    {
      number: "05",
      title: "Data Extraction & Analysis",
      description:
        "Extract data from documents, spreadsheets, images. Transform unstructured data into structured insights. Export to any format.",
    },
    {
      number: "06",
      title: "Compliance Reporting",
      description:
        "Generate audit trails on demand. Export compliance reports for regulators. Every action logged, timestamped, and searchable.",
    },
  ];

  const integrations = [
    { name: "Microsoft Word", desc: "Native add-in for document drafting" },
    {
      name: "Microsoft PowerPoint",
      desc: "Create presentations without leaving PowerPoint",
    },
    {
      name: "Microsoft Outlook",
      desc: "Draft emails with compliance protection",
    },
    {
      name: "Document Management",
      desc: "Connect to iManage, NetDocuments, and more",
    },
  ];

  return (
    <div className="page">
      {/* Mobile-hide styles for hero image */}
      <style>{`
        @media (max-width: 768px) {
          .hero-image-desktop {
            display: none !important;
          }
        }
      `}</style>

      <section
        className="page-hero"
        style={{ position: "relative", overflow: "visible" }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <span className="section-label">Solutions</span>
          <h1 className="section-title">
            One platform.
            <br />
            Every workflow.
          </h1>
          <p className="section-description">
            Archv isn't just another AI tool. It's the operating system that
            runs your entire workflow — documents, presentations, research,
            analysis, communications — all with compliance built in.
          </p>
        </div>
        <div
          className="hero-image-desktop"
          style={{
            position: "absolute",
            right: "-700px",
            top: "50%",
            transform: "translateY(calc(-50% + 30px))",
            zIndex: 1,
          }}
        >
          <img
            src="/visualcontent/ARCHV (5).svg"
            alt="Archv Solutions"
            style={{
              width: "900px",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* Workflows */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Workflows</span>
            <h2 className="section-title">What you can do</h2>
          </div>
          <p className="section-description"></p>
        </div>
        <div className="features-list">
          {workflows.map((workflow) => (
            <div key={workflow.number} className="feature-item">
              <span className="feature-number">{workflow.number}</span>
              <h3 className="feature-title">{workflow.title}</h3>
              <p className="feature-desc">{workflow.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Integrations</span>
            <h2 className="section-title">Works where you work</h2>
          </div>
          <p className="section-description">
            Native integrations with the tools you already use.
          </p>
        </div>
        <div className="industries-grid">
          {integrations.map((integration, index) => (
            <div key={index} className="industry-card">
              <h3 className="industry-name">{integration.name}</h3>
              <p className="industry-desc">{integration.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <span className="section-label">Get Started</span>
        <h2 className="section-title">Ready to streamline your workflow?</h2>
        <p className="section-description">
          See how Archv can transform how your team works — with compliance
          built in.
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

export default Solutions;
