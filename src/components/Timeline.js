import React, { useEffect, useRef, useState } from "react";

function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      date: "Q4 2025",
      title: "Launch & Legal Focus",
      description:
        "Public launch targeting law firms. First demo users. SOC 2 Type II certification in progress.",
      active: true,
    },
    {
      date: "Q1 2026",
      title: "Product Expansion",
      description:
        "Microsoft Office integration. Advanced document generation. Enterprise features rollout.",
      active: false,
    },
    {
      date: "Q2 2026",
      title: "Healthcare Vertical",
      description:
        "HIPAA-compliant deployment. Healthcare-specific workflows. Clinical documentation features.",
      active: false,
    },
    {
      date: "Q3 2026",
      title: "Financial Vertical",
      description:
        "SEC. FINRA. SOX. Every regulator watching every move. Archv gives your team AI-powered workflows with the compliance infrastructure financial services demands.",
      active: false,
    },
    {
      date: "Q4 2026",
      title: "Education Vertical",
      description:
        "FERPA compliance. Academic integrity features. K-12 and higher education focus.",
      active: false,
    },
    {
      date: "Beyond",
      title: "Scale",
      description:
        "Series A. International expansion. Full platform maturity across all verticals.",
      active: false,
    },
  ];

  return (
    <section className="timeline" ref={timelineRef}>
      <div className="timeline-header">
        <span className="section-label">Roadmap</span>
        <h2 className="section-title">Where we're going</h2>
      </div>
      <div className={`timeline-container ${isVisible ? "animate" : ""}`}>
        <div className="timeline-line">
          <div className="timeline-line-progress"></div>
        </div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item ${milestone.active ? "active" : ""}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-dot">
              {milestone.active && <span className="timeline-dot-pulse"></span>}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{milestone.date}</span>
              <h3 className="timeline-title">{milestone.title}</h3>
              <p className="timeline-desc">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
