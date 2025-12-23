import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";

function FAQ() {
  const { category } = useParams();
  const navigate = useNavigate();

  const categories = [
    { id: "general", name: "General" },
    { id: "legal", name: "Legal" },
    { id: "healthcare", name: "Healthcare" },
    { id: "education", name: "Education" },
    { id: "finance", name: "Finance" },
  ];

  const generalFAQ = [
    {
      question: "What is Archv?",
      answer:
        "Archv is an AI operating system built for regulated industries. We provide a single platform for document generation, presentations, research, analysis, and more — all with compliance built in from the ground up. Unlike general AI tools, Archv is designed specifically for industries where compliance isn't optional.",
    },
    {
      question: "How is Archv different from ChatGPT or other AI tools?",
      answer:
        "Unlike general-purpose AI tools, Archv is built specifically for regulated industries. Your data never trains AI models, every action is logged for compliance, and we offer enterprise features like SSO, audit trails, and data residency options. We're not a chatbot — we're an operating system that does everything your team needs with compliance built into every action.",
    },
    {
      question: "What industries does Archv support?",
      answer:
        "We currently focus on legal, healthcare, education, and finance — industries where compliance isn't optional. Our platform is designed to meet the specific regulatory requirements of each industry, including HIPAA for healthcare, FERPA for education, and SEC/FINRA requirements for finance.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use AES-256 encryption at rest, TLS 1.3 in transit, and complete tenant isolation. Your data never trains AI models, and we offer on-premise deployment for organizations that need it. We're pursuing SOC 2 Type II certification and are HIPAA-ready with BAA agreements available.",
    },
    {
      question: "Can I try Archv before committing?",
      answer:
        "Yes! Contact us to schedule a demo and we'll walk you through the platform. We also offer pilot programs for enterprise customers to test Archv with their specific workflows before making a commitment.",
    },
  ];

  const legalFAQ = [
    {
      question: "What can Archv do for law firms?",
      answer:
        "Archv helps law firms with contract drafting and review, legal research and case analysis, client letter generation, brief and motion preparation, discovery document processing, compliance reporting, and more. Every action is logged and auditable to maintain privilege and meet bar requirements.",
    },
    {
      question: "How does Archv handle attorney-client privilege?",
      answer:
        "Archv is designed with privilege protection built in. Your data is completely isolated, never used for training, and all communications are encrypted end-to-end. We maintain strict access controls and provide complete audit trails for all document handling.",
    },
    {
      question: "Can Archv help with legal research?",
      answer:
        "Yes. Archv can research case law, synthesize findings, identify relevant precedents, and help draft briefs with proper citations. Every source is tracked and logged for your records, making it easy to verify research and maintain accurate citation trails.",
    },
    {
      question: "Does Archv integrate with document management systems?",
      answer:
        "Yes. We integrate with iManage, NetDocuments, and other popular document management systems used by law firms. We also offer Microsoft Office integration so you can work directly in Word, PowerPoint, and Outlook with full compliance protection.",
    },
    {
      question: "What about client-facing communications?",
      answer:
        "Archv can generate client letters, status updates, engagement letters, and other client communications while maintaining your firm's voice and style. All communications are logged and can be reviewed before sending.",
    },
  ];

  const healthcareFAQ = [
    {
      question: "What can Archv do for healthcare organizations?",
      answer:
        "Archv helps healthcare organizations with clinical documentation, patient summaries, discharge instructions, research synthesis, administrative documents, compliance reporting, and more. Everything is HIPAA-compliant with PHI detection and protection built in.",
    },
    {
      question: "Is Archv HIPAA compliant?",
      answer:
        "Yes. We offer BAA agreements, PHI detection and protection, and all the technical safeguards required for HIPAA compliance. Our platform includes automatic PHI identification, encrypted data handling, and complete audit trails for all patient-related information.",
    },
    {
      question: "Can Archv handle clinical documentation?",
      answer:
        "Yes. Archv can help with clinical notes, patient summaries, discharge instructions, referral letters, and other healthcare documentation — all HIPAA-compliant. We support structured data extraction from medical records and can help standardize documentation across your organization.",
    },
    {
      question: "How does Archv protect patient information?",
      answer:
        "We use multiple layers of protection including automatic PHI detection, AES-256 encryption, complete tenant isolation, and strict access controls. Your data never leaves your control and is never used to train AI models. We also offer on-premise deployment for organizations requiring additional security.",
    },
    {
      question: "Can Archv help with medical research?",
      answer:
        "Yes. Archv can help synthesize research papers, analyze clinical data, prepare grant applications, and generate research summaries. All research activities are logged and auditable for compliance with institutional review requirements.",
    },
  ];

  const educationFAQ = [
    {
      question: "What can Archv do for educational institutions?",
      answer:
        "Archv helps schools and universities with lesson planning, curriculum development, student progress reports, administrative documents, research papers, grant applications, and more. Everything is FERPA-compliant with academic integrity features built in.",
    },
    {
      question: "Is Archv FERPA compliant?",
      answer:
        "Yes. We maintain complete data isolation and provide all the safeguards required for FERPA compliance in educational settings. Student data is protected with the same enterprise-grade security we provide to all regulated industries.",
    },
    {
      question: "How does Archv address academic integrity?",
      answer:
        "Archv includes features designed to support academic integrity policies, including detailed audit trails of all AI-assisted work, clear documentation of AI usage, and controls that help institutions maintain their integrity standards.",
    },
    {
      question: "Can teachers use Archv for lesson planning?",
      answer:
        "Yes. Teachers can use Archv to create lesson plans, develop curriculum materials, generate assessments, create student reports, and prepare educational content. All materials are customizable to specific grade levels and learning objectives.",
    },
    {
      question: "Does Archv work for higher education?",
      answer:
        "Absolutely. Universities can use Archv for research synthesis, grant writing, administrative workflows, course development, student communications, and more. We support the specific compliance requirements of higher education institutions.",
    },
  ];

  const financeFAQ = [
    {
      question: "What can Archv do for financial services?",
      answer:
        "Archv helps financial institutions with report generation, regulatory filings, client presentations, compliance documentation, research analysis, audit preparation, and more. Everything includes complete audit trails for SEC, FINRA, and SOX compliance.",
    },
    {
      question: "Does Archv meet SEC and FINRA requirements?",
      answer:
        "Archv provides complete audit trails, data retention, and compliance reporting features designed to meet SEC and FINRA requirements. Every action is logged, timestamped, and exportable for regulatory review.",
    },
    {
      question: "Can Archv help with financial reporting?",
      answer:
        "Yes. Archv can help generate reports, analyze financial data, create presentations for clients and stakeholders, and prepare regulatory filings — all with the audit trails regulators require.",
    },
    {
      question: "How does Archv handle sensitive financial data?",
      answer:
        "We use AES-256 encryption, complete tenant isolation, and strict access controls to protect sensitive financial data. Your data never trains AI models and we offer on-premise deployment for institutions requiring additional security.",
    },
    {
      question: "Can Archv assist with client communications?",
      answer:
        "Yes. Archv can help prepare client reports, investment summaries, market analyses, and other client-facing documents while maintaining compliance with communication regulations and your firm's voice.",
    },
  ];

  const getFAQByCategory = () => {
    switch (category) {
      case "legal":
        return {
          title: "Archv for Legal",
          subtitle:
            "How Archv helps law firms work smarter while maintaining privilege and compliance.",
          items: legalFAQ,
        };
      case "healthcare":
        return {
          title: "Archv for Healthcare",
          subtitle:
            "HIPAA-compliant AI for clinical documentation, research, and administrative workflows.",
          items: healthcareFAQ,
        };
      case "education":
        return {
          title: "Archv for Education",
          subtitle:
            "FERPA-compliant AI for curriculum development, student reports, and administrative tasks.",
          items: educationFAQ,
        };
      case "finance":
        return {
          title: "Archv for Finance",
          subtitle:
            "SEC and FINRA-ready AI for reporting, analysis, and client communications.",
          items: financeFAQ,
        };
      default:
        return {
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about Archv.",
          items: generalFAQ,
        };
    }
  };

  const faqData = getFAQByCategory();

  return (
    <div className="page">
      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-image-desktop {
            display: none !important;
          }
          .faq-categories {
            flex-wrap: wrap !important;
            gap: 8px !important;
          }
          .faq-category-btn {
            padding: 10px 16px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      <section
        className="page-hero"
        style={{ position: "relative", overflow: "visible" }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <span className="section-label">FAQ</span>
          <h1 className="section-title">{faqData.title}</h1>
          <p className="section-description">{faqData.subtitle}</p>
        </div>
        <div
          className="hero-image-desktop"
          style={{
            position: "absolute",
            right: "-700px",
            top: "50%",
            transform: "translateY(calc(-50% + 50px))",
            zIndex: 1,
          }}
        >
          <img
            src="/visualcontent/question.svg"
            alt="FAQ"
            style={{
              width: "900px",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* Category Navigation */}
      <section style={{ paddingTop: 0, paddingBottom: "40px" }}>
        <div className="faq-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`faq-category-btn ${
                (category || "general") === cat.id ? "active" : ""
              }`}
              onClick={() =>
                navigate(cat.id === "general" ? "/faq" : `/faq/${cat.id}`)
              }
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <Accordion items={faqData.items} />
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <span className="section-label">Still Have Questions?</span>
        <h2 className="section-title">We're here to help</h2>
        <p className="section-description">
          Can't find what you're looking for? Our team is happy to answer any
          questions.
        </p>
        <button className="hero-cta" onClick={() => navigate("/contact")}>
          Contact Us
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default FAQ;
