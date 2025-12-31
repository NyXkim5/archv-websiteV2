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
      `}</style>

      <div className="contact-container">
        <div
          className="contact-info"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div>
            <h1>Let's talk</h1>
            <p>
              Ready to see how Archv can transform your workflow? Fill out the
              form and we'll be in touch within 24 hours.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-label">Email</span>
                <span className="contact-item-value">
                  <a href="mailto:hello@archvai.com">hello@archvai.com</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">LinkedIn</span>
                <span className="contact-item-value">
                  <a
                    href="https://www.linkedin.com/company/archvai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @archvai
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Logo Video */}
          <div
            className="contact-video-container"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              marginTop: "-70px",
              paddingRight: "40px",
              maxWidth: "100%",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
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
