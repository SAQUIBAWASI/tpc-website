import { Star } from "lucide-react";
import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Pavan",
      avatar: "/images/salon5.jpg",
      leftImage: "/images/salon4.jpg",
      rightImage: "/images/salon6.jpg",
      text: "The Social Media Marketing Services in Hyderabad provided by this company have been a game-changer for my business. Their team is knowledgeable, creative, and always on top of the latest trends in social media.",
    },
    {
      name: "Amit Verma",
      avatar: "/images/salon4.jpg",
      leftImage: "/images/salon4.jpg",
      rightImage: "/images/salon6.jpg",
      text: "The professionalism and dedication of this company is unmatched. They helped boost our online presence and sales significantly. A pleasure to work with.",
    },
    {
      name: "Raja Rao",
      avatar: "/images/salon4.jpg",
      leftImage: "/images/salon4.jpg",
      rightImage: "/images/salon6.jpg",
      text: "I recently engaged this media and portfolio company to develop a video for my business. The video was interesting, informative, and the team was professional, creative, and a joy to deal with. They provide the best SEO services in Hyderabad.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center min-h-[400px]">
        
        {/* Left Image */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <img
            src="/images/GateCT.jpg"
            alt="Left"
            className="w-full h-full object-cover rounded-[200px_0_200px_0] shadow-lg"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center px-8 transition-all duration-500">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-6">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-300 max-w-md mb-6">{current.text}</p>

          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-yellow-400 fill-yellow-400"
                size={22}
              />
            ))}
          </div>

          {/* Name */}
          <h3 className="text-green-400 text-lg font-bold">{current.name}</h3>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "bg-green-400" : "bg-white"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <img
            src="/images/T-Hub.jpg"
            alt="Right"
            className="w-full h-full object-cover rounded-[0_200px_0_200px] shadow-lg"
          />
        </div>
      </div>

      {/* Green bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-green-500"></div>
    </section>
  );
}
