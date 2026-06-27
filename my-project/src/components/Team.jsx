export default function Team() {
  const teamMembers = [
    { name: "Navdeep Singh", role: "Team Lead", img: "/assets/m1.jpg" },
    { name: "Ramswaroop", role: "Design Engineer", img: "/assets/m2.jpg" },
    { name: "Manas Patidar", role: "Powertrain", img: "/assets/m3.jpg" },
    { name: "Sanskar Panday", role: "Aerodynamics", img: "/assets/m4.jpg" },
    { name: "Sanskar Panday", role: "Aerodynamics", img: "/assets/m4.jpg" },
    { name: "Sanskar Panday", role: "Aerodynamics", img: "/assets/m4.jpg" }
  ];

  return (
    <section id="team" className="px-10 py-10 bg-gray-955">
      <h2 className="text-4xl py-10 font-bold mb-20 text-left">OUR TEAM</h2>

      <div className="grid md:grid-cols-4 gap-8 px-16">
        {teamMembers.map((member, i) => (
          <div key={i} className="bg-black p-4 text-center rounded-lg">
            
            <img
              src={member.img}
              alt={member.name}
              className="mb-4 rounded-lg"
            />

            <h3 className="text-lg font-semibold">
              {member.name}
            </h3>

            <p className="text-gray-400 text-sm">
              {member.role}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}