
const teamMembers = [
  { name: "Ajay Manthri", role: "Founder & CEO", img: "/images/team1.png" },
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
    <section id="gallery"className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12">MEET OUR EXPERT</h2>

        <div className="flex">
          {/* Left Big Text */}
          <div className="w-1/4 flex items-center justify-center">
            <h1 className="text-[120px] font-extrabold leading-none text-black">
              Te<br />am
            </h1>
          </div>

          {/* Right Team Grid */}
          <div className="w-3/4 grid grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-400 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
