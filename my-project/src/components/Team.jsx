import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

import img1 from "../teamphoto/navdeep.jpeg";
import img2 from "../teamphoto/ram.jpg";
import img3 from "../teamphoto/sanskar.jpg";
import img4 from "../teamphoto/manas.jpeg";
import img5 from "../teamphoto/rajat.jpg";
import img6 from "../teamphoto/sounik.jpeg";
import img7 from "../teamphoto/lokesh.jpg";
import img8 from "../teamphoto/amandeep.jpeg";
import img9 from "../teamphoto/anand.jpeg";
import img10 from "../teamphoto/Pratish.jpeg";
import img11 from "../teamphoto/Abhiraj.jpeg";
import img12 from "../teamphoto/neeraj.jpeg";
import img13 from "../teamphoto/aryan1.jpeg";
import img14 from "../teamphoto/saksham.jpeg";
import img15 from "../teamphoto/sunil.jpg";
import img16 from "../teamphoto/ashmit.jpeg";
import img17 from "../teamphoto/Aditya.jpeg";
import img18 from "../teamphoto/devjyoti.jpeg";
import img19 from "../teamphoto/Arnav Kumar.jpeg";
import img20 from "../teamphoto/anirudh.jpeg";
import img21 from "../teamphoto/shravan.jpeg";
import img22 from "../teamphoto/pankaj.jpeg";
import img23 from "../teamphoto/nitin.jpeg";

export default function Team() {
  const [showMore, setShowMore] = useState(false);

  const mentors = [
    { name: "Nitin Yadav", role: "Guide", img: img23, linkedin: "https://www.linkedin.com/in/nitinyadav270n?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Shravan Silekar", role: "Guide", img: img21, linkedin: "https://www.linkedin.com/in/shravan-silekar-b31064288?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Anirudh Pratap Singh", role: "Guide", img: img20, linkedin: "#" },
  ];

  const teamLeads = [
    { name: "Navdeep Singh", role: "Team Captain", img: img1, linkedin: "https://www.linkedin.com/in/navdeep-singh-381967270?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Ramswaroop Swami", role: "Matlab Lead", img: img2, linkedin: "https://www.linkedin.com/in/ramswaroop-swami-51544540b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Sanskar Pandey", role: "CAE Lead", img: img3, linkedin: "https://www.linkedin.com/in/sanskar-pandey-a76533321?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Manas Patidar", role: "Technical Head", img: img4, linkedin: "https://www.linkedin.com/in/manas-patidar-996595321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Rajat Singh Chauhan", role: "Structural Design Lead", img: img5, linkedin: "https://www.linkedin.com/in/rajatchauhan2004?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Sounik Jana", role: "3D Modeling", img: img6, linkedin: "https://www.linkedin.com/in/sounik-jana-1a280a312?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Lokesh Chandra", role: "Testing Head", img: img7, linkedin: "https://www.linkedin.com/in/lokesh-chandra-b417b5203?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ];

  const engineers = [
    { name: "Amandeep Singh", role: "Suspension & Steering", img: img8, linkedin: "https://www.linkedin.com/in/amandeep-singh-438980379?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
    { name: "Anand K", role: "Design & CAE", img: img9, linkedin: "https://www.linkedin.com/in/anand-k-420934275?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Pratish Rai", role: "Lead", img: img10, linkedin: "https://www.linkedin.com/in/pratish-rai-44a9731ab/" },
    { name: "Abhiraj", role: "Lead", img: img11, linkedin: "https://www.linkedin.com/in/abhiraj-singh-520094358?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Neeraj Prasad", role: "Power Train", img: img12, linkedin: "https://www.linkedin.com/in/neeraj-prasad-aa3129373?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Aryan Singh", role: "Suspension & Steering", img: img13, linkedin: "https://www.linkedin.com/in/aryan-singh-a7298636b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Saksham Prakash Verma", role: "Braking", img: img14, linkedin: "https://www.linkedin.com/in/saksham-prakash-verma-6a9347375?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Sunil Chauhan", role: "Cost & Manufacturing", img: img15, linkedin: "https://www.linkedin.com/in/sunil-chauhan-0b17a3379?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Ashmit Maurya", role: "Powertrain & CAE", img: img16, linkedin: "https://www.linkedin.com/in/ashmit-maurya-a62337375?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Aditya Soni", role: "Lead", img: img17, linkedin: " https://www.linkedin.com/in/arnav-kumar2705?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Devjyoti Dalal", role: "Braking", img: img18, linkedin: "https://www.linkedin.com/in/devjyoti-dalal-7186a6376?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Arnav", role: "Lead", img: img19, linkedin: " https://www.linkedin.com/in/arnav-kumar2705?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ];

  // CARD
  const Card = ({ member }) => (
    <div className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      
      <img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 mx-auto object-cover mb-4 rounded-xl"
      />

      {/* NAME FIXED (ONE LINE) */}
      <h4 className="text-base font-semibold text-black whitespace-nowrap overflow-hidden text-ellipsis">
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
    <section className="px-6 md:px-12 py-16 bg-gray-100 text-center" id="team" >

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        TEAM
      </h2>

      {/* FACULTY */}
      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Faculty Advisor
      </h3>

      <div className="flex justify-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[260px]">
          <img src={img22} className="w-28 h-28 mx-auto rounded-xl mb-4" />
          <h4 className="font-semibold">Mr. Pankaj Dorlikar</h4>
          <p className="text-gray-500 text-sm">Assistant Professor</p>
        </div>
      </div>

      {/* MENTORS */}
<h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">
  Mentors
</h3>

<div className="max-w-4xl mx-auto mb-16 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {mentors.map((m, i) => (
      <Card key={i} member={m} />
    ))}
  </div>
</div>

      {/* TEAM LEADS */}
      <h3 className="text-xl md:text-2xl font-semibold mb-8">
        Team Leads
      </h3>

      {/* 🔥 4 PER ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {teamLeads.map((m, i) => <Card key={i} member={m} />)}
      </div>

      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="bg-black text-white px-6 py-2 rounded-md mb-16"
        >
          See More
        </button>
      )}

      {/* ENGINEERS */}
      {showMore && (
        <>
          <h3 className="text-xl md:text-2xl font-semibold mb-8">
            Engineering Team
          </h3>

          {/*  4 PER ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {engineers.map((m, i) => <Card key={i} member={m} />)}
          </div>

          <button
  onClick={() => {
    setShowMore(false);

    teamRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="bg-gray-700 text-white px-6 py-2 rounded-md"
>
  See Less
</button>
        </>
      )}
    </section>
  );
}