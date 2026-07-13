import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({ text: "", isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // HANDLE FORM INPUT CHANGES
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // REGEX EMAIL CHECKER
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // FORM SUBMISSION PIPELINE
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize inputs by trimming leading/trailing white spaces
    const nameClean = formData.name.trim();
    const emailClean = formData.email.trim();
    const messageClean = formData.message.trim();

    if (nameClean === "" || emailClean === "" || messageClean === "" || !isValidEmail(emailClean)) {
      setStatus({ text: "❌ Please enter valid details.", isError: true });
      return;
    }

    // Toggle button block state to prevent double-click network spamming
    setIsSubmitting(true);
    setStatus({ text: "", isError: false });

    // Fixed: Escape special characters safely before appending to query strings
    const nameEncoded = encodeURIComponent(nameClean);
    const emailEncoded = encodeURIComponent(emailClean);
    const messageEncoded = encodeURIComponent(messageClean);

    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdI0LTApneWSc2WLYMb_wGQzwwzNtb4DArYYzfTuSPuX3rx8w/formResponse?usp=pp_url&entry.177378469=${nameEncoded}&entry.783685077=${emailEncoded}&entry.1037066672=${messageEncoded}`;

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
    })
      .then(() => {
        setStatus({ text: "✅ Message sent successfully!", isError: false });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ text: "❌ Something went wrong. Please try again.", isError: true });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="px-4 sm:px-8 md:px-16 py-20 bg-white text-black">
      
      {/* SECTION HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-wide">
        LET'S BUILD THE FUTURE
      </h2>

      {/* SUBMISSION FORM */}
      <form 
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Name"
          aria-label="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Email"
          aria-label="Your Email Address"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="p-3 md:col-span-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Message"
          aria-label="Your Message Body"
          rows="5"
          required
        />

        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 text-white py-3 rounded-md md:col-span-2 hover:bg-green-700 font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* DYNAMIC ACCESSIBLE STATUS FEEDBACK */}
      {status.text && (
        <p 
          className={`text-center mt-6 text-lg font-bold tracking-wide ${
            status.isError ? "text-red-600" : "text-green-700"
          }`}
          role="alert"
        >
          {status.text}
        </p>
      )}

    </section>
  );
}