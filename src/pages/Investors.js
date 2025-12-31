import React from "react";
import Timeline from "../components/Timeline";

function Investors() {
  const handleDownloadDeck = () => {
    alert("Pitch deck download coming soon");
  };

  return (
    <div className="page">
      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-image-desktop {
            display: none !important;
          }
          .investor-hero {
            padding: 40px 20px !important;
          }
          .investor-content {
            padding: 0 !important;
          }
          .investor-buttons {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .investor-buttons .download-deck {
            width: 100% !important;
            justify-content: center !important;
          }
          .why-now-grid {
            grid-template-columns: 1fr !important;
          }
          .market-grid {
            grid-template-columns: 1fr !important;
          }
          .business-model-grid {
            grid-template-columns: 1fr !important;
          }
          .timeline-with-visual {
            flex-direction: column !important;
            padding: 0 !important;
          }
          .timeline-container {
            flex: 1 1 auto !important;
            width: 100% !important;
          }
          .timeline-visual {
            display: none !important;
          }
          .investor-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div
        className="investor-hero"
        style={{ position: "relative", overflow: "visible" }}
      >
        <div
          className="investor-content"
          style={{ position: "relative", zIndex: 2 }}
        >
          <span className="section-label">Investors</span>
          <h1
            className="section-title"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "24px" }}
          >
            The operating system for regulated industries
          </h1>
          <p className="section-description" style={{ maxWidth: "600px" }}>
            Archv is building the all-in-one platform for legal, healthcare,
            education, and finance. One OS that does everything — documents,
            presentations, research, analysis — with compliance built into every
            action.
          </p>
          <div className="investor-buttons">
            <button className="download-deck" onClick={handleDownloadDeck}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10 3v10M6 9l4 4 4-4" />
                <path d="M3 14v3h14v-3" />
              </svg>
              Download Pitch Deck
            </button>
            <a
              href="https://www.linkedin.com/company/archvai/"
              target="_blank"
              rel="noopener noreferrer"
              className="download-deck"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </div>
        <div
          className="hero-image-desktop"
          style={{
            position: "absolute",
            right: "0px",
            top: "50%",
            transform: "translateY(calc(-50% + 190px))",
            zIndex: 1,
          }}
        >
          <img
            src="/visualcontent/InvestorImg.svg"
            alt="Archv Investors"
            style={{
              width: "950px",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Why Now */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Why Now</span>
            <h2 className="section-title">The perfect storm</h2>
          </div>
          <p className="section-description">
            Three forces are converging to create the largest opportunity in
            enterprise software.
          </p>
        </div>
        <div className="why-now-grid">
          <div className="why-now-card">
            <span className="why-now-number">01</span>
            <h3 className="why-now-title">AI Adoption is Exploding</h3>
            <p className="why-now-desc">
              Enterprise AI spending is accelerating faster than any technology
              in history. Every organization is racing to adopt AI — but
              regulated industries can't move without compliance guarantees.
            </p>
          </div>
          <div className="why-now-card">
            <span className="why-now-number">02</span>
            <h3 className="why-now-title">Regulators are Cracking Down</h3>
            <p className="why-now-desc">
              SEC, HHS, state bar associations — regulators are issuing AI
              guidance faster than companies can respond. The compliance burden
              is growing exponentially.
            </p>
          </div>
          <div className="why-now-card">
            <span className="why-now-number">03</span>
            <h3 className="why-now-title">Point Solutions Create Chaos</h3>
            <p className="why-now-desc">
              Companies are stitching together 5-10 different AI tools with no
              unified compliance layer. Every new tool is a new risk.
            </p>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Market Opportunity</span>
            <h2 className="section-title">Massive addressable markets</h2>
          </div>
        </div>
        <div className="market-grid">
          <div className="market-card">
            <span className="market-vertical">Legal</span>
            <span className="market-size">$400B</span>
            <span className="market-label">US Legal Services Market</span>
            <p className="market-desc">
              Harvey raised at $8B valuation doing legal AI. We're the operating
              system.
            </p>
          </div>
          <div className="market-card">
            <span className="market-vertical">Healthcare</span>
            <span className="market-size">$240B</span>
            <span className="market-label">US Healthcare IT Market</span>
            <p className="market-desc">
              HIPAA violations cost billions annually. Healthcare organizations
              need compliant AI.
            </p>
          </div>
          <div className="market-card">
            <span className="market-vertical">Education</span>
            <span className="market-size">$75B</span>
            <span className="market-label">US EdTech Market</span>
            <p className="market-desc">
              FERPA compliance and academic integrity concerns slow every AI
              deployment.
            </p>
          </div>
          <div className="market-card">
            <span className="market-vertical">Finance</span>
            <span className="market-size">$195B</span>
            <span className="market-label">US Financial Services IT</span>
            <p className="market-desc">
              SEC and FINRA scrutiny makes every AI deployment a compliance
              exercise.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Win */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Why We Win</span>
            <h2 className="section-title">Platform vs. Point Solutions</h2>
          </div>
        </div>
        <div className="features-list">
          <div className="feature-item">
            <span className="feature-number">01</span>
            <h3 className="feature-title">All-in-One Platform</h3>
            <p className="feature-desc">
              Competitors do one thing. Archv does everything — documents,
              presentations, research, analysis. One platform, one compliance
              layer.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-number">02</span>
            <h3 className="feature-title">Vertical Expansion</h3>
            <p className="feature-desc">
              Legal first, then healthcare, education, finance. Same core OS,
              different compliance configurations.
            </p>
          </div>
          <div className="feature-item">
            <span className="feature-number">03</span>
            <h3 className="feature-title">Compliance as Moat</h3>
            <p className="feature-desc">
              Every action logged. Every output auditable. Once organizations
              build their workflow on Archv, switching costs are enormous.
            </p>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section>
        <div className="section-header">
          <div>
            <span className="section-label">Business Model</span>
            <h2 className="section-title">How we make money</h2>
          </div>
        </div>
        <div className="business-model-grid">
          <div className="business-model-card">
            <h3 className="business-model-title">Platform Subscription</h3>
            <p className="business-model-desc">
              Annual or monthly subscription based on organization size.
              Predictable recurring revenue.
            </p>
          </div>
          <div className="business-model-card">
            <h3 className="business-model-title">Usage-Based Pricing</h3>
            <p className="business-model-desc">
              Pay for what you use — document processing, API calls, storage.
            </p>
          </div>
          <div className="business-model-card">
            <h3 className="business-model-title">Enterprise Tiers</h3>
            <p className="business-model-desc">
              Premium features for large organizations — on-premise deployment,
              custom integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline with Image */}
      <div
        className="timeline-with-visual"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "40px",
          padding: "0 20px",
          position: "relative",
        }}
      >
        <div
          className="timeline-container"
          style={{ flex: "0 1 600px", minWidth: "0" }}
        >
          <Timeline />
        </div>
        <div
          className="timeline-visual"
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
          <img
            src="/visualcontent/ARCHV (4).svg"
            alt="Archv Visual"
            style={{
              width: "clamp(1100px, 35vw, 550px)",
              height: "auto",
              opacity: "0.9",
            }}
          />
        </div>
      </div>

      <div className="investor-grid">
        <div className="investor-block">
          <span className="investor-block-title">The Opportunity</span>
          <p className="investor-block-content">
            Regulated industries are desperate for AI but terrified of
            compliance risk. The market needs an operating system that does
            everything, compliantly.
          </p>
        </div>
        <div className="investor-block">
          <span className="investor-block-title">Our Approach</span>
          <p className="investor-block-content">
            One platform that replaces the entire tool stack. Compliance isn't a
            feature — it's the foundation everything runs on.
          </p>
        </div>
        <div className="investor-block">
          <span className="investor-block-title">Vertical Growth</span>
          <p className="investor-block-content">
            Legal first. Healthcare second. Education third. Finance fourth.
            Land in one vertical, expand to all four.
          </p>
        </div>
        <div className="investor-block">
          <span className="investor-block-title">Get in Touch</span>
          <p className="investor-block-content">
            We're building the operating system for regulated industries.
            <br />
            <br />
            <a href="mailto:hello@archvai.com">hello@archvai.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Investors;
