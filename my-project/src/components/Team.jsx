import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import facultyImg from "../assets/e-baja.jpg"; // add your faculty image
import carImg from "../assets/e-baja.jpg";

export default function Team() {

  const teamMembers = [
    { 
      name: "Navdeep Singh", 
      role: "Team Lead", 
      img: carImg,
      linkedin: "https://linkedin.com/in/navdeep"
    },
    { 
      name: "Ramswaroop", 
      role: "Design Engineer", 
      img: carImg,
      linkedin: "https://linkedin.com/in/ramswaroop"
    },
    { 
      name: "Manas Patidar", 
      role: "Powertrain", 
      img: carImg,
      linkedin: "https://linkedin.com/in/manas"
    },
    { 
      name: "Sanskar Panday", 
      role: "Aerodynamics", 
      img: carImg,
      linkedin: "https://linkedin.com/in/sanskar"
    },
    { 
      name: "sounik jana", 
      role: "Team Lead", 
      img: carImg,
      linkedin: "https://linkedin.com/in/navdeep"
    }
  ];

  return (
    <section id="team" className="px-10 py-16 bg-gray-100 text-center">


      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-10">TEAM</h2>

      {/* FACULTY ADVISOR */}
      <h3 className="text-2xl font-semibold mb-10 text-black">Faculty Advisor</h3>

      <div className="flex justify-center mb-20">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[300px]">

          <img
            src={facultyImg}
            alt="faculty"
            className="w-32 h-32 mx-auto rounded-2xl object-cover mb-4"
          />

          <h4 className="text-lg font-semibold text-black">
            Mr. john the don
          </h4>

          <p className="text-gray-500 text-sm">
            Secretary Professor, Mechanical Engineering
          </p>

        </div>
      </div>
      

      

      {/* TEAM MEMBERS */}
      <h3 className="text-3xl font-bold mb-10 text-black">TEAM MEMBERS</h3>

      <div className="grid md:grid-cols-4 gap-8 px-10">
        {teamMembers.map((member, i) => (
          <div 
            key={i} 
            className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 mx-auto object-cover mb-4"
            />

            <h4 className="text-lg font-semibold text-black">
              {member.name}
            </h4>

            <p className="text-gray-500 text-sm mb-3">
              {member.role}
            </p>

            {/* LINKEDIN ICON */}
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <FaLinkedin className="text-blue-600 text-2xl hover:scale-110 transition cursor-pointer" />
            </a>

          </div>
        ))}
      </div>
    

    </section>
  );
}