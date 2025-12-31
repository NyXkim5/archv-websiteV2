import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Solutions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ink");

  const inkWorkflows = [
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
      title: "Document Generation",
      description:
        "Create any document from templates or from scratch. Word, PDF, PowerPoint — export in any format with one click.",
    },
    {
      number: "04",
      title: "Data Extraction & Analysis",
      description:
        "Extract data from documents, spreadsheets, images. Transform unstructured data into structured insights. Export to any format.",
    },
    {
      number: "05",
      title: "Client Communications",
      description:
        "Generate client letters, status updates, and reports. Maintain consistent voice, ensure accuracy, and keep complete records.",
    },
    {
      number: "06",
      title: "Compliance Reporting",
      description:
        "Generate audit trails on demand. Export compliance reports for regulators. Every action logged, timestamped, and searchable.",
    },
  ];

  const irisWorkflows = [
    {
      number: "01",
      title: "RFP Response Scoring",
      description:
        "Automatically score vendor proposals against your evaluation criteria. Consistent, explainable scoring across hundreds of submissions.",
    },
    {
      number: "02",
      title: "Assignment Grading",
      description:
        "Grade student submissions at scale with rubric-aligned scoring. Provide detailed feedback and maintain consistency across instructors.",
    },
    {
      number: "03",
      title: "Vendor Evaluation Workflows",
      description:
        "Build automated evaluation pipelines. Define criteria, assign weights, route for review, and generate comparison reports.",
    },
    {
      number: "04",
      title: "Contract Bid Analysis",
      description:
        "Compare multiple contract bids side-by-side. Highlight key differences, score against requirements, recommend best fits.",
    },
    {
      number: "05",
      title: "Performance Tracking",
      description:
        "Track evaluation metrics over time. Monitor grading consistency, identify patterns, and generate progress reports.",
    },
    {
      number: "06",
      title: "Audit-Ready Documentation",
      description:
        "Every score explained. Every decision documented. Export complete evaluation records for compliance and appeals.",
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

  // Scribble icon for Ink
  const ScribbleIcon = ({ active }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#000" : "rgba(0,0,0,0.4)"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "all 0.3s ease",
        transform: active ? "rotate(-5deg)" : "rotate(0deg)",
      }}
    >
      <path d="M3 19c3.333-2 5-4 5-6 0-3-1-3-2-3s-2.5 1-2.5 3c0 1.5 1 2.5 2.5 2.5 2.5 0 4.5-1.5 6-4.5 1-2 2-3 3-3s1.5.5 1.5 1.5c0 1.5-1.5 3-3 4-1 .667-2 1.5-2 2.5 0 1.5 1 2 2 2s2.5-.5 4-2c1-1 2-2.5 2.5-4" />
    </svg>
  );

  // Eye icon for Iris
  const EyeIcon = ({ active }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#000" : "rgba(0,0,0,0.4)"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "all 0.3s ease",
      }}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle
        cx="12"
        cy="12"
        r="3"
        style={{
          transform: active ? "scale(1.1)" : "scale(1)",
          transformOrigin: "center",
          transition: "all 0.3s ease",
        }}
      />
    </svg>
  );

  return (
    <div className="page">
      {/* Styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-image-desktop {
            display: none !important;
          }
        }
        
        .tab-content {
          animation: fadeSlideIn 0.4s ease-out;
        }
        
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .product-tab {
          position: relative;
          overflow: hidden;
        }
        
        .product-tab::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #000;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .product-tab.active::after {
          transform: scaleX(1);
        }
        
        .product-tab:hover {
          background: rgba(0, 0, 0, 0.03);
        }
        
        .workflow-item {
          animation: fadeSlideIn 0.4s ease-out;
          animation-fill-mode: both;
        }
        
        .workflow-item:nth-child(1) { animation-delay: 0.05s; }
        .workflow-item:nth-child(2) { animation-delay: 0.1s; }
        .workflow-item:nth-child(3) { animation-delay: 0.15s; }
        .workflow-item:nth-child(4) { animation-delay: 0.2s; }
        .workflow-item:nth-child(5) { animation-delay: 0.25s; }
        .workflow-item:nth-child(6) { animation-delay: 0.3s; }
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

      {/* Products with Tabs */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Products</span>
            <h2 className="section-title">Two engines, one platform</h2>
          </div>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginTop: "40px",
            marginBottom: "40px",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            className={`product-tab ${activeTab === "ink" ? "active" : ""}`}
            onClick={() => setActiveTab("ink")}
            style={{
              padding: "16px 32px",
              fontSize: "16px",
              fontWeight: "500",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid transparent",
              color: activeTab === "ink" ? "#000" : "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginBottom: "-1px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ScribbleIcon active={activeTab === "ink"} />
            Archv Ink
          </button>
          <button
            className={`product-tab ${activeTab === "iris" ? "active" : ""}`}
            onClick={() => setActiveTab("iris")}
            style={{
              padding: "16px 32px",
              fontSize: "16px",
              fontWeight: "500",
              background: "transparent",
              border: "none",
              borderBottom: "2px solid transparent",
              color: activeTab === "iris" ? "#000" : "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginBottom: "-1px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <EyeIcon active={activeTab === "iris"} />
            Archv Iris
          </button>
        </div>

        {/* Ink Content */}
        {activeTab === "ink" && (
          <div className="tab-content" key="ink">
            <div
              style={{
                background: "rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "0",
                padding: "40px",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "#000",
                    margin: "0",
                  }}
                >
                  Archv Ink
                </h3>
                <span
                  style={{
                    fontSize: "12px",
                    padding: "4px 10px",
                    background: "rgba(0, 0, 0, 0.08)",
                    borderRadius: "0",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Document Intelligence
                </span>
              </div>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "rgba(0, 0, 0, 0.7)",
                  marginBottom: "24px",
                  maxWidth: "800px",
                }}
              >
                The AI-powered document platform for regulated industries.
                Process, analyze, and generate documents with full compliance
                tracking — a complete operating system for everything your team
                creates.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {[
                  "Contract Analysis",
                  "Document Generation",
                  "Research & Drafting",
                  "Data Extraction",
                  "Audit Trails",
                ].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "13px",
                      padding: "6px 12px",
                      background: "rgba(0, 0, 0, 0.05)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "0",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="features-list">
              {inkWorkflows.map((workflow, index) => (
                <div
                  key={workflow.number}
                  className="feature-item workflow-item"
                >
                  <span className="feature-number">{workflow.number}</span>
                  <h3 className="feature-title">{workflow.title}</h3>
                  <p className="feature-desc">{workflow.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Iris Content */}
        {activeTab === "iris" && (
          <div className="tab-content" key="iris">
            <div
              style={{
                background: "rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "0",
                padding: "40px",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "#000",
                    margin: "0",
                  }}
                >
                  Archv Iris
                </h3>
                <span
                  style={{
                    fontSize: "12px",
                    padding: "4px 10px",
                    background: "rgba(0, 0, 0, 0.08)",
                    borderRadius: "0",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Grading & Evaluation
                </span>
              </div>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "rgba(0, 0, 0, 0.7)",
                  marginBottom: "24px",
                  maxWidth: "800px",
                }}
              >
                Intelligent evaluation at scale. Whether you're scoring RFP
                responses, grading assignments, or evaluating vendor proposals —
                Iris delivers consistent, explainable results with automated
                workflows and complete audit trails.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {[
                  "RFP Scoring",
                  "Assignment Grading",
                  "Vendor Evaluation",
                  "Automated Workflows",
                  "Performance Tracking",
                ].map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "13px",
                      padding: "6px 12px",
                      background: "rgba(0, 0, 0, 0.05)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "0",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="features-list">
              {irisWorkflows.map((workflow, index) => (
                <div
                  key={workflow.number}
                  className="feature-item workflow-item"
                >
                  <span className="feature-number">{workflow.number}</span>
                  <h3 className="feature-title">{workflow.title}</h3>
                  <p className="feature-desc">{workflow.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
