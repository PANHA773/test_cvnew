// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-900 py-20 px-6 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <p className="text-stone-400 mb-12">
          Have a project or want to collaborate? Fill out the form below or reach out directly via email.
        </p>

        <form
          action="https://formspree.io/f/your_form_id" // Replace with your Formspree or backend endpoint
          method="POST"
          className="grid gap-6 text-left"
        >
          <div>
            <label className="block mb-1 text-stone-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-stone-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-stone-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
