import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // 🔹 HANDLE INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 VALIDATION
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // 🔹 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === "" ||
      !isValidEmail(formData.email)
    ) {
      setStatus("❌ Please enter valid details");
      return;
    }

    //  GOOGLE FORM URL (REPLACE ENTRY IDs)
    const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdI0LTApneWSc2WLYMb_wGQzwwzNtb4DArYYzfTuSPuX3rx8w/formResponse?usp=pp_url&entry.177378469=${formData.name}&entry.783685077=${formData.email}&entry.1037066672=${formData.message}`;

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
    })
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Something went wrong");
      });
  };

  return (
    <section id="contact" className="px-4 sm:px-8 md:px-16 py-20 bg-white">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        LET'S BUILD THE FUTURE
      </h2>

      {/* FORM */}
      <form 
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border border-black rounded-md"
          placeholder="Name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border border-black rounded-md"
          placeholder="Email"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 md:col-span-2 border border-black rounded-md"
          placeholder="Message"
          rows="5"
        />

        <button 
          type="submit"
          className="bg-green-600 text-white py-3 rounded-md md:col-span-2 hover:bg-green-700 transition"
        >
          Send Message
        </button>

      </form>

      {/* STATUS MESSAGE */}
      {status && (
        <p className="text-center mt-6 text-lg font-medium">
          {status}
        </p>
      )}

    </section>
  );
}