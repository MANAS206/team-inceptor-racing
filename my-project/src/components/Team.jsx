import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import facultyImg from "../assets/e-baja.jpg";
import carImg from "../assets/e-baja.jpg";

export default function Team() {

  const [showMore, setShowMore] = useState(false);

  // 🔹 Mentors
  const mentors = [
    { name: "Nitin Yadav", role: "Guid", img: carImg,linkedin: "#" },
    { name: "Shravan Silekar", role: "Guide", img: carImg,linkedin: "#" },
    { name: "Anirudh Pratap singh", role: "Guide", img: carImg,linkedin: "#" },
  ];

  // 🔹 Team Leads (7)
  const teamLeads = [
    { name: "Navdeep Singh", role: "Team Lead", img: carImg, linkedin: "#" },
    { name: "Ramswaroop Swami", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Sanskar Pandey", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Manas Patidar", role: "Doggy", img: carImg, linkedin: "#" },
    { name: "Rajat Singh Chauhan", role: "manas ke sath  doggy", img: carImg, linkedin: "#" },
    { name: "sounik Jana", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Lokesh Chandra", role: "Lead", img: carImg, linkedin: "#" },
  ];

  // 🔹 Engineers (12)
  const engineers = [
    { name: "Amandeep singh", role: "Team Lead", img: carImg, linkedin: "#" },
    { name: "Anand", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Pratish Rai", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Abhiraj", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Neeraj Singh", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Aryan singh", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Saksham Verma", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Sunil Chauhan", role: "Team Lead", img: carImg, linkedin: "#" },
    { name: "Ashmit", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Aditya Soni", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Devjyoti Dalal", role: "Lead", img: carImg, linkedin: "#" },
    { name: "Arnav", role: "Lead", img: carImg, linkedin: "#" },
  ];

  // 🔹 Card Component
  const Card = ({ member }) => (
    <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 sm:w-28 sm:h-28 mx-auto object-cover mb-4 rounded-xl"
      />

      <h4 className="text-base sm:text-lg font-semibold text-black">
        {member.name}
      </h4>

      <p className="text-gray-500 text-sm mb-2">
        {member.role}
      </p>

      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin className="text-blue-600 text-xl mx-auto hover:scale-110 transition" />
        </a>
      )}
    </div>
  );

  return (
    <section id="team" className="px-4 sm:px-8 md:px-16 py-16 bg-gray-100 text-center">

      {/* TITLE */}
      <h2 id="teamTop" className="text-3xl md:text-4xl font-bold mb-12">
        TEAM
      </h2>

      {/* FACULTY */}
      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Faculty Advisor
      </h3>

      <div className="flex justify-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[260px] sm:w-[300px]">
          <img
            src={facultyImg}
            className="w-28 h-28 mx-auto rounded-xl object-cover mb-4"
          />
          <h4 className="font-semibold text-black">Mr. Pankaj Dorlikar</h4>
          <p className="text-gray-500 text-sm">
            Assistant Professor
          </p>
        </div>
      </div>

      {/* MENTORS */}
      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Mentors
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto mb-16">
        {mentors.map((m, i) => (
          <Card key={i} member={m} />
        ))}
      </div>

      {/* TEAM LEADS */}
      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Team Leads
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 mb-10">
        {teamLeads.map((m, i) => (
          <Card key={i} member={m} />
        ))}
      </div>

      {/* SEE MORE BUTTON (AFTER TEAM LEADS) */}
{!showMore && (
  <div className="mb-16">
    <button
      onClick={() => setShowMore(true)}
      className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
    >
      See More
    </button>
  </div>
)}

{/* ENGINEERING SECTION */}
{showMore && (
  <>
    <h3 className="text-xl md:text-2xl font-semibold mb-8">
      Engineering Team
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 mb-12">
      {engineers.map((m, i) => (
        <Card key={i} member={m} />
      ))}
    </div>

    {/* SEE LESS BUTTON AT END */}
    <div className="mb-10">
      <button
        onClick={() => setShowMore(false)}
        className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-black transition"
      >
        See Less
      </button>
    </div>
  </>
)}

    </section>
  );
}