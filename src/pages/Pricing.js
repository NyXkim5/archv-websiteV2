import React from "react";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

  const tiers = [
    { num: "01", name: "STARTUP", desc: "UP TO 25 USERS" },
    { num: "02", name: "GROWTH", desc: "UP TO 100 USERS" },
    { num: "03", name: "ENTERPRISE", desc: "UNLIMITED SCALE" },
  ];

  const features = [
    { num: "01", name: "DOCUMENT GENERATION", desc: "ANY FORMAT" },
    { num: "02", name: "MICROSOFT INTEGRATION", desc: "WORD + EXCEL + PPT" },
    { num: "03", name: "FULL AUDIT LOGGING", desc: "COMPLIANCE TRAIL" },
    { num: "04", name: "SSO & MFA", desc: "ENTERPRISE AUTH" },
    { num: "05", name: "API ACCESS", desc: "INTEGRATIONS" },
    { num: "06", name: "COMPLIANCE SUITE", desc: "SOC2 + HIPAA + GDPR" },
  ];

  return (
    <div
      className="page"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        padding: "40px 70px",
      }}
    >
      <style>{`
        .pricing-hero {
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: end;
        }
        .pricing-hero-label {
          font-size: 12px;
          color: #999;
          font-style: italic;
          margin-bottom: 8px;
        }
        .pricing-hero-title {
          font-size: clamp(32px, 7vw, 56px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 12px;
        }
        .pricing-hero-desc {
          font-size: 14px;
          color: #666;
          max-width: 340px;
          line-height: 1.6;
        }
        .pricing-hero-barcode {
          opacity: 0.6;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .pricing-hero-barcode img {
          height: 280px;
          width: auto;
        }
        .pricing-hero-barcode-text {
          font-size: 9px;
          color: #999;
          letter-spacing: 0.1em;
          font-family: monospace;
        }
        .pricing-section {
          margin-bottom: 24px;
        }
        .pricing-section-label {
          font-size: 10px;
          color: #999;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pricing-list {
          display: flex;
          flex-direction: column;
        }
        .pricing-item {
          display: grid;
          grid-template-columns: 50px 1fr auto;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          gap: 12px;
        }
        .pricing-item:first-child {
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .pricing-item-num {
          font-size: 12px;
          color: #bbb;
          font-style: italic;
        }
        .pricing-item-name {
          font-size: clamp(18px, 3.5vw, 26px);
          font-weight: 500;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .pricing-item-desc {
          font-size: 10px;
          color: #888;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: right;
        }
        .pricing-notes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding: 20px 0;
          border-top: 1px solid rgba(0,0,0,0.06);
          margin-bottom: 24px;
        }
        .pricing-note-num {
          font-size: 10px;
          color: #ccc;
          margin-bottom: 4px;
        }
        .pricing-note-title {
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 2px;
        }
        .pricing-note-desc {
          font-size: 11px;
          color: #888;
          line-height: 1.4;
        }
        .pricing-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 40px 0;
          border-top: 1px solid rgba(0,0,0,0.08);
          text-align: center;
        }
        .pricing-cta-title {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .pricing-cta-btn {
          background: #000;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.2s;
        }
        .pricing-cta-btn:hover {
          background: #333;
        }
        .pricing-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.04);
          font-size: 10px;
          color: #ccc;
          letter-spacing: 0.05em;
        }
        .pricing-footer-barcode {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .pricing-footer-barcode img {
          height: 24px;
          width: auto;
          opacity: 0.4;
        }
        
        @media (max-width: 900px) {
          .pricing-hero-barcode img {
            height: 180px;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-hero {
            grid-template-columns: 1fr;
            margin-bottom: 24px;
            gap: 20px;
          }
          .pricing-hero-barcode {
            align-items: flex-start;
          }
          .pricing-hero-barcode img {
            height: 100px;
          }
          .pricing-hero-title {
            font-size: 28px;
          }
          .pricing-section {
            margin-bottom: 20px;
          }
          .pricing-item {
            grid-template-columns: 40px 1fr;
            gap: 8px;
            padding: 10px 0;
          }
          .pricing-item-desc {
            grid-column: 2;
            text-align: left;
            margin-top: 4px;
          }
          .pricing-item-name {
            font-size: 16px;
          }
          .pricing-notes {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 16px 0;
          }
          .pricing-cta {
            padding: 30px 0;
          }
          .pricing-cta-title {
            font-size: 22px;
          }
          .pricing-footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .pricing-footer-barcode {
            order: -1;
          }
          .pricing-section-label {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
        
        @media (max-width: 480px) {
          .pricing-hero-barcode img {
            height: 70px;
          }
          .pricing-hero-title {
            font-size: 24px;
          }
          .pricing-item-name {
            font-size: 15px;
          }
          .pricing-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Hero */}
      <div className="pricing-hero">
        <div className="pricing-hero-left">
          <div className="pricing-hero-label">( pricing )</div>
          <h1 className="pricing-hero-title">
            Custom plans,
            <br />
            built for you.
          </h1>
          <p className="pricing-hero-desc">
            Tailored packages based on your team size and compliance needs. No
            per-seat fees.
          </p>
        </div>
        <div className="pricing-hero-barcode">
          <img src="/visualcontent/barcode.svg" alt="" />
          <span className="pricing-hero-barcode-text">ARCHV-PRC-2025</span>
        </div>
      </div>

      {/* Tiers */}
      <section className="pricing-section">
        <div className="pricing-section-label">
          <span>PLANS</span>
          <span>( 01 - 03 )</span>
        </div>
        <div className="pricing-list">
          {tiers.map((tier) => (
            <div key={tier.num} className="pricing-item">
              <span className="pricing-item-num">( {tier.num} )</span>
              <span className="pricing-item-name">{tier.name}</span>
              <span className="pricing-item-desc">{tier.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="pricing-section">
        <div className="pricing-section-label">
          <span>ALL PLANS INCLUDE</span>
          <span>( 01 - 06 )</span>
        </div>
        <div className="pricing-list">
          {features.map((feature) => (
            <div key={feature.num} className="pricing-item">
              <span className="pricing-item-num">( {feature.num} )</span>
              <span className="pricing-item-name">{feature.name}</span>
              <span className="pricing-item-desc">{feature.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <div className="pricing-notes">
        <div>
          <div className="pricing-note-num">( i )</div>
          <div className="pricing-note-title">No per-seat fees</div>
          <div className="pricing-note-desc">Whole team, one price.</div>
        </div>
        <div>
          <div className="pricing-note-num">( ii )</div>
          <div className="pricing-note-title">Compliance included</div>
          <div className="pricing-note-desc">SOC 2, HIPAA, GDPR ready.</div>
        </div>
        <div>
          <div className="pricing-note-num">( iii )</div>
          <div className="pricing-note-title">Flexible terms</div>
          <div className="pricing-note-desc">Monthly or annual billing.</div>
        </div>
      </div>

      {/* CTA - Centered */}
      <div className="pricing-cta">
        <h2 className="pricing-cta-title">Let's build your plan</h2>
        <button
          className="pricing-cta-btn"
          onClick={() => navigate("/contact")}
        >
          Request a Quote
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <div className="pricing-footer">
        <span>ARCHV PRICING 2025</span>
        <div className="pricing-footer-barcode">
          <img src="/visualcontent/barcode.svg" alt="" />
          <span>( 01 - 06 )</span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
