import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);

  /* ---------- Scroll Reveal Animation ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- Handle Change ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* ---------- Validation ---------- */
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.idea) newErrors.idea = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------- Send Email ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          idea: "",
        });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div
        className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Let’s Build Something Together 🚀
        </h2>
        <p className="text-center text-gray-400 mb-10">
          I’m a fresher full-stack developer, open for internships & entry-level
          opportunities.
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Service */}
          <input
            type="text"
            name="service"
            placeholder="Service (Web App, Portfolio, Backend, etc.)"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Budget */}
          <input
            type="text"
            name="budget"
            placeholder="Budget (Optional)"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Message */}
          <div>
            <textarea
              name="idea"
              rows="4"
              placeholder="Tell me about your idea..."
              value={formData.idea}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.idea && (
              <p className="text-red-400 text-sm mt-1">{errors.idea}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-[1.02] transition-transform duration-300"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status === "success" && (
            <p className="text-green-400 text-center">
              Message sent successfully 🎉
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Something went wrong. Try again ❌
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
