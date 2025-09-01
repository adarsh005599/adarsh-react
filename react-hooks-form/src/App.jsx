import React, { useState } from "react";

const inputStyle = {
  width: "100%",
  padding: ".7rem 1rem",
  borderRadius: ".7rem",
  border: "1px solid #e0e7ef",
  background: "#f8fafc",
  fontSize: "1rem",
  outline: "none",
  transition: "box-shadow .2s",
  boxShadow: "0 1px 4px rgba(0,0,0,0.03)"
};

const App = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(res => setTimeout(res, 2000));
    setSubmitting(false);
    alert("Form submitted!");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#fff",
        padding: "2.5rem 2rem",
        borderRadius: "1.25rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        minWidth: "340px",
        animation: "shadowPulse 2s infinite alternate"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#222",
          fontWeight: 700,
          letterSpacing: "1px"
        }}>Premium Form</h2>
        {["name", "email", "password"].map((field, i) => (
          <div key={field} style={{ marginBottom: i === 2 ? "1.5rem" : "1.2rem" }}>
            <label style={{ display: "block", marginBottom: ".5rem", color: "#444", fontWeight: 500 }}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "password" ? "password" : field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            padding: ".9rem",
            borderRadius: ".7rem",
            border: "none",
            background: submitting ? "#bfc9d1" : "linear-gradient(90deg, #4f8cff 0%, #6ed0fa 100%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(79,140,255,0.13)",
            cursor: submitting ? "not-allowed" : "pointer",
            transition: "background .3s, box-shadow .3s"
          }}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <style>{`
        @keyframes shadowPulse {
          0% { box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);}
          100% { box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.28);}
        }
      `}</style>
    </div>
  );
};

export default App;
