import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("❌ Failed to send message.");
      }
    } catch (err) {
      setResponseMessage("❌ Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-zinc-900 py-20 px-6 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <p className="text-stone-400 mb-12">
          Have a project or want to collaborate? Fill out the form below or reach out directly via email.
        </p>

        {responseMessage && (
          <p className="text-sm mb-4 text-green-400">{responseMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-6 text-left">
          <div>
            <label className="block mb-1 text-stone-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-stone-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-stone-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 px-6 py-3 rounded transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
