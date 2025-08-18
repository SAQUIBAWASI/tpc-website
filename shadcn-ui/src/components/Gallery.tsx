const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/images/Founder.jpg" },
  { name: "Jyothsna", role: "Manager", img: "/images/team2.png" },
  { name: "Shruthi", role: "Human Resource", img: "/images/team3.png" },
  { name: "Rahul", role: "Designer", img: "/images/team4.png" },
  { name: "Sneha", role: "Developer", img: "/images/team5.png" },
  { name: "Kiran", role: "UI/UX", img: "/images/team6.png" },
  { name: "Anjali", role: "Marketing", img: "/images/team7.png" },
  { name: "Vikram", role: "DevOps", img: "/images/team8.png" },
  { name: "Pooja", role: "Finance", img: "/images/team9.png" },
  { name: "Rohit", role: "Tester", img: "/images/team10.png" },
  { name: "Meena", role: "Content Writer", img: "/images/team11.png" },
  { name: "Arjun", role: "AI Engineer", img: "/images/team12.png" },
  { name: "Divya", role: "Support", img: "/images/team13.png" },
  { name: "Karthik", role: "Data Analyst", img: "/images/team14.png" },
  { name: "Simran", role: "Intern", img: "/images/team15.png" },
  { name: "Raj", role: "Backend Dev", img: "/images/team16.png" },
  { name: "Neha", role: "Frontend Dev", img: "/images/team17.png" },
  { name: "Suresh", role: "QA", img: "/images/team18.png" },
  { name: "Tanvi", role: "Operations", img: "/images/team19.png" },
  { name: "Aman", role: "Research", img: "/images/team20.png" },
];

export default function TeamSection() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Meet Our <span className="text-green-600">Expert Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate group of innovators, designers, developers, and strategists 
            working together to build exceptional digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-md group-hover:scale-105 transform transition duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-gray-900">{member.name}</h3>
              <p className="text-green-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
