import { useState, useRef, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef(null);

  // Auto-focus on name field when component mounts
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  const messageMaxLength = 500;
  const messageLength = formData.message.length;
  const messageRemaining = messageMaxLength - messageLength;

  return (
    <section id="contact" className="reveal">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameInputRef}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <div style={{ position: "relative" }}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            maxLength={messageMaxLength}
          />
          <div 
            style={{
              fontSize: "12px",
              color: messageRemaining < 50 ? "#ef4444" : "#64748b",
              marginTop: "6px",
              textAlign: "right"
            }}
          >
            {messageRemaining} characters remaining
          </div>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span className="spinner"></span>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {status && (
          <p className={`status-message ${status.includes("✅") ? "success" : "error"}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
