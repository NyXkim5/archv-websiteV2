import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: "Archv Website",
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          role: formData.role || "Not selected",
          message: formData.message || "No message provided",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="page">
      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .contact-video-container {
            display: none !important;
          }
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 0;
          transition: all 0.2s ease;
          color: #000;
        }
        .social-icon:hover {
          background: #000;
          color: #fff;
          border-color: #000;
        }
      `}</style>

      <div className="contact-container">
        <div
          className="contact-info"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", zIndex: 10 }}>
            <h1>Let's talk</h1>
            <p>
              Ready to see how Archv can transform your workflow? Fill out the
              form and we'll be in touch within 24 hours.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              {/* Email Icon */}
              <a
                href="mailto:hello@archvai.com"
                className="social-icon"
                title="Email us"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6L12 13L2 6" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/archvai/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="Follow on LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Logo Video */}
          <div
            className="contact-video-container"
            style={{
              position: "absolute",
              right: "-50px",
              bottom: "-50px",
              width: "500px",
              height: "500px",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            >
              <source src="/visualcontent/ArchvLogoVid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="contact-form">
          {status === "success" ? (
            <div
              style={{
                padding: "48px 32px",
                textAlign: "center",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                style={{ marginBottom: "16px" }}
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
                Message Sent!
              </h3>
              <p style={{ color: "#666", marginBottom: "24px" }}>
                Thank you for reaching out. We'll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{
                  background: "transparent",
                  border: "1px solid #000",
                  padding: "12px 24px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  className="form-input"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <select
                  name="role"
                  className="form-select"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={status === "loading"}
                >
                  <option value="">Select your role</option>
                  <option value="executive">Executive</option>
                  <option value="manager">Manager</option>
                  <option value="individual">Individual Contributor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  disabled={status === "loading"}
                />
              </div>

              {status === "error" && (
                <div
                  style={{
                    padding: "12px 16px",
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#dc2626",
                    marginBottom: "16px",
                    fontSize: "14px",
                  }}
                >
                  Something went wrong. Please try again or email us directly at
                  hello@archvai.com
                </div>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === "loading"}
                style={{
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
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
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
